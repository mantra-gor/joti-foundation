import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    await sendMail({
      subject: `Contact form: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
