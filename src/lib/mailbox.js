import axios from "axios";

/**
 * Client for the Laravel mailbox app (staff triage panel at its `/admin`).
 * Server-only: `MAILBOX_API_TOKEN` must never reach the browser, so this is
 * only ever imported from Route Handlers.
 *
 * The mailbox is an *additional* write, never a replacement for the
 * notification email. Every helper here is best-effort: it logs and resolves
 * rather than throwing, so a mailbox outage can't turn into an error response
 * for a visitor whose enquiry has already been delivered by email. For the
 * same reason there are no retries — the email is out, and a retry loop is the
 * one thing likely to trip the mailbox's 60 req/min rate limit.
 */

let client;

function getClient() {
  const { MAILBOX_URL, MAILBOX_API_TOKEN } = process.env;
  if (!MAILBOX_URL || !MAILBOX_API_TOKEN) return null;

  if (!client) {
    client = axios.create({
      baseURL: `${MAILBOX_URL.replace(/\/$/, "")}/api/v1`,
      // The visitor is waiting on the form response and this is the least
      // important thing happening in that request.
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
 * `rethrow` is for the one caller with no email behind it (newsletter signup):
 * there, a swallowed failure means telling a visitor they've subscribed when
 * nothing was recorded anywhere. Everywhere else the email is the guarantee and
 * this write is the extra, so the default stays best-effort.
 */
async function post(path, body, { rethrow = false } = {}) {
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
 *
 * The exception to the best-effort rule above: newsletter signup sends no
 * notification email, so the mailbox is the only record of it. This rejects on
 * failure so the form can say so rather than claiming a subscription that
 * doesn't exist.
 */
export function recordNewsletterSubscriber(email) {
  return post("/newsletter/subscribe", { email }, { rethrow: true });
}
