import {
  AdminWelcomeEmail,
  getAdminWelcomeEmailText,
} from "@/emails/admin-welcome-email";
import { Resend } from "resend";

interface SendAdminWelcomeEmailArgs {
  email: string;
  name?: string | null;
  resetUrl: string;
}

export async function sendAdminWelcomeEmail({
  email,
  name,
  resetUrl,
}: SendAdminWelcomeEmailArgs) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: "Code Space <noreply@codespaces.org>",
    to: email,
    subject: "Action required: You have a new Admin account for codespaces.org",
    react: AdminWelcomeEmail({ email, name, resetUrl }),
    text: getAdminWelcomeEmailText({ email, name, resetUrl }),
    replyTo: "hello@codespaces.org",
  });
}
