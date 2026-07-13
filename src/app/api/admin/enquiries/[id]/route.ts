import { NextResponse } from "next/server";
import { markEnquiryRead, deleteEnquiry } from "@/lib/store";

export async function PATCH(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ok = markEnquiryRead(id);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  deleteEnquiry(id);
  return NextResponse.json({ success: true });
}
