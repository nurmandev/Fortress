"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { ArrowLeft, Save } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";

const pageLabels: Record<string, string> = {
  home: "Home",
  about: "About Us",
  "investment-focus": "Investment Focus",
  "our-approach": "Our Approach",
  "partner-with-us": "Partner With Us",
  contact: "Contact Us",
  "privacy-policy": "Privacy Policy",
  "terms-of-use": "Terms of Use",
  "investment-disclaimer": "Investment Disclaimer",
};

export default function PageEditor({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/content?slug=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setTitle(data.title || "");
        setContent(data.content || "");
      });
  }, [slug]);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, title, content }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Content" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-5 py-4 md:py-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Link href="/admin/content" className="flex items-center gap-1 text-fortress-silver/50 hover:text-fortress-gold text-xs transition-colors mb-1">
                <ArrowLeft className="w-3 h-3" /> Back to Content
              </Link>
              <h1 className="text-xl font-bold text-fortress-ivory">{pageLabels[slug] || slug}</h1>
            </div>
            <div className="flex items-center gap-2">
              {saved && <span className="text-xs text-green-400">Saved</span>}
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-1.5 px-4 py-2 bg-fortress-gold text-fortress-navy text-sm font-bold hover:bg-fortress-champagne transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-fortress-silver text-xs font-medium mb-1">Page Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-fortress-silver text-xs font-medium mb-1">Content</label>
              <RichTextEditor value={content} onChange={setContent} />
            </div>

            <div>
              <label className="block text-fortress-silver text-xs font-medium mb-1">Preview</label>
              <div className="border border-white/5 p-4 bg-fortress-deep">
                <div className="prose prose-invert max-w-none text-fortress-ivory text-sm" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
