"use server";

import { recordNewsletterSubscriber } from "@/lib/mailbox";
import { validateField } from "@/lib/validation";

/**
 * Newsletter signup.
 *
 * A Server Action rather than a Route Handler: the mailbox API's bearer token is
 * a server-only shared secret, so the subscribe call has to originate
 * server-side — but there's no reason for this site to expose an HTTP endpoint
 * of its own to do it. Lives beside the component instead of in a route segment
 * because the form is in the global footer, not on one page.
 *
 * Treat this as an untrusted entry point: it compiles down to a POST that anyone
 * can send. Next.js checks Origin against Host for CSRF, the address is
 * revalidated here with the same rule the client used.
 */
export async function subscribeToNewsletter(email) {
  const address = typeof email === "string" ? email.trim() : "";

  if (validateField("email", address)) {
    return { error: "Enter a valid email address." };
  }

  // No notification email for signups — the mailbox row is the whole record, so
  // unlike the other forms a failure here has to reach the visitor. A repeat
  // signup is a success on the mailbox side.
  try {
    await recordNewsletterSubscriber(address);
  } catch {
    return { error: "Failed to subscribe." };
  }

  return { ok: true };
}
