import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  try {
    await sendMail({
      subject: "Newsletter signup",
      text: `New newsletter signup: ${email}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 500 }
    );
  }
}
