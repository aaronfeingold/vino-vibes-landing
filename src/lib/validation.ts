import { z } from "zod";

export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(1, "Email is required")
  .max(255, "Email is too long");

// Fields every public form sends so the server can screen out bots. The
// honeypot accepts any value here; the route checks it and answers as if the
// signup worked, so a bot learns nothing from a validation error.
const botFields = {
  website: z.string().max(500).optional(),
  elapsedMs: z.number().int().nonnegative().optional(),
  turnstileToken: z.string().max(2048).optional(),
};

export const betaSignupSchema = z.object({
  email: emailSchema,
  ...botFields,
});

export type EmailValidation = z.infer<typeof emailSchema>;
export type BetaSignupData = z.infer<typeof betaSignupSchema>;

export const BUSINESS_TYPES = ["restaurant", "bar", "wine_shop", "other"] as const;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, "That's a bit long")
    .optional()
    .transform((v) => (v ? v : undefined));

export const partnerSignupSchema = z.object({
  businessName: z.string().trim().min(1, "Tell us the name of your place").max(255),
  businessType: z.enum(BUSINESS_TYPES, { errorMap: () => ({ message: "Pick what kind of place it is" }) }),
  city: z.string().trim().min(1, "Which city are you in?").max(120),
  contactName: z.string().trim().min(1, "Tell us your name").max(255),
  role: optionalText(120),
  email: emailSchema,
  phone: optionalText(50),
  message: optionalText(2000),
  ...botFields,
});

export type PartnerSignupData = z.infer<typeof partnerSignupSchema>;
