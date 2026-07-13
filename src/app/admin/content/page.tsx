"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { FileText, ChevronRight } from "lucide-react";

interface PageItem {
  slug: string;
  title: string;
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

export default function ContentList() {
  const [pages, setPages] = useState<PageItem[]>([]);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then(setPages);
  }, []);

  return (
    <div className="min-h-screen bg-white flex">
      <AdminSidebar active="Content" />
      <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-screen pt-12 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-fortress-navy tracking-tight">Content Management</h1>
            <p className="text-fortress-silver text-sm mt-1">Manage all static website pages</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/admin/content/${page.slug}`}
                className="flex flex-col p-5 bg-fortress-navy border border-white/5 hover:border-fortress-gold/30 transition-all group rounded-lg"
              >
                <div className="w-10 h-10 bg-fortress-deep flex items-center justify-center rounded-lg mb-4">
                  <FileText className="w-4 h-4 text-fortress-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-fortress-ivory group-hover:text-fortress-gold transition-colors">{page.title}</p>
                  <p className="text-[11px] text-fortress-silver/40 mt-1">
                    Updated {timeAgo(page.updatedAt)}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-3 pt-3 border-t border-fortress-charcoal">
                  <span className="text-xs text-fortress-silver/30 group-hover:text-fortress-gold/60 transition-colors">Edit</span>
                  <ChevronRight className="w-3.5 h-3.5 text-fortress-silver/20 group-hover:text-fortress-gold/50 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
