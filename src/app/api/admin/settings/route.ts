import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Settings from "@/models/Settings";

const DEFAULT_SETTINGS = {
  companyName: "Fortress Investment Holdings",
  logo: "/large-logo.png",
  favicon: "",
  email: "info@fortressih.com",
  phone: "+971 4 XXX XXXX",
  address: "Dubai, United Arab Emirates",
  whatsapp: "971500000000",
  googleMap: "",
  socialLinks: [
    { platform: "LinkedIn", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "X (Twitter)", url: "#" },
    { platform: "YouTube", url: "#" },
  ],
  googleAnalyticsId: "",
  metaPixelId: "",
  footer: "",
};

export async function GET() {
  try {
    await connectDB();
    let settings = await Settings.findOne().lean();
    if (!settings) {
      const created = await Settings.create(DEFAULT_SETTINGS);
      settings = created.toObject();
    }
    const { _id, createdAt, updatedAt, ...data } = settings as Record<string, unknown>;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(DEFAULT_SETTINGS);
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    await Settings.findOneAndUpdate({}, { $set: data }, { upsert: true });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
