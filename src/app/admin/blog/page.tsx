"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Newspaper,
  Plus,
  Edit3,
  Trash2,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  status: "draft" | "published";
  updatedAt: string;
}



function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function BlogList() {
  const [articles, setArticles] = useState<ArticleItem[]>([]);

  function load() {
    fetch("/api/admin/articles")
      .then((r) => r.json())
      .then(setArticles);
  }

  useEffect(load, []);

  async function handleDelete(slug: string) {
    if (!confirm("Delete this article?")) return;
    await fetch(`/api/admin/articles/${slug}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Blog Posts" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-5 py-4 md:py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-fortress-ivory">Blog Posts</h1>
              <p className="text-fortress-silver text-xs mt-0.5">Manage the Insights section</p>
            </div>
            <Link
              href="/admin/blog/new"
              className="flex items-center gap-1.5 px-4 py-2 bg-fortress-gold text-fortress-navy text-sm font-bold hover:bg-fortress-champagne transition-colors"
            >
              <Plus className="w-4 h-4" /> New Article
            </Link>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-16 text-fortress-silver/40 text-sm">
              No articles yet. Create your first one.
            </div>
          ) : (
            <div className="space-y-1">
              {articles.map((a) => (
                <div key={a.slug} className="flex items-center justify-between p-4 bg-fortress-deep border border-white/5">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 bg-fortress-charcoal flex items-center justify-center shrink-0">
                      <Newspaper className="w-4 h-4 text-fortress-gold" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-fortress-ivory truncate">{a.title}</p>
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 ${a.status === "published" ? "text-green-400 bg-green-500/10" : "text-yellow-400 bg-yellow-500/10"}`}>
                          {a.status === "published" ? "Published" : "Draft"}
                        </span>
                      </div>
                      <p className="text-[10px] text-fortress-silver/40">{a.category} &middot; Updated {timeAgo(a.updatedAt)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 ml-3">
                    <Link
                      href={`/admin/blog/${a.slug}`}
                      className="p-2 text-fortress-silver/40 hover:text-fortress-gold transition-colors"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(a.slug)}
                      className="p-2 text-fortress-silver/40 hover:text-red-400 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
