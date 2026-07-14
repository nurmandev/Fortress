"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { User, Target, Handshake, Newspaper, Menu, X, Shield } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const navItems = [
  { label: "About", href: "/about", icon: User },
  { label: "Investment Focus", href: "/investment-focus", icon: Target },
  { label: "Approach", href: "/our-approach", icon: Handshake },
  { label: "Partner With Us", href: "/partner-with-us", icon: Handshake },
  { label: "Insights", href: "/insights", icon: Newspaper },
];

const NavLink = ({ href, icon: Icon, label, scrolled }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string; scrolled: boolean }) => (
  <Link
    href={href}
    className={`group flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
      scrolled
        ? "text-gray-600 hover:text-fortress-gold"
        : "text-white/80 hover:text-[#C9A24A]"
    }`}
  >
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    <span>{label}</span>
  </Link>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // GSAP entrance: slide down from above on page load
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const bgClass = scrolled
    ? "bg-white shadow-md"
    : "bg-[#07111D]/95 backdrop-blur-md border-b border-white/5";

  return (
    <>
      <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 h-16 flex px-0">
        <div className={`flex-1 h-10 ${bgClass} z-20 relative min-w-0`}>
          <svg className={`absolute inset-0 w-full h-full ${scrolled ? 'opacity-0' : ''}`} preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
          </svg>
        </div>

        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          <div className="w-[50px] h-full relative shrink-0">
            <div className={`absolute inset-0 ${bgClass}`} style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }} />
            <svg className={`absolute inset-0 w-full h-full pointer-events-none ${scrolled ? 'opacity-0' : ''}`} viewBox="0 0 50 64">
              <path d="M0 39.5 C25 39.5 25 63.5 50 63.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
              <path d="M0 36.5 C25 36.5 25 60.5 50 60.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
            </svg>
          </div>

          <div className="flex-1 h-full relative min-w-0 -ml-px">
            <div className={`absolute inset-0 ${bgClass}`}>
              <svg className={`absolute inset-0 w-full h-full pointer-events-none ${scrolled ? 'opacity-0' : ''}`} preserveAspectRatio="none">
                <line x1="0" y1="63.5" x2="100%" y2="63.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
                <line x1="0" y1="60.5" x2="100%" y2="60.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
              </svg>
            </div>

            <div className="relative w-full h-full flex items-center justify-between px-4 md:px-8">
              <nav className="hidden md:flex gap-8 shrink-0">
                {navItems.slice(0, 3).map(item => (
                  <NavLink key={item.label} {...item} scrolled={scrolled} />
                ))}
              </nav>

              <button
                className={`md:hidden p-1 transition-colors ${
                  scrolled ? "text-gray-600 hover:text-fortress-gold" : "text-white/80 hover:text-[#C9A24A]"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <div className="flex justify-center shrink-0 mx-2 md:mx-4">
                <Link href="/" className="flex items-center group">
                  <div className={`rounded-xl px-4 py-1.5 hidden md:block ${scrolled ? "bg-white shadow-md" : "bg-[#07111D]/95 backdrop-blur-md"}`}>
                    <Image
                      src="/large-logo.png"
                      alt="Fortress Investment Holdings"
                      width={320}
                      height={96}
                      className="h-14 md:h-24 w-auto object-contain"
                      priority
                    />
                  </div>
                  <div className="block md:hidden">
                    <Image
                      src="/phone-logo.png"
                      alt="Fortress Investment Holdings"
                      width={200}
                      height={60}
                      className="h-14 w-auto object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              <nav className="hidden md:flex gap-6 items-center shrink-0">
                {navItems.slice(3).map(item => (
                  <NavLink key={item.label} {...item} scrolled={scrolled} />
                ))}
                <div className={`flex gap-4 pl-4 shrink-0 items-center border-l ${
                  scrolled ? "border-fortress-gold/20" : "border-white/10"
                }`}>
                  <Link
                    href="/admin-login"
                    className="text-fortress-silver/40 hover:text-fortress-gold transition-colors"
                    title="Admin Login"
                  >
                    <Shield className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-1.5 text-sm font-medium text-fortress-navy bg-fortress-gold hover:bg-fortress-champagne transition-colors whitespace-nowrap shadow-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>


            </div>
          </div>

          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            <div className={`absolute inset-0 ${bgClass}`} style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }} />
            <svg className={`absolute inset-0 w-full h-full pointer-events-none ${scrolled ? 'opacity-0' : ''}`} viewBox="0 0 50 64">
              <path d="M0 63.5 C25 63.5 25 39.5 50 39.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
              <path d="M0 60.5 C25 60.5 25 36.5 50 36.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
            </svg>
          </div>
        </div>

        <div className={`flex-1 h-10 ${bgClass} z-20 relative min-w-0 -ml-px`}>
          <svg className={`absolute inset-0 w-full h-full ${scrolled ? 'opacity-0' : ''}`} preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-fortress-silver" />
          </svg>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#07111D] border-b border-white/10 p-4 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-[#C9A24A]/80" />
                  <span className="font-medium text-white/80">{item.label}</span>
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                href="/admin-login"
                className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors text-fortress-silver/50 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 p-3 bg-[#C9A24A] text-[#07111D] font-bold mt-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
