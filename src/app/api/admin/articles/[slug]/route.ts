import { NextResponse } from "next/server";
import { getArticle, saveArticle, deleteArticle } from "@/lib/store";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(article);
}

export async function PUT(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const body = await request.json();
    const existing = getArticle(slug);
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
    saveArticle(slug, {
      title: body.title ?? existing.title,
      excerpt: body.excerpt ?? existing.excerpt,
      content: body.content ?? existing.content,
      category: body.category ?? existing.category,
      date: body.date ?? existing.date,
      readTime: body.readTime ?? existing.readTime,
      featuredImage: body.featuredImage ?? existing.featuredImage,
      status: body.status ?? existing.status,
      seo: body.seo ?? existing.seo,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  deleteArticle(slug);
  return NextResponse.json({ success: true });
}
