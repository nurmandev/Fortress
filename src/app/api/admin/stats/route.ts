import { NextResponse } from "next/server";
import { allArticles } from "@/app/insights/articles";
import { getContacts, getSubmissions } from "@/lib/store";

export async function GET() {
  const contacts = getContacts();
  const submissions = getSubmissions();
  const blogPosts = allArticles.length;

  const activities = [
    ...contacts.slice(0, 5).map((c) => ({
      id: c.id,
      type: "contact" as const,
      title: c.name,
      description: c.subject,
      time: c.createdAt,
    })),
    ...submissions.slice(0, 5).map((s) => ({
      id: s.id,
      type: "submission" as const,
      title: `${s.firstName} ${s.lastName}`,
      description: s.opportunityType,
      time: s.createdAt,
    })),
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  return NextResponse.json({
    blogPosts,
    totalContacts: contacts.length,
    totalSubmissions: submissions.length,
    activities,
  });
}
