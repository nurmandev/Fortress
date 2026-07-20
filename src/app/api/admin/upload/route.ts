import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { getCurrentUser } from "@/lib/auth-utils";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const MAX_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    const ext = file.name.split(".").pop();
    const filename = `${Date.now()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadDir = path.join(process.cwd(), "public", "admin-uploads");
    await writeFile(path.join(uploadDir, filename), buffer);

    return NextResponse.json({ url: `/admin-uploads/${filename}` });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
