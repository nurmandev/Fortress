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
        className="fixed top-3 left-3 z-40 md:hidden bg-fortress-navy border border-fortress-charcoal p-2 text-fortress-silver hover:text-fortress-champagne shadow-sm rounded-md"
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
        className={`fixed md:sticky top-0 left-0 z-40 w-64 bg-fortress-navy flex flex-col shrink-0 h-screen transition-transform duration-200 md:translate-x-0 border-r border-fortress-charcoal ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-fortress-charcoal">
          <div className="flex items-center justify-between">
            <Image src="/large-logo.png" alt="Fortress" width={200} height={56} className="h-12 w-auto" />
            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-fortress-silver hover:text-fortress-champagne"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-auto">
          {links.map((link) => {
            const isActive = link.label === active;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-all rounded-md ${
                  isActive
                    ? "text-fortress-champagne bg-fortress-gold/10 font-semibold"
                    : "text-fortress-ivory/70 hover:text-fortress-champagne hover:bg-fortress-deep"
                }`}
              >
                <link.icon className="w-4 h-4 shrink-0" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-fortress-charcoal">
          <Link
            href="/admin-login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-fortress-silver/50 hover:text-fortress-champagne transition-colors hover:bg-fortress-deep rounded-md"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
