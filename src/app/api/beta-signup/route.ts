import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { generateBetaWelcomeEmail } from "../../../lib/email-templates";
import { db } from "../../../lib/db";
import { betaSignups } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
const resend = new Resend(process.env.RESEND_API_KEY);

// Normalize email to detect Gmail aliases and other tricks
function normalizeEmail(email: string): string {
  const [localPart, domain] = email.toLowerCase().split("@");

  // Handle Gmail aliases (remove dots and everything after +)
  if (domain === "gmail.com" || domain === "googlemail.com") {
    const cleanLocal = localPart.replace(/\./g, "").split("+")[0];
    return `${cleanLocal}@gmail.com`;
  }

  // Handle other common aliases
  const cleanLocal = localPart.split("+")[0];
  return `${cleanLocal}@${domain}`;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
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
      return NextResponse.json(
        { error: "This email is already on our beta list!" },
        { status: 409 }
      );
    }

    // Insert new signup
    await db.insert(betaSignups).values({
      email,
      normalizedEmail,
    });

    // Send welcome email
    try {
      const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://vino-vibes.ai";

      const emailTemplate = generateBetaWelcomeEmail({ email, domain });
      await resend.emails.send(emailTemplate);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined beta list!",
    });
  } catch (error) {
    console.error("Beta signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
