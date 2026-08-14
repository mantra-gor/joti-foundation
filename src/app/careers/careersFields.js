// Single source of truth for the careers application's field set — imported by
// both the client form (CareersForm) and the server action, so the live
// validation and the server-side check can't drift. Same arrangement as
// `../partner-with-us/partnershipTypes.js`.

export const INITIAL_APPLICATION = {
  name: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  position: "",
  portfolio: "",
  message: "",
};

// Every field is required as of 2026-08-14: an application with no way to reach
// the applicant, no location, or no link to their work isn't triageable, and
// half-filled ones were arriving.
export const CAREERS_SCHEMA = {
  name: true,
  email: true,
  phone: true,
  city: true,
  country: true,
  position: true,
  portfolio: true,
  message: true,
};
