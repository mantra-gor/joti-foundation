import { NextResponse } from "next/server";
import { recordSubmission } from "@/lib/mailbox";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    await recordSubmission("contact", { name, email, subject, message });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
