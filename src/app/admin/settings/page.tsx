"use client";

import { useEffect, useState } from "react";
import {
  Save,
  Plus,
  Trash2,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface SocialLink {
  platform: string;
  url: string;
}

interface SiteSettingsData {
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  officeAddress: string;
  googleMapsEmbed: string;
  whatsappNumber: string;
  socialLinks: SocialLink[];
  footerContent: string;
  logo: string;
  favicon: string;
}

const socialPlatforms = ["LinkedIn", "Instagram", "Facebook", "X (Twitter)", "YouTube", "TikTok", "Threads"];

export default function SettingsPage() {
  const [data, setData] = useState<SiteSettingsData | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then(setData);
  }, []);

  function update<K extends keyof SiteSettingsData>(key: K, value: SiteSettingsData[K]) {
    setData((prev) => prev ? { ...prev, [key]: value } : prev);
  }

  function updateSocial(index: number, field: "platform" | "url", value: string) {
    setData((prev) => {
      if (!prev) return prev;
      const links = [...prev.socialLinks];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, socialLinks: links };
    });
  }

  function addSocial() {
    setData((prev) => {
      if (!prev) return prev;
      return { ...prev, socialLinks: [...prev.socialLinks, { platform: "", url: "" }] };
    });
  }

  function removeSocial(index: number) {
    setData((prev) => {
      if (!prev) return prev;
      return { ...prev, socialLinks: prev.socialLinks.filter((_, i) => i !== index) };
    });
  }

  async function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const result = await res.json();
    if (result.url) update("logo", result.url);
  }

  async function handleFaviconUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const result = await res.json();
    if (result.url) update("favicon", result.url);
  }

  async function handleSave() {
    if (!data) return;
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-fortress-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-fortress-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Settings" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-5 py-4 md:py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-fortress-ivory">Settings</h1>
              <p className="text-fortress-silver text-xs mt-0.5">General website settings</p>
            </div>
            <div className="flex items-center gap-2">
              {saved && <span className="text-xs text-green-400">Saved</span>}
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-1.5 px-4 py-2 bg-fortress-gold text-fortress-navy text-sm font-bold hover:bg-fortress-champagne transition-colors disabled:opacity-50">
                <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-fortress-deep border border-white/5 p-4">
              <h2 className="text-sm font-bold text-fortress-ivory mb-4">Company Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Company Name</label>
                  <input type="text" value={data.companyName} onChange={(e) => update("companyName", e.target.value)} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Phone Number</label>
                  <input type="text" value={data.phoneNumber} onChange={(e) => update("phoneNumber", e.target.value)} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Email Address</label>
                  <input type="email" value={data.emailAddress} onChange={(e) => update("emailAddress", e.target.value)} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div className="col-span-2">
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Office Address</label>
                  <input type="text" value={data.officeAddress} onChange={(e) => update("officeAddress", e.target.value)} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div className="col-span-2">
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Google Maps Embed URL</label>
                  <input type="text" value={data.googleMapsEmbed} onChange={(e) => update("googleMapsEmbed", e.target.value)} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
              </div>
            </div>

            <div className="bg-fortress-deep border border-white/5 p-4">
              <h2 className="text-sm font-bold text-fortress-ivory mb-4">WhatsApp</h2>
              <div>
                <label className="block text-fortress-silver text-xs font-medium mb-1">WhatsApp Number (digits only, e.g. 971500000000)</label>
                <input type="text" value={data.whatsappNumber} onChange={(e) => update("whatsappNumber", e.target.value)} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
              </div>
            </div>

            <div className="bg-fortress-deep border border-white/5 p-4">
              <h2 className="text-sm font-bold text-fortress-ivory mb-4">Social Media Links</h2>
              <div className="space-y-2">
                {data.socialLinks.map((link, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <select value={link.platform} onChange={(e) => updateSocial(i, "platform", e.target.value)} className="w-40 bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-3 py-2.5 focus:outline-none focus:border-fortress-gold/50">
                      <option value="">Select...</option>
                      {socialPlatforms.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <input type="text" value={link.url} onChange={(e) => updateSocial(i, "url", e.target.value)} placeholder="https://..." className="flex-1 bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-3 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                    <button onClick={() => removeSocial(i)} className="p-2 text-fortress-silver/40 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
                <button onClick={addSocial} className="flex items-center gap-1.5 text-xs text-fortress-gold hover:text-fortress-champagne transition-colors mt-2"><Plus className="w-3.5 h-3.5" /> Add Social Link</button>
              </div>
            </div>

            <div className="bg-fortress-deep border border-white/5 p-4">
              <h2 className="text-sm font-bold text-fortress-ivory mb-4">Footer Content</h2>
              <div>
                <label className="block text-fortress-silver text-xs font-medium mb-1">Footer Description</label>
                <textarea value={data.footerContent} onChange={(e) => update("footerContent", e.target.value)} rows={4} className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50 resize-none" />
              </div>
            </div>

            <div className="bg-fortress-deep border border-white/5 p-4">
              <h2 className="text-sm font-bold text-fortress-ivory mb-4">Logo & Favicon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Logo</label>
                  {data.logo && <div className="mb-2 p-3 bg-fortress-charcoal border border-white/5 flex items-center justify-center"><img src={data.logo} alt="" className="h-10 w-auto object-contain" /></div>}
                  <label className="flex items-center justify-center gap-2 px-4 py-3 bg-fortress-charcoal border border-dashed border-white/10 text-fortress-silver text-xs hover:border-fortress-gold/40 cursor-pointer transition-colors">
                    <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    {data.logo ? "Change Logo" : "Upload Logo"}
                  </label>
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Favicon</label>
                  {data.favicon && <div className="mb-2 p-3 bg-fortress-charcoal border border-white/5 flex items-center justify-center"><img src={data.favicon} alt="" className="h-8 w-auto object-contain" /></div>}
                  <label className="flex items-center justify-center gap-2 px-4 py-3 bg-fortress-charcoal border border-dashed border-white/10 text-fortress-silver text-xs hover:border-fortress-gold/40 cursor-pointer transition-colors">
                    <input type="file" accept="image/*" onChange={handleFaviconUpload} className="hidden" />
                    {data.favicon ? "Change Favicon" : "Upload Favicon"}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
