"use client";

import { useState, useEffect } from"react";
import Link from"next/link";
import {
 Menu,
 X,
 ChevronDown,
 Search,
 Shield,
} from"lucide-react";

const navLinks = [
 { label:"Home", href:"/" },
 { label:"About", href:"/about" },
 {
 label:"Investment Focus",
 href:"/investment-focus",
 children: [
 { label:"Real Estate", href:"/investment-focus#real-estate" },
 { label:"Digital Assets & Blockchain", href:"/investment-focus#digital-assets" },
 { label:"Business Acquisitions", href:"/investment-focus#business-acquisitions" },
 { label:"Private Equity", href:"/investment-focus#private-equity" },
 { label:"Hospitality", href:"/investment-focus#hospitality" },
 { label:"AI & Technology", href:"/investment-focus#ai-technology" },
 { label:"Trading & Distribution", href:"/investment-focus#trading" },
 { label:"Luxury Assets", href:"/investment-focus#luxury-assets" },
 { label:"Strategic Partnerships", href:"/investment-focus#partnerships" },
 ],
 },
 { label:"Our Approach", href:"/our-approach" },
 { label:"Partner With Us", href:"/partner-with-us" },
 { label:"Insights", href:"/insights" },
 { label:"Contact", href:"/contact" },
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 const [searchOpen, setSearchOpen] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener("scroll", onScroll);
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <>
 <nav
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 scrolled
 ?"bg-fortress-navy/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-fortress-gold/10"
 :"bg-transparent"
 }`}
 >
 <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
 <div className="flex items-center justify-between h-20">
 {/* Logo */}
 <Link href="/" className="flex items-center gap-3 group">
 <div className="w-10 h-10 bg-gradient-to-br from-fortress-gold to-fortress-champagne flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
 <Shield className="w-5 h-5 text-fortress-navy" />
 </div>
 <div>
 <span className="text-fortress-gold font-bold tracking-[3px] text-lg">
 FORTRESS
 </span>
 <span className="block text-fortress-silver text-[10px] tracking-[4px] -mt-1">
 INVESTMENT HOLDINGS
 </span>
 </div>
 </Link>

 {/* Desktop Links */}
 <div className="hidden xl:flex items-center gap-1">
 {navLinks.map((link) => (
 <div
 key={link.label}
 className="relative"
 onMouseEnter={() => link.children && setActiveDropdown(link.label)}
 onMouseLeave={() => setActiveDropdown(null)}
 >
 <Link
 href={link.href}
 className="flex items-center gap-1 px-4 py-2 text-sm text-fortress-silver hover:text-fortress-gold transition-colors duration-300 hover:bg-white/5"
 >
 {link.label}
 {link.children && <ChevronDown className="w-3.5 h-3.5" />}
 </Link>

 {/* Mega Menu */}
 {link.children && activeDropdown === link.label && (
 <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
 <div className="bg-fortress-deep/98 backdrop-blur-2xl border border-fortress-gold/15 p-6 shadow-2xl shadow-black/40 min-w-[280px]">
 <div className="grid grid-cols-1 gap-1">
 {link.children.map((child) => (
 <Link
 key={child.label}
 href={child.href}
 className="flex items-center gap-3 px-4 py-3 text-sm text-fortress-silver hover:text-fortress-gold hover:bg-white/5 transition-all duration-200"
 >
 <div className="w-1.5 h-1.5 bg-fortress-gold/40" />
 {child.label}
 </Link>
 ))}
 </div>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>

 {/* Right Actions */}
 <div className="flex items-center gap-3">
 <button
 onClick={() => setSearchOpen(!searchOpen)}
 className="p-2.5 text-fortress-silver hover:text-fortress-gold transition-colors hover:bg-white/5"
 aria-label="Search"
 >
 <Search className="w-5 h-5" />
 </button>

 <Link
 href="/contact"
 className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm hover:shadow-lg hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105"
 >
 Invest With Us
 </Link>

 <button
 onClick={() => setMobileOpen(!mobileOpen)}
 className="xl:hidden p-2.5 text-fortress-silver hover:text-fortress-gold transition-colors"
 aria-label="Toggle menu"
 >
 {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>
 </div>
 </div>

 {/* Search Bar */}
 {searchOpen && (
 <div className="border-t border-fortress-gold/10 bg-fortress-navy/98 backdrop-blur-xl">
 <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4">
 <div className="relative">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fortress-silver" />
 <input
 type="text"
 placeholder="Search investments, insights, sectors..."
 className="w-full bg-fortress-deep border border-fortress-gold/20 pl-12 pr-4 py-3 text-fortress-ivory placeholder:text-fortress-silver/50 focus:outline-none focus:border-fortress-gold/50 transition-colors"
 autoFocus
 />
 </div>
 </div>
 </div>
 )}
 </nav>

 {/* Mobile Menu */}
 {mobileOpen && (
 <div className="fixed inset-0 z-40 xl:hidden">
 <div
 className="absolute inset-0 bg-black/60 backdrop-blur-sm"
 onClick={() => setMobileOpen(false)}
 />
 <div className="absolute right-0 top-0 bottom-0 w-[320px] bg-fortress-deep border-l border-fortress-gold/15 overflow-y-auto">
 <div className="p-6 pt-24">
 <div className="space-y-1">
 {navLinks.map((link) => (
 <div key={link.label}>
 <Link
 href={link.href}
 onClick={() => setMobileOpen(false)}
 className="block px-4 py-3 text-fortress-silver hover:text-fortress-gold hover:bg-white/5 transition-all text-base"
 >
 {link.label}
 </Link>
 {link.children && (
 <div className="pl-6">
 {link.children.map((child) => (
 <Link
 key={child.label}
 href={child.href}
 onClick={() => setMobileOpen(false)}
 className="block px-4 py-2 text-sm text-fortress-silver/70 hover:text-fortress-gold transition-colors"
 >
 {child.label}
 </Link>
 ))}
 </div>
 )}
 </div>
 ))}
 </div>
 <div className="mt-8 space-y-3">
 <Link
 href="/contact"
 onClick={() => setMobileOpen(false)}
 className="block w-full text-center px-6 py-3 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold"
 >
 Invest With Us
 </Link>
 </div>
 </div>
 </div>
 </div>
 )}
 </>
 );
}
