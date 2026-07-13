"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Newspaper,
  MessageCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Content", icon: FileText, href: "/admin/content" },
  { label: "Blog Posts", icon: Newspaper, href: "/admin/blog" },
  { label: "Enquiries", icon: MessageCircle, href: "/admin/enquiries" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

interface AdminSidebarProps {
  active: string;
}

export default function AdminSidebar({ active }: AdminSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3 left-3 z-40 md:hidden bg-fortress-deep border border-white/10 p-2 text-fortress-silver hover:text-fortress-ivory"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 z-40 w-56 bg-fortress-deep border-r border-white/5 flex flex-col shrink-0 h-screen transition-transform duration-200 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/5">
          <Image src="/large-logo.png" alt="Fortress" width={160} height={44} className="h-8 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-fortress-silver hover:text-fortress-ivory"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-auto">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                link.label === active
                  ? "text-fortress-ivory bg-white/5"
                  : "text-fortress-silver hover:text-fortress-ivory hover:bg-white/5"
              }`}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/5">
          <Link
            href="/admin-login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-fortress-silver/50 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
