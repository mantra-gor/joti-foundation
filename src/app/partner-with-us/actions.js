"use server";

import { sendMail } from "@/lib/mailer";
import { recordSubmission } from "@/lib/mailbox";

/**
 * Partnership enquiry submit.
 *
 * A Server Action rather than a Route Handler: the mailbox API's bearer token
 * is a server-only shared secret and the mailbox has no CORS configuration, so
 * the request has to originate server-side — but there's no reason for this
 * site to expose an HTTP endpoint of its own to do it.
 *
 * Treat this as an untrusted entry point: it compiles down to a POST that
 * anyone can send. Next.js checks Origin against Host for CSRF, everything
 * else is validated here.
 */
export async function submitPartnershipEnquiry(fields) {
  const { name, organisation, email, phone, partnershipType, message } =
    fields ?? {};

  if (!name || !organisation || !email || !message) {
    return { error: "Missing required fields." };
  }

  const subject = `Partnership enquiry: ${organisation}`;

  try {
    await sendMail({
      subject,
      text: [
        `Name: ${name}`,
        `Organisation: ${organisation}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Partnership type: ${partnershipType || "—"}`,
        "",
        message,
      ].join("\n"),
      replyTo: email,
    });
  } catch {
    return { error: "Failed to send enquiry." };
  }

  // Already delivered by email — this extra write must never reach the visitor.
  await recordSubmission("partnership", {
    name,
    email,
    phone,
    subject,
    message,
    organisation,
    partnership_type: partnershipType,
  });

  return { ok: true };
}
