"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Investment Focus", href: "/investment-focus" },
  { label: "Approach", href: "/our-approach" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-22">

          {/* Center Logo — large screen */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex items-center group">
              <Image
                src="/large-logo.png"
                alt="Fortress Investment Holdings"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-medium tracking-wide whitespace-nowrap text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-fortress-gold group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/small-logo.png"
                alt="Fortress Investment Holdings"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop CTA / Mobile Menu Toggle */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
               className="px-7 py-2.5 border border-fortress-gold/40 text-fortress-gold hover:bg-fortress-gold hover:text-white text-[13px] font-semibold tracking-wider transition-all duration-300 whitespace-nowrap rounded-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 transition-colors text-gray-600 hover:text-fortress-gold rounded-sm"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-8 space-y-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-fortress-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-200 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 border border-fortress-gold/40 text-fortress-gold hover:bg-fortress-gold hover:text-white text-base font-semibold tracking-wider transition-all duration-300 rounded-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
