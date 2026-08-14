"use server";

import { sendMail } from "@/lib/mailer";
import { recordSubmission } from "@/lib/mailbox";
import { trimValues, validateForm } from "@/lib/validation";
import { PARTNERSHIP_OTHER, partnershipSchema } from "./partnershipTypes";

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
  const values = trimValues(fields ?? {});
  const errors = validateForm(values, partnershipSchema(values));
  if (Object.keys(errors).length > 0) {
    return { error: "Please check the form and try again." };
  }

  const {
    name,
    organisation,
    email,
    phone,
    partnershipType,
    partnershipDetail,
    message,
  } = values;

  // "Other" is a routing label, not a category — what the partnerships desk
  // needs to read is the box behind it. Read the detail only when "Other" is
  // the selection, so a stale value left behind by changing the select back
  // (or bolted on by a crafted POST) can't ride along.
  const type =
    partnershipType === PARTNERSHIP_OTHER
      ? `Other: ${partnershipDetail}`
      : partnershipType;

  const subject = `Partnership enquiry: ${organisation}`;

  try {
    await sendMail({
      subject,
      text: [
        `Name: ${name}`,
        `Organisation: ${organisation}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Partnership type: ${type}`,
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
    partnership_type: type,
  });

  return { ok: true };
}
