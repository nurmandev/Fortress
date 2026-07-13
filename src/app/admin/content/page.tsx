"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { FileText, Edit3 } from "lucide-react";

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
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Content" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-5 py-4 md:py-5">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-fortress-ivory">Content Management</h1>
            <p className="text-fortress-silver text-xs mt-0.5">
              Manage all static website pages from one place
            </p>
          </div>

          <div className="grid gap-1.5">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/admin/content/${page.slug}`}
                className="flex items-center justify-between p-4 bg-fortress-deep border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-fortress-charcoal flex items-center justify-center">
                    <FileText className="w-4 h-4 text-fortress-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fortress-ivory">{page.title}</p>
                    <p className="text-[10px] text-fortress-silver/40">
                      Updated {timeAgo(page.updatedAt)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-fortress-silver/30 group-hover:text-fortress-gold transition-colors">Edit</span>
                  <Edit3 className="w-3.5 h-3.5 text-fortress-silver/30 group-hover:text-fortress-gold transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
