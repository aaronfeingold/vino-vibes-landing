import { z } from "zod";

export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(1, "Email is required")
  .max(255, "Email is too long");

export const betaSignupSchema = z.object({
  email: emailSchema,
  wantsDonation: z.boolean().default(false),
  hasSeenDonationModal: z.boolean().default(false),
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
  // Honeypot: real people leave this empty
  website: z.string().max(0).optional(),
});

export type PartnerSignupData = z.infer<typeof partnerSignupSchema>;
