"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Newspaper,
  Plus,
  Edit3,
  Trash2,
  ChevronRight,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/AdminNavbar";

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
    <div className="min-h-screen bg-[#03080e] flex selection:bg-fortress-gold/20 selection:text-fortress-champagne font-sans">
      <AdminSidebar active="Blog Posts" />
      <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-screen relative">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fortress-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fortress-navy/50 rounded-full blur-[150px] pointer-events-none" />
        
        <AdminNavbar title="Blog Posts" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-400 text-sm">Manage the Insights section</p>
            </div>
            <Link
              href="/admin/blog/new"
              className="flex items-center gap-2 px-5 py-2.5 bg-fortress-gold text-fortress-navy text-sm font-bold hover:bg-fortress-champagne transition-colors rounded-lg"
            >
              <Plus className="w-4 h-4" /> New Article
            </Link>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-12 h-12 text-fortress-silver/20 mx-auto mb-3" />
              <p className="text-fortress-silver/40 text-sm">No articles yet. Create your first one.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {articles.map((a) => (
                <div key={a.slug} className="flex items-center justify-between p-5 bg-[#07111D]/80 backdrop-blur-xl border border-fortress-gold/10 hover:border-fortress-gold/30 hover:-translate-y-0.5 shadow-xl shadow-black/20 transition-all duration-300 group rounded-xl mb-3">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="w-10 h-10 bg-fortress-deep flex items-center justify-center shrink-0 rounded-lg">
                      <Newspaper className="w-4 h-4 text-fortress-gold" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <p className="text-sm font-medium text-fortress-ivory group-hover:text-fortress-gold transition-colors truncate">{a.title}</p>
                        <span className={`text-[10px] font-medium px-2 py-0.5 tracking-wide rounded-full ${a.status === "published" ? "text-fortress-gold bg-fortress-gold/10 border border-fortress-gold/20" : "text-fortress-silver bg-fortress-silver/10 border border-fortress-silver/20"}`}>
                          {a.status === "published" ? "Published" : "Draft"}
                        </span>
                      </div>
                      <p className="text-[11px] text-fortress-silver/40 mt-0.5">
                        {a.category} &middot; Updated {timeAgo(a.updatedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0 ml-3">
                    <Link
                      href={`/admin/blog/${a.slug}`}
                      className="p-2 text-fortress-silver/30 hover:text-fortress-gold transition-colors rounded-md"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(a.slug)}
                      className="p-2 text-fortress-silver/30 hover:text-fortress-champagne transition-colors rounded-md"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-fortress-silver/10 group-hover:text-fortress-gold/40 transition-colors ml-1" />
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
