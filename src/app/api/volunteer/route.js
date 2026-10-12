import { NextResponse } from "next/server";
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
  const subject = `Volunteer application: ${name}`;

  try {
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
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
