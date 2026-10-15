// Normalize email to detect Gmail aliases and other tricks
export function normalizeEmail(email: string): string {
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
