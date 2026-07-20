import Upload from "@/models/Upload";
import { uploadToCloudinary, deleteFromCloudinary, validateFile } from "@/utils/cloudinary";
import { connectDB } from "@/lib/db";

export async function uploadFile(file: File, folder = "fortress") {
  const validation = validateFile(file);
  if (!validation.valid) {
    throw new Error(validation.error || "Invalid file");
  }

  const result = await uploadToCloudinary(file, folder);

  await connectDB();
  const record = await Upload.create({
    publicId: result.publicId,
    secureUrl: result.secureUrl,
    folder,
    resourceType: result.resourceType,
    fileName: file.name,
    fileSize: file.size,
  });

  return { ...result, _id: record._id };
}

export async function deleteFile(publicId: string) {
  await deleteFromCloudinary(publicId);

  await connectDB();
  const record = await Upload.findOneAndDelete({ publicId }).lean();
  return record;
}

export async function listUploads(folder?: string) {
  await connectDB();
  const query = folder ? { folder } : {};
  return Upload.find(query).sort({ createdAt: -1 }).lean();
}
