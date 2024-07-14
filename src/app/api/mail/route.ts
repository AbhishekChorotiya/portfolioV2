import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { email, name, message } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const sendMail = await resend.emails.send({
    from: "portfolio@resend.dev",
    to: "code.abhi8678@gmail.com",
    subject: "Testing Email Service",
    text: message || "",
    html: `<p>${message} from ${name} at ${email}</p>`,
  });
  return NextResponse.json(sendMail);
}
