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
  { key: "blogPosts" as const, label: "Blog Posts", icon: Newspaper, color: "from-blue-500 to-blue-600" },
  { key: "totalContacts" as const, label: "Contact Enquiries", icon: MessageCircle, color: "from-fortress-gold to-yellow-600" },
  { key: "totalSubmissions" as const, label: "Investment Submissions", icon: TrendingUp, color: "from-green-500 to-green-600" },
];

const quickActions = [
  { label: "Create Blog Post", icon: PlusCircle, href: "/admin/blog/new", color: "text-blue-400 hover:bg-blue-500/10 border-blue-500/20" },
  { label: "Edit Homepage", icon: Edit3, href: "/admin/homepage", color: "text-fortress-gold hover:bg-fortress-gold/10 border-fortress-gold/20" },
  { label: "View Enquiries", icon: MessageCircle, href: "/admin/enquiries", color: "text-green-400 hover:bg-green-500/10 border-green-500/20" },
  { label: "Manage Content", icon: FileText, href: "/admin/content", color: "text-purple-400 hover:bg-purple-500/10 border-purple-500/20" },
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
      <div className="min-h-screen bg-fortress-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-fortress-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Dashboard" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0">
        <div className="max-w-5xl mx-auto px-4 md:px-5 py-4 md:py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-fortress-ivory">Dashboard</h1>
              <p className="text-fortress-silver text-xs mt-0.5">Welcome back, Admin</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            {statCards.map((card) => (
              <div key={card.key} className="bg-fortress-deep border border-white/5 p-4">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className={`w-9 h-9 bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                    <card.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-fortress-silver text-[10px] uppercase tracking-wider font-medium">{card.label}</span>
                </div>
                <p className="text-2xl font-bold text-fortress-ivory">{stats[card.key]}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-fortress-deep border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-fortress-gold" />
                <h2 className="text-sm font-bold text-fortress-ivory">Recent Activity</h2>
              </div>
              {stats.activities.length === 0 ? (
                <p className="text-fortress-silver/50 text-xs text-center py-6">No recent activity</p>
              ) : (
                <div className="space-y-2">
                  {stats.activities.map((a) => (
                    <div key={a.id} className="flex items-start gap-2.5 p-2.5 bg-fortress-charcoal/40">
                      <div className="w-7 h-7 bg-fortress-charcoal flex items-center justify-center shrink-0">
                        {a.type === "contact" ? <MessageCircle className="w-3.5 h-3.5 text-blue-400" /> : <TrendingUp className="w-3.5 h-3.5 text-green-400" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-fortress-silver/50 uppercase tracking-wider">{a.type}</span>
                          <span className="text-[10px] text-fortress-silver/40 ml-auto whitespace-nowrap">{timeAgo(a.time)}</span>
                        </div>
                        <p className="text-fortress-ivory text-xs font-medium truncate">{a.title}</p>
                        <p className="text-fortress-silver/60 text-[10px] truncate capitalize">{a.description}</p>
                      </div>
                      <ChevronRight className="w-3 h-3 text-fortress-silver/20 shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-fortress-deep border border-white/5 p-4">
              <div className="flex items-center gap-2 mb-4">
                <PlusCircle className="w-4 h-4 text-fortress-gold" />
                <h2 className="text-sm font-bold text-fortress-ivory">Quick Actions</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`flex items-center justify-between p-3 border ${action.color} transition-all group text-xs`}
                  >
                    <div className="flex items-center gap-2">
                      <action.icon className="w-4 h-4" />
                      <span className="font-medium">{action.label}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
