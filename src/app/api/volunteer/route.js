import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { recordSubmission } from "@/lib/mailbox";
import { trimValues, validateForm } from "@/lib/validation";
import { VOLUNTEER_SCHEMA } from "@/app/volunteer/volunteerFields";

export async function POST(request) {
  const values = trimValues((await request.json()) ?? {});
  const errors = validateForm(values, VOLUNTEER_SCHEMA);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, phone, city, country, preference, message } = values;

  // Everything past the phone number is optional, so the body has to read
  // sensibly with all of it missing.
  const location = [city, country].filter(Boolean).join(", ");
  const subject = `Volunteer application: ${name}`;

  try {
    await sendMail({
      subject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Location: ${location || "—"}`,
        `Preference: ${preference || "—"}`,
        "",
        message || "(no message)",
      ].join("\n"),
      replyTo: email,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }

  // `city` / `country` / `preference` aren't mailbox columns — they land in the
  // row's `payload`, so this needed no change on the mailbox side.
  // Already delivered by email — this extra write must never reach the visitor.
  await recordSubmission("volunteer", {
    name,
    email,
    phone,
    subject,
    message,
    city,
    country,
    preference,
  });

  return NextResponse.json({ ok: true });
}
