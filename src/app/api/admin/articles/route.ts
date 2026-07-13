import { NextResponse } from "next/server";
import { getArticles, getArticle, saveArticle, deleteArticle } from "@/lib/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (slug) {
    const article = getArticle(slug);
    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  }
  return NextResponse.json(getArticles());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.slug || !body.title) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    saveArticle(body.slug, {
      title: body.title,
      excerpt: body.excerpt || "",
      content: body.content || "",
      category: body.category || "Market Insights",
      date: body.date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" }),
      readTime: body.readTime || "1 min read",
      featuredImage: body.featuredImage || "",
      status: body.status || "draft",
      seo: body.seo || { title: body.title, description: body.excerpt || "" },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body.slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    const existing = getArticle(body.slug);
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
    saveArticle(body.slug, {
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

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  deleteArticle(slug);
  return NextResponse.json({ success: true });
}
