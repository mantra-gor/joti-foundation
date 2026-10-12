import axios from "axios";

/**
 * Client for the Laravel mailbox app (staff triage panel at its `/admin`).
 * Server-only: `MAILBOX_API_TOKEN` must never reach the browser, so this is
 * only ever imported from Route Handlers and Server Actions.
 */

let client;

function getClient() {
  const { MAILBOX_URL, MAILBOX_API_TOKEN } = process.env;
  if (!MAILBOX_URL || !MAILBOX_API_TOKEN) return null;

  if (!client) {
    client = axios.create({
      baseURL: `${MAILBOX_URL.replace(/\/$/, "")}/api/v1`,
      // The visitor is waiting on the form response.
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${MAILBOX_API_TOKEN}`,
        Accept: "application/json",
      },
    });
  }
  return client;
}

/**
 * Post to the mailbox backend. Rethrows errors by default so callers can communicate
 * failure to the visitor.
 */
async function post(path, body, { rethrow = true } = {}) {
  const mailbox = getClient();
  if (!mailbox) {
    console.warn(
      `Mailbox not configured (MAILBOX_URL / MAILBOX_API_TOKEN) — skipping ${path}.`
    );
    if (rethrow) {
      throw new Error(`Mailbox not configured — ${path} was not delivered.`);
    }
    return;
  }

  try {
    await mailbox.post(path, body);
  } catch (error) {
    // Axios throws on any non-2xx, so a 422 lands here. `errors` is the actual
    // reason and means the two apps disagree about the contract — worth seeing.
    console.error(
      `Mailbox write to ${path} failed`,
      error?.response?.data ?? error.message
    );
    if (rethrow) throw error;
  }
}

/**
 * Record a form submission. `type` is routing information for the mailbox —
 * it picks the destination table and is not stored on the row. Any field that
 * isn't a known column (name, email, phone, subject, message) is folded into
 * the submission's `payload` automatically, so form-specific extras can be
 * sent flat without a change on the mailbox side.
 *
 * @param {"contact" | "careers" | "volunteer" | "partnership"} type
 */
export function recordSubmission(type, fields) {
  return post("/submissions", { type, ...fields });
}

/**
 * Add an address to the mailing list. Idempotent on the mailbox side.
 */
export function recordNewsletterSubscriber(email) {
  return post("/newsletter/subscribe", { email });
}
