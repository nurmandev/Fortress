"use client";

import Link from "next/link";
import { Settings } from "lucide-react";

interface AdminNavbarProps {
  title: string;
}

export default function AdminNavbar({ title }: AdminNavbarProps) {
  return (
    <div className="bg-fortress-deep border-b border-fortress-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pl-14 md:pl-6">
        <div className="flex items-center justify-between h-14">
          <h1 className="text-lg font-bold text-fortress-ivory tracking-tight">{title}</h1>
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
  );
}
