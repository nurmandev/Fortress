import { NextResponse } from "next/server";
import { addContact } from "@/lib/store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    addContact({
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      subject: body.subject,
      message: body.message,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit" },
      { status: 400 }
    );
  }
}
