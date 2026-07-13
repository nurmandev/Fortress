"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import {
  Newspaper,
  MessageCircle,
  TrendingUp,
  PlusCircle,
  Edit3,
  ArrowRight,
  Activity,
  ChevronRight,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

interface Activity {
  id: string;
  type: "contact" | "submission";
  title: string;
  description: string;
  time: string;
}

interface Stats {
  blogPosts: number;
  totalContacts: number;
  totalSubmissions: number;
  activities: Activity[];
}

const statCards = [
  { key: "blogPosts" as const, label: "Blog Posts", icon: Newspaper },
  { key: "totalContacts" as const, label: "Contact Enquiries", icon: MessageCircle },
  { key: "totalSubmissions" as const, label: "Investment Submissions", icon: TrendingUp },
];

const quickActions = [
  { label: "Create Blog Post", icon: PlusCircle, href: "/admin/blog/new" },
  { label: "Edit Homepage", icon: Edit3, href: "/admin/content/home" },
  { label: "View Enquiries", icon: MessageCircle, href: "/admin/enquiries" },
  { label: "Manage Content", icon: FileText, href: "/admin/content" },
];

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats);
  }, []);

  if (!stats) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-fortress-gold border-t-transparent animate-spin rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      <AdminSidebar active="Dashboard" />
      <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-screen pt-12 md:pt-0">
        <div className="bg-fortress-deep border-b border-fortress-charcoal">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between h-14">
              <h1 className="text-lg font-bold text-fortress-ivory tracking-tight">Dashboard</h1>
              <div className="flex items-center gap-2">
                <Link href="/admin/settings" className="p-2 text-fortress-silver hover:text-fortress-champagne transition-colors rounded-lg hover:bg-fortress-charcoal">
                  <Settings className="w-4 h-4" />
                </Link>
                <div className="ml-1 pl-2 border-l border-fortress-charcoal flex items-center gap-2">
                  <div className="w-7 h-7 bg-fortress-gold rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-fortress-navy">A</span>
                  </div>
                  <span className="text-xs text-fortress-silver hidden sm:inline">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {statCards.map((card) => (
              <div key={card.key} className="bg-fortress-navy rounded-xl shadow-lg">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-fortress-deep flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-fortress-gold" />
                    </div>
                    <span className="text-fortress-silver text-[11px] uppercase tracking-[2px] font-medium">{card.label}</span>
                  </div>
                  <p className="text-3xl font-bold text-fortress-ivory tracking-tight">{stats[card.key]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-fortress-navy rounded-xl shadow-lg overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-fortress-deep flex items-center justify-center">
                    <Activity className="w-4 h-4 text-fortress-gold" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-fortress-ivory">Recent Activity</h2>
                    <p className="text-[10px] text-fortress-silver/50 tracking-wide">Latest enquiries & submissions</p>
                  </div>
                </div>
                {stats.activities.length === 0 ? (
                  <p className="text-fortress-silver/30 text-xs text-center py-8">No recent activity</p>
                ) : (
                  <div className="space-y-1">
                    {stats.activities.slice(0, 5).map((a) => (
                      <div key={a.id} className="flex items-start gap-3 p-3 bg-fortress-deep hover:bg-fortress-charcoal rounded-lg transition-colors cursor-pointer group border border-transparent hover:border-fortress-gold/20">
                        <div className="w-8 h-8 rounded-lg bg-fortress-navy border border-fortress-charcoal flex items-center justify-center shrink-0 mt-0.5">
                          {a.type === "contact" ? <MessageCircle className="w-4 h-4 text-fortress-champagne" /> : <TrendingUp className="w-4 h-4 text-fortress-champagne" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-fortress-silver uppercase tracking-wider font-medium">{a.type}</span>
                            <span className="text-[10px] text-fortress-silver/40 ml-auto whitespace-nowrap">{timeAgo(a.time)}</span>
                          </div>
                          <p className="text-fortress-ivory text-xs font-medium truncate mt-0.5">{a.title}</p>
                          <p className="text-fortress-silver/60 text-[11px] truncate capitalize mt-0.5">{a.description}</p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-fortress-silver/30 group-hover:text-fortress-gold/60 transition-colors shrink-0 mt-2" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-fortress-navy rounded-xl shadow-lg overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-fortress-deep flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-fortress-gold" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-fortress-ivory">Quick Actions</h2>
                    <p className="text-[10px] text-fortress-silver/50 tracking-wide">Common admin tasks</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex items-center justify-between p-3.5 bg-fortress-deep border border-fortress-charcoal rounded-lg hover:bg-fortress-charcoal transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <action.icon className="w-4 h-4 text-fortress-gold" />
                        <span className="text-xs font-medium text-fortress-silver group-hover:text-fortress-ivory transition-colors">{action.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-fortress-silver/30 group-hover:text-fortress-gold/60 transition-all group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
