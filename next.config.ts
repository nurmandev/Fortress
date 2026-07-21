import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  serverExternalPackages: ["cloudinary", "mongoose", "bcryptjs", "nodemailer"],
};

export default nextConfig;
