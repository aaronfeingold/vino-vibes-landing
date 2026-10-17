import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { generateBetaWelcomeEmail } from "../../../lib/email-templates";
import { db } from "../../../lib/db";
import { betaSignups } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { betaSignupSchema } from "../../../lib/validation";
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
const resend = new Resend(process.env.RESEND_API_KEY);

// The same answer for a new email, a repeat, and a screened-out bot, so the
// endpoint can't be used to check who is on the list.
const OK = () =>
  NextResponse.json({ success: true, message: "Successfully joined beta list!" });

export async function POST(request: NextRequest) {
  try {
    if (!isSameOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip = clientIp(request);
    if (!rateLimit(`beta:${ip}`, 5, 10 * 60_000)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await readJson(request);

    // Validate request body with Zod
    const validationResult = betaSignupSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { email, website, elapsedMs, turnstileToken } = validationResult.data;

    // Bots fill the hidden field or submit instantly; answer as if it worked and store nothing
    if (website || (elapsedMs ?? 0) < MIN_FILL_MS) {
      return OK();
    }

    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return NextResponse.json(
        { error: "Please confirm you're human and try again." },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(email);

    // Check if email already exists
    const existingUser = await db
      .select({ id: betaSignups.id })
      .from(betaSignups)
      .where(eq(betaSignups.normalizedEmail, normalizedEmail))
      .limit(1);

    if (existingUser.length > 0) {
      return OK();
    }

    // Insert new signup
    await db.insert(betaSignups).values({
      email,
      normalizedEmail,
    });

    // Send welcome email
    try {
      const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://vinovibes.ai";

      const emailTemplate = generateBetaWelcomeEmail({ email, domain });
      await resend.emails.send(emailTemplate);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the signup if email fails
    }

    return OK();
  } catch (error) {
    if (error instanceof BodyTooLarge || error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("Beta signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
