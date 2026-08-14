// Single source of truth for the volunteer registration form — imported by both
// the client form (VolunteerForm) and `src/app/api/volunteer/route.js`, so the
// live validation and the server-side check can't drift. Same arrangement as
// `../careers/careersFields.js`.
//
// The handler lives under `api/` rather than beside this file because volunteer
// is one of the two legacy Route Handlers (see CLAUDE.md, "Forms &
// integrations") — it stays put until the mailbox has bedded in.

export const WORK_PREFERENCES = ["Remote work", "On-site work", "Hybrid"];

export const INITIAL_VOLUNTEER = {
  name: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  preference: "",
  message: "",
};

// Only the three contact fields are required: this is a register-your-interest
// form, and every extra mandatory field costs sign-ups. Optional fields are
// still format-checked once filled in.
export const VOLUNTEER_SCHEMA = {
  name: true,
  email: true,
  phone: true,
  city: false,
  country: false,
  preference: { required: false, oneOf: WORK_PREFERENCES },
  // Lower floor than the shared `message` rule's 10: "First aid" is a complete
  // answer to "your area of expertise", and this box is optional anyway.
  message: {
    required: false,
    min: 2,
    minMessage: "Please write a little more, or leave this blank.",
  },
};
