import Settings from "@/models/Settings";
import type { SettingsInput } from "@/validators";
import { connectDB } from "@/lib/db";

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

export async function getSettings() {
  await connectDB();
  let settings = await Settings.findOne().lean();
  if (!settings) {
    settings = await Settings.create(DEFAULT_SETTINGS);
    settings = settings.toObject();
  }
  return settings;
}

export async function updateSettings(data: SettingsInput) {
  await connectDB();
  const settings = await Settings.findOneAndUpdate(
    {},
    { $set: data },
    { new: true, upsert: true, runValidators: true }
  ).lean();
  return settings;
}
