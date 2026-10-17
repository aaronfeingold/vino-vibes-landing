import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { partnerInterests } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { partnerSignupSchema } from "../../../lib/validation";
import { normalizeEmail } from "../../../lib/normalize-email";
import {
  BodyTooLarge,
  MIN_FILL_MS,
  clientIp,
  isSameOrigin,
  rateLimit,
  readJson,
  verifyTurnstile,
} from "../../../lib/bot-guard";

export async function POST(request: NextRequest) {
  try {
    if (!isSameOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ipAddress = clientIp(request);
    if (!rateLimit(`partner:${ipAddress}`, 5, 10 * 60_000)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await readJson(request, 16_384);
    const parsed = partnerSignupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { website, elapsedMs, turnstileToken, ...data } = parsed.data;

    // Bots fill the hidden field or submit instantly; answer as if it worked and store nothing
    if (website || (elapsedMs ?? 0) < MIN_FILL_MS) {
      return NextResponse.json({ success: true });
    }

    if (!(await verifyTurnstile(turnstileToken, ipAddress))) {
      return NextResponse.json(
        { error: "Please confirm you're human and try again." },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(data.email);

    const existing = await db
      .select({ id: partnerInterests.id })
      .from(partnerInterests)
      .where(eq(partnerInterests.normalizedEmail, normalizedEmail))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "We already have your details. We'll be in touch soon." },
        { status: 409 }
      );
    }

    await db.insert(partnerInterests).values({
      ...data,
      normalizedEmail,
      ipAddress: ipAddress === "unknown" ? null : ipAddress,
      userAgent: request.headers.get("user-agent"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof BodyTooLarge || error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("Partner signup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
