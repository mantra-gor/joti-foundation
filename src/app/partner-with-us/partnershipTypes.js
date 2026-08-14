// Single source of truth for the partnership-enquiry select — imported by both
// the client form (PartnershipForm) and the server action, so the client's
// `oneOf` guard and the action's server-side allowlist can never drift apart.
//
// Deliberately broader than the four illustrative partner-category cards on
// /work-with-us#partnership: those cards stay a curated overview, this is the
// full intake taxonomy. (They used to mirror each other 1:1 — no longer, on
// request 2026-08-14.)

// Kept as a named constant because both the form and the action branch on it:
// selecting it reveals (and requires) a free-text "please specify" field.
export const PARTNERSHIP_OTHER = "Other (please specify)";

export const PARTNERSHIP_TYPES = [
  "Government & Institutional",
  "Corporate & CSR",
  "Philanthropic & Foundations",
  "Community & Civil Society",
  "Media",
  "Academic Institutions",
  "UN agencies",
  PARTNERSHIP_OTHER,
];

/**
 * Validation schema for the enquiry form, resolved against the current values:
 * the free-text "please specify" box only exists — and is only required — once
 * "Other" is chosen.
 *
 * Shared by the form (live validation) and the action (which has to assume the
 * POST never went near the form), so the two can't drift.
 */
export function partnershipSchema(values) {
  const schema = {
    name: true,
    organisation: true,
    email: true,
    phone: false,
    // `oneOf` implies required — with an "Other" catch-all there's no case left
    // that a visitor can't answer.
    partnershipType: { oneOf: PARTNERSHIP_TYPES },
    message: true,
  };

  if (values?.partnershipType === PARTNERSHIP_OTHER) {
    schema.partnershipDetail = true;
  }

  return schema;
}
