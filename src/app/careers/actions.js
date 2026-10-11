"use server";

import { recordSubmission } from "@/lib/mailbox";
import { trimValues, validateForm } from "@/lib/validation";
import { CAREERS_SCHEMA } from "./careersFields";

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
  const values = trimValues(fields ?? {});
  const errors = validateForm(values, CAREERS_SCHEMA);
  if (Object.keys(errors).length > 0) {
    return { error: "Please check the form and try again." };
  }

  const { name, email, phone, city, country, position, portfolio, message } =
    values;

  const subject = `Careers application: ${position}`;

  try {
    await recordSubmission("careers", {
      name,
      email,
      phone,
      subject,
      message,
      city,
      country,
      position,
      portfolio,
    });
  } catch {
    return { error: "Failed to send application." };
  }

  return { ok: true };
}
