import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (!transporter) {
    const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      throw new Error(
        "GMAIL_USER and GMAIL_APP_PASSWORD must be set to send email."
      );
    }
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });
  }
  return transporter;
}

export async function sendMail({ subject, text, replyTo }) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER;
  try {
    await getTransporter().sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
      replyTo,
    });
  } catch (error) {
    console.error("sendMail failed:", error.message);
    throw error;
  }
}
