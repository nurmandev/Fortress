import { NextResponse } from "next/server";
import { getContacts, getSubmissions } from "@/lib/store";

export async function GET() {
  const contacts = getContacts().map((c) => ({
    id: c.id,
    type: "contact" as const,
    name: c.name,
    email: c.email,
    subject: c.subject,
    message: c.message,
    read: c.read,
    createdAt: c.createdAt,
    details: { phone: c.phone },
  }));

  const submissions = getSubmissions().map((s) => ({
    id: s.id,
    type: "submission" as const,
    name: `${s.firstName} ${s.lastName}`,
    email: s.email,
    subject: s.opportunityType,
    message: s.message,
    read: s.read,
    createdAt: s.createdAt,
    details: { phone: s.phone, company: s.company, investmentRange: s.investmentRange, fileName: s.fileName },
  }));

  const all = [...contacts, ...submissions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json(all);
}
