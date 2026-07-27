import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    await sendMail({
      subject: `Volunteer application: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
