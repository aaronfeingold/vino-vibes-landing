import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { partnerInterests } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { partnerSignupSchema } from "../../../lib/validation";
import { normalizeEmail } from "../../../lib/normalize-email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = partnerSignupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { website, ...data } = parsed.data;

    // Bots fill the hidden field; answer as if it worked and store nothing
    if (website) {
      return NextResponse.json({ success: true });
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

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;

    await db.insert(partnerInterests).values({
      ...data,
      normalizedEmail,
      ipAddress,
      userAgent: request.headers.get("user-agent"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner signup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
