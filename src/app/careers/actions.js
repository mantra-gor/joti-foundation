"use server";

import { sendMail } from "@/lib/mailer";
import { recordSubmission } from "@/lib/mailbox";

/**
 * Careers application submit.
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
export async function submitCareersApplication(fields) {
  const { name, email, phone, position, portfolio, message } = fields ?? {};

  if (!name || !email || !position || !message) {
    return { error: "Missing required fields." };
  }

  const subject = `Careers application: ${position}`;

  try {
    await sendMail({
      subject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Role: ${position}`,
        `CV / portfolio: ${portfolio || "—"}`,
        "",
        message,
      ].join("\n"),
      replyTo: email,
    });
  } catch {
    return { error: "Failed to send application." };
  }

  // Already delivered by email — this extra write must never reach the visitor.
  await recordSubmission("careers", {
    name,
    email,
    phone,
    subject,
    message,
    position,
    portfolio,
  });

  return { ok: true };
}
