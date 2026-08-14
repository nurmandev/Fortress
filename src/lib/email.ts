import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST;
  if (!host) {
    console.warn("SMTP_HOST is not configured. Email sending is disabled.");
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    });
  }
  return transporter;
}

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  const transport = getTransporter();
  if (!transport) {
    throw new Error("SMTP not configured");
  }

  await transport.sendMail({
    from: options.from || process.env.SMTP_FROM || "contact@fortressih.com",
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
}

export async function sendEnquiryNotification(data: {
  type: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "contact@fortressih.com";

  await sendEmail({
    to: adminEmail,
    subject: `New ${data.type} Enquiry from ${data.name}`,
    html: `
      <h2>New ${data.type} Enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${data.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${data.company}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Subject</td><td style="padding:8px;border:1px solid #ddd">${data.subject}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap">${data.message}</p>
    `,
  });
}
