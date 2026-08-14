/**
 * Per-field validation shared by every form on the site.
 *
 * Rules are keyed by *field name*, not by form, so `email` behaves identically
 * on /contact and /careers, and the names line up with the mailbox contract
 * (name / email / phone / subject / message) — one rule, every appearance.
 *
 * Pure and free of browser APIs on purpose: the Server Actions and Route
 * Handlers can validate with the exact same rules, since neither should trust
 * whatever the client sends.
 */

// Letters from any script, combining marks, and the punctuation that shows up
// in real names. Digits are the reliable tell for junk input.
const NAME_PATTERN = /^[\p{L}\p{M}'’.\- ]+$/u;

// Place names take the same characters as personal ones — "Thiruvananthapuram",
// "Sri Muktsar Sahib", "Côte d'Ivoire" — and digits are the same junk tell.
const PLACE_PATTERN = NAME_PATTERN;

// Deliberately permissive: a single @, no whitespace, a dotted 2+ letter TLD.
// Anything stricter starts rejecting addresses that genuinely deliver.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

// Formatting characters people actually type: +, spaces, hyphens, dots, parens.
const PHONE_ALLOWED_PATTERN = /^[\d\s+().-]+$/;
const PHONE_DISALLOWED_PATTERN = /[^\d\s+().-]/g;

// E.164 caps at 15 digits; 7 is the shortest plausible national number.
const PHONE_MIN_DIGITS = 7;
const PHONE_MAX_DIGITS = 15;
// 15 digits plus room for "+", spaces, parens and hyphens around them.
const PHONE_MAX_LENGTH = 24;

function validatePhone(value) {
  if (!PHONE_ALLOWED_PATTERN.test(value)) {
    return "Phone numbers can only contain digits, spaces and + ( ) -";
  }
  const digits = value.replace(/\D/g, "").length;
  if (digits < PHONE_MIN_DIGITS || digits > PHONE_MAX_DIGITS) {
    return "Enter a valid phone number, including country or STD code.";
  }
  return true;
}

function validateUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    return "Enter a full link, starting with https://";
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return "Links must start with http:// or https://";
  }
  if (!url.hostname.includes(".")) {
    return "Enter a full link, starting with https://";
  }
  return true;
}

/**
 * `label` is only used to build the generic "too long" message.
 * `test` returns `true` when valid, or the message to show when not.
 */
const FIELD_RULES = {
  name: {
    label: "Name",
    requiredMessage: "Please enter your full name.",
    min: 2,
    minMessage: "Please enter your full name.",
    max: 80,
    test: (value) =>
      NAME_PATTERN.test(value) ||
      "Names can only contain letters, spaces, hyphens and apostrophes.",
  },
  organisation: {
    label: "Organisation",
    requiredMessage: "Please tell us which organisation you represent.",
    min: 2,
    minMessage: "Please enter your organisation's full name.",
    max: 120,
  },
  email: {
    label: "Email address",
    requiredMessage: "Please enter your email address.",
    max: 254,
    test: (value) =>
      EMAIL_PATTERN.test(value) ||
      "Enter a valid email address, e.g. name@example.com",
  },
  phone: {
    label: "Phone number",
    requiredMessage: "Please enter your phone number.",
    max: PHONE_MAX_LENGTH,
    test: validatePhone,
  },
  city: {
    label: "City",
    requiredMessage: "Please enter your city.",
    min: 2,
    minMessage: "Please enter your city.",
    max: 80,
    test: (value) =>
      PLACE_PATTERN.test(value) ||
      "City can only contain letters, spaces, hyphens and apostrophes.",
  },
  country: {
    label: "Country",
    requiredMessage: "Please enter your country.",
    min: 2,
    minMessage: "Please enter your country.",
    max: 80,
    test: (value) =>
      PLACE_PATTERN.test(value) ||
      "Country can only contain letters, spaces, hyphens and apostrophes.",
  },
  subject: {
    label: "Subject",
    requiredMessage: "Please enter a subject.",
    min: 3,
    minMessage: "Please give your message a subject of at least 3 characters.",
    max: 120,
  },
  position: {
    label: "Role",
    requiredMessage: "Please tell us which role you're applying for.",
    min: 2,
    minMessage: "Please name the role you're applying for.",
    max: 120,
  },
  portfolio: {
    label: "Link",
    requiredMessage: "Please add a link to your CV or portfolio.",
    max: 500,
    test: validateUrl,
  },
  partnershipType: {
    label: "Partnership type",
    requiredMessage: "Please choose the type of partnership.",
  },
  preference: {
    label: "Work preference",
    // Optional and `oneOf`-constrained, so this only ever surfaces for a value
    // the select can't produce — i.e. a hand-rolled POST.
    requiredMessage: "Please choose a valid work preference.",
  },
  partnershipDetail: {
    label: "Partnership type",
    requiredMessage: "Please specify the type of partnership.",
    min: 2,
    minMessage: "Please specify the type of partnership.",
    max: 120,
  },
  message: {
    label: "Message",
    requiredMessage: "Please enter your message.",
    min: 10,
    minMessage: "Please write at least 10 characters so we can help properly.",
    max: 2000,
  },
};

