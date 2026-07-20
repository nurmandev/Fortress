import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Enquiry from "@/models/Enquiry";

export async function GET() {
  try {
    await connectDB();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    const result = enquiries.map((e) => ({
      id: e._id.toString(),
      type: (e.type === "Contact" ? "contact" : "submission") as "contact" | "submission",
      name: e.name,
      email: e.email,
      subject: e.subject || e.type,
      message: e.message,
      read: e.status !== "new",
      createdAt: e.createdAt,
      details: {
        phone: e.phone,
        company: e.company,
        type: e.type,
      },
    }));
    return NextResponse.json(result);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
