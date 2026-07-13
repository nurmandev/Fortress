import { NextResponse } from "next/server";
import { getPages, savePage, getPage } from "@/lib/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const page = getPage(slug);
    if (!page) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(page);
  }

  return NextResponse.json(getPages());
}

export async function PUT(request: Request) {
  try {
    const { slug, title, content } = await request.json();
    if (!slug || title === undefined || content === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    savePage(slug, { title, content });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
