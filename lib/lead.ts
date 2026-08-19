/**
 * Demo-request lead shape and validation.
 *
 * ONE definition, used by both the browser form and the API route. They were
 * duplicated once and drifted: the form only checked that fields were
 * non-empty while the server enforced a real email and a ten-digit phone, so
 * a typo like "sam@riverside" passed the form, was rejected by the server,
 * and the visitor still saw a confirmation screen. That prospect was lost
 * silently. Keep both sides importing from here.
 */

export const BUSINESS_TYPES = [
  "Real estate",
  "Insurance",
  "Mortgage / lending",
  "Construction / trades",
  "Professional services",
  "Healthcare",
  "Retail / e-commerce",
  "Other",
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
};

/**
 * Returns a message to show the person, or null when the lead is good.
 * Written to be read by a prospect, not a developer — the browser shows
 * these verbatim.
 */
export function validateLead(input: Partial<Record<keyof LeadInput, unknown>>): string | null {
  const { name, email, phone, businessType } = input;

  if (typeof name !== "string" || name.trim().length === 0) {
    return "Please add your name.";
  }
  if (name.length > 200) {
    return "That name is longer than we can store — please shorten it.";
  }
  if (
    typeof email !== "string" ||
    email.length > 320 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return "That email doesn't look complete — check for a missing .com or a typo.";
  }
  if (
    typeof phone !== "string" ||
    phone.length > 30 ||
    phone.replace(/\D/g, "").length < 10
  ) {
    return "Please include a full phone number with area code.";
  }
  if (
    typeof businessType !== "string" ||
    !(BUSINESS_TYPES as readonly string[]).includes(businessType)
  ) {
    return "Please choose the type of business.";
  }

  return null;
}
