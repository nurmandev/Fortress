"use client";

import { useEffect, useState } from "react";
import {
  Download,
  Trash2,
  CheckCheck,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface EnquiryItem {
  id: string;
  type: "contact" | "submission";
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
  details: {
    phone?: string;
    company?: string;
    investmentRange?: string;
    fileName?: string;
  };
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

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [selected, setSelected] = useState<EnquiryItem | null>(null);
  const [filter, setFilter] = useState<"all" | "contact" | "submission">("all");

  function load() {
    fetch("/api/admin/enquiries")
      .then((r) => r.json())
      .then(setEnquiries);
  }

  useEffect(load, []);

  async function handleMarkRead(id: string) {
    await fetch(`/api/admin/enquiries/${id}`, { method: "PATCH" });
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this enquiry?")) return;
    await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
    setSelected(null);
    load();
  }

  const filtered = enquiries.filter((e) => filter === "all" || e.type === filter);
  const unread = enquiries.filter((e) => !e.read).length;

  return (
    <div className="min-h-screen bg-fortress-navy flex">
      <AdminSidebar active="Enquiries" />
      <main className="flex-1 overflow-auto min-h-screen pt-12 md:pt-0 flex flex-col md:flex-row">
        <div className={`w-full md:w-[420px] border-b md:border-b-0 md:border-r border-white/5 flex flex-col ${selected ? "hidden md:flex" : ""}`}>
          <div className="p-4 border-b border-white/5">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-lg font-bold text-fortress-ivory">Enquiries</h1>
              {unread > 0 && <span className="text-[10px] bg-fortress-gold text-fortress-navy font-bold px-2 py-0.5">{unread} unread</span>}
            </div>
            <div className="flex gap-1">
              {(["all", "contact", "submission"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 text-xs font-medium transition-colors ${filter === f ? "bg-fortress-gold text-fortress-navy" : "bg-fortress-charcoal text-fortress-silver hover:text-fortress-ivory"}`}>
                  {f === "all" ? "All" : f === "contact" ? "Contacts" : "Submissions"}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-auto space-y-0.5 p-2">
            {filtered.map((e) => (
              <button
                key={e.id}
                onClick={() => setSelected(e)}
                className={`w-full text-left p-3 transition-colors ${selected?.id === e.id ? "bg-fortress-charcoal" : "hover:bg-fortress-charcoal/60"} ${!e.read ? "border-l-2 border-fortress-gold" : "border-l-2 border-transparent"}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-fortress-ivory truncate">{e.name}</p>
                  <span className="text-[10px] text-fortress-silver/40 whitespace-nowrap">{timeAgo(e.createdAt)}</span>
                </div>
                <p className="text-xs text-fortress-silver/60 truncate mt-0.5">{e.subject}</p>
                <p className="text-[10px] text-fortress-silver/30 mt-0.5 capitalize">{e.type}</p>
              </button>
            ))}
            {filtered.length === 0 && <p className="text-center text-fortress-silver/40 text-xs py-8">No enquiries</p>}
          </div>
        </div>

        <div className={`flex-1 p-4 md:p-6 overflow-auto ${!selected ? "hidden md:block" : ""}`}>
          {selected ? (
            <div className="space-y-5">
              <button onClick={() => setSelected(null)} className="md:hidden flex items-center gap-1 text-fortress-silver/50 hover:text-fortress-gold text-xs transition-colors mb-2">
                <svg className="w-3 h-3 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                Back to list
              </button>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold text-fortress-ivory">{selected.name}</h2>
                  <a href={`mailto:${selected.email}`} className="text-fortress-gold text-xs hover:underline">{selected.email}</a>
                  <p className="text-fortress-silver/40 text-[10px] mt-0.5 capitalize">{selected.type} &middot; {selected.subject}</p>
                </div>
                <div className="flex items-center gap-1">
                  {!selected.read && (
                    <button onClick={() => handleMarkRead(selected.id)} className="p-2 text-fortress-silver/40 hover:text-green-400 transition-colors" title="Mark as read">
                      <CheckCheck className="w-4 h-4" />
                    </button>
                  )}
                  <button onClick={() => handleDelete(selected.id)} className="p-2 text-fortress-silver/40 hover:text-red-400 transition-colors" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {selected.details?.phone && (
                <div className="text-xs text-fortress-silver/60">
                  Phone: <span className="text-fortress-ivory">{selected.details.phone}</span>
                </div>
              )}
              {selected.details?.company && (
                <div className="text-xs text-fortress-silver/60">
                  Company: <span className="text-fortress-ivory">{selected.details.company}</span>
                </div>
              )}
              {selected.details?.investmentRange && (
                <div className="text-xs text-fortress-silver/60">
                  Investment Range: <span className="text-fortress-ivory">{selected.details.investmentRange}</span>
                </div>
              )}

              <div className="bg-fortress-deep border border-white/5 p-4">
                <p className="text-fortress-ivory text-sm whitespace-pre-wrap">{selected.message}</p>
              </div>

              {selected.details?.fileName && (
                <div className="flex items-center gap-3 p-3 bg-fortress-deep border border-white/5">
                  <Download className="w-4 h-4 text-fortress-gold" />
                  <span className="text-sm text-fortress-ivory">{selected.details.fileName}</span>
                  <span className="text-xs text-fortress-silver/40">(uploaded document)</span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-fortress-silver/30 text-sm">
              Select an enquiry to view
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