const DEFAULT_RULE = {
  label: "This field",
  requiredMessage: "This field is required.",
  max: 500,
};

// A schema entry is either `true`/`false` (required or not) or an object for
// the cases that need more — `oneOf` on the partnership select, and `min` for a
// form that needs a different length floor than the shared rule.
function normaliseSchemaEntry(entry) {
  if (entry && typeof entry === "object") {
    return { required: true, ...entry };
  }
  return { required: Boolean(entry) };
}

/**
 * Validate one field. Returns an empty string when valid, otherwise the message
 * to render. Values are validated trimmed, so whitespace never passes as input.
 */
export function validateField(name, value, schemaEntry = true) {
  const entry = normaliseSchemaEntry(schemaEntry);
  const { required, oneOf } = entry;
  const rule = FIELD_RULES[name] ?? DEFAULT_RULE;
  const trimmed = typeof value === "string" ? value.trim() : "";

  if (!trimmed) {
    return required ? rule.requiredMessage : "";
  }
  // A form may move the length floor: /volunteer's optional "area of interest"
  // box shouldn't demand the 10 characters a support enquiry does. The rule's
  // own `minMessage` names its own number, so an override brings its own text
  // or falls back to the generic one.
  const min = entry.min ?? rule.min;
  if (min && trimmed.length < min) {
    const minMessage =
      entry.min === undefined ? rule.minMessage : entry.minMessage;
    return minMessage ?? `${rule.label} is too short.`;
  }
  if (rule.max && trimmed.length > rule.max) {
    return `${rule.label} must be ${rule.max} characters or fewer.`;
  }
  if (oneOf && !oneOf.includes(trimmed)) {
    return rule.requiredMessage;
  }
  if (rule.test) {
    const result = rule.test(trimmed);
    if (result !== true) return result;
  }
  return "";
}

/**
 * Trim a phone number to the longest thing that could still be a real one:
 * `PHONE_MAX_DIGITS` digits, plus whatever formatting fits inside
 * `PHONE_MAX_LENGTH`. Digits past the cap are dropped where they are typed
 * rather than truncating the whole string, so editing the middle of a full
 * number doesn't silently lop off the end.
 */
function capPhoneLength(value) {
  let digits = 0;
  let capped = "";
  for (const char of value) {
    const isDigit = char >= "0" && char <= "9";
    if (isDigit && digits >= PHONE_MAX_DIGITS) continue;
    if (capped.length >= PHONE_MAX_LENGTH) break;
    if (isDigit) digits += 1;
    capped += char;
  }
  return capped;
}

/**
 * Keystroke-level filters, for fields where a character is simply never valid
 * and there is nothing useful to say about it after the fact.
 *
 * `type="tel"` is a mobile-keyboard hint and blocks nothing — without this a
 * visitor can type "qrngqiorgnrioq" into a phone box and only find out on blur.
 * Length is capped here too: an unbounded phone box invites 40-digit input that
 * the visitor only hears about on blur, and no valid number is being cut off.
 */
const FIELD_SANITISERS = {
  phone: (value) => capPhoneLength(value.replace(PHONE_DISALLOWED_PATTERN, "")),
};

/** Strip characters a field can never contain. Returns the value unchanged for
 * fields with no filter — most of them. */
export function sanitiseField(name, value) {
  const sanitise = FIELD_SANITISERS[name];
  return sanitise && typeof value === "string" ? sanitise(value) : value;
}

/** Validate a whole form. Returns `{ field: message }`, empty when valid. */
export function validateForm(values, schema) {
  const errors = {};
  for (const [name, entry] of Object.entries(schema)) {
    const message = validateField(name, values[name], entry);
    if (message) errors[name] = message;
  }
  return errors;
}

/** Trim every string value — what gets submitted, never the raw input state. */
export function trimValues(values) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value,
    ])
  );
}
