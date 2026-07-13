"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Trash2,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import RichTextEditor from "@/components/RichTextEditor";



const categories = [
  "Real Estate", "Business Acquisitions", "Private Equity", "AI & Technology",
  "Digital Assets & Blockchain", "Hospitality", "Trading & Distribution",
  "Market Insights", "Company News", "Strategic Partnerships",
];

export default function ArticleEditor({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const isNew = slug === "new";

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Market Insights");
  const [readTime, setReadTime] = useState("5 min read");
  const [featuredImage, setFeaturedImage] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (isNew) return;
    fetch(`/api/admin/articles/${slug}`)
      .then((r) => r.json())
      .then((a) => {
        setTitle(a.title || "");
        setExcerpt(a.excerpt || "");
        setContent(a.content || "");
        setCategory(a.category || "Market Insights");
        setReadTime(a.readTime || "5 min read");
        setFeaturedImage(a.featuredImage || "");
        setStatus(a.status || "draft");
        setSeoTitle(a.seo?.title || "");
        setSeoDescription(a.seo?.description || "");
      });
  }, [slug, isNew]);

  function generateSlug(str: string) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    const articleSlug = isNew ? generateSlug(title) : slug;
    await fetch("/api/admin/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: articleSlug,
        title,
        excerpt,
        content,
        category,
        readTime,
        featuredImage,
        status,
        seo: { title: seoTitle || title, description: seoDescription || excerpt },
      }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    if (isNew) router.push(`/admin/blog/${articleSlug}`);
  }

  async function handleDelete() {
    if (!confirm("Delete this article?")) return;
    setDeleting(true);
    await fetch(`/api/admin/articles/${slug}`, { method: "DELETE" });
    router.push("/admin/blog");
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (data.url) setFeaturedImage(data.url);
  }

  return (
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Blog Posts" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-5 py-4 md:py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Link href="/admin/blog" className="flex items-center gap-1 text-fortress-silver/50 hover:text-fortress-gold text-xs transition-colors mb-1">
                <ArrowLeft className="w-3 h-3" /> Back to Blog
              </Link>
              <h1 className="text-xl font-bold text-fortress-ivory">{isNew ? "New Article" : "Edit Article"}</h1>
            </div>
            <div className="flex items-center gap-2">
              {saved && <span className="text-xs text-green-400">Saved</span>}
              {!isNew && (
                <button onClick={handleDelete} disabled={deleting} className="flex items-center gap-1.5 px-4 py-2 border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors disabled:opacity-50">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              )}
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-1.5 px-4 py-2 bg-fortress-gold text-fortress-navy text-sm font-bold hover:bg-fortress-champagne transition-colors disabled:opacity-50">
                <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Excerpt</label>
                  <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50 resize-none" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Status</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value as "draft" | "published")} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50 appearance-none">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50 appearance-none">
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Read Time</label>
                  <input type="text" value={readTime} onChange={(e) => setReadTime(e.target.value)} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Featured Image</label>
                  {featuredImage && (
                    <div className="mb-2">
                      <img src={featuredImage} alt="" className="w-full h-24 object-cover border border-white/10" />
                    </div>
                  )}
                  <label className="flex items-center justify-center gap-2 px-4 py-3 bg-fortress-deep border border-dashed border-white/10 text-fortress-silver text-xs hover:border-fortress-gold/40 cursor-pointer transition-colors">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    {featuredImage ? "Change Image" : "Upload Image"}
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-fortress-silver text-xs font-medium mb-1">Content</label>
              <RichTextEditor value={content} onChange={setContent} />
            </div>

            <div className="border-t border-white/5 pt-5">
              <h3 className="text-sm font-bold text-fortress-ivory mb-3">SEO</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Meta Title</label>
                  <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
                <div>
                  <label className="block text-fortress-silver text-xs font-medium mb-1">Meta Description</label>
                  <input type="text" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full bg-fortress-deep border border-white/10 text-fortress-ivory text-sm px-4 py-2.5 focus:outline-none focus:border-fortress-gold/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
