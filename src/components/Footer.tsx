"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/* ─── Nav columns ───────────────────────────────────────────── */
const columns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Journey", href: "/about#journey" },
      { label: "Leadership Team", href: "/about#leadership" },
      { label: "Careers", href: "/about#careers" },
      { label: "News & Press", href: "/insights" },
    ],
  },
  {
    heading: "Investments",
    links: [
      { label: "Investment Focus", href: "/investment-focus" },
      { label: "Our Portfolio", href: "/investment-focus#portfolio" },
      { label: "Real Estate", href: "/investment-focus#real-estate" },
      { label: "Private Equity", href: "/investment-focus#private-equity" },
      { label: "Technology", href: "/investment-focus#technology" },
      { label: "Hospitality", href: "/investment-focus#hospitality" },
    ],
  },
  {
    heading: "Partnerships",
    links: [
      { label: "Invest With Fortress", href: "/invest-with-fortress" },
      { label: "Investment Focus", href: "/investment-focus" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Reports", href: "/insights#reports" },
      { label: "ESG Commitment", href: "/our-approach#esg" },
      { label: "FAQs", href: "/about#faqs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

/* ─── Bottom pillars ─────────────────────────────────────────── */
const pillars = [
  {
    title: "BUILT ON TRUST",
    sub: "Integrity in everything we do",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3 L28 8 V17 C28 23.627 22.627 29 16 29 C9.373 29 4 23.627 4 17 V8 Z" strokeLinejoin="round" />
        <path d="M11 16.5 L14.5 20 L21 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "DRIVEN BY IMPACT",
    sub: "Delivering sustainable long-term value",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="18" width="5" height="10" rx="1" />
        <rect x="13" y="12" width="5" height="16" rx="1" />
        <rect x="22" y="6" width="5" height="22" rx="1" />
        <path d="M6 14 L14 9 L21 13 L28 5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 5 L28 5 L28 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "PARTNERED FOR GROWTH",
    sub: "Stronger together, building the future",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 18 C4 18 7 14 11 15 L16 16 C18 16.5 20 15.5 20 14 C20 12.5 18.5 12 17 12.5 L14 13.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 14 L26 10 C27.5 9 28.5 10.5 27.5 12 L21 17 C19.5 18.5 17 19 15 18.5 L10 17 C8 16.5 6 17.5 4 18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 22 L7 18" strokeLinecap="round" />
        <path d="M9 9 C9 9 11 6 14 8 C17 10 14 13 16 14" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ─── Social icons ───────────────────────────────────────────── */
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/135716850/admin/dashboard/?editPageActiveTab=info",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fortressihdubai/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591930895552",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Fortressih",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@fortressihdubai",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.18 2.005h.06c2.016 0 3.577.22 4.947.837a7.4 7.4 0 0 1 2.682 1.91 7.66 7.66 0 0 1 1.547 3.08c.707 2.674.62 6.231-.19 9.582a13.3 13.3 0 0 1-1.593 3.477c-.93 1.433-2.236 2.603-4.08 3.042-1.48.352-2.952.225-4.23-.34-1.255-.555-2.226-1.478-2.87-2.765-.625-1.251-.936-2.74-.936-4.467 0-1.653.286-3.074.848-4.169.56-1.092 1.374-1.832 2.412-2.21 1.033-.376 2.161-.353 3.268.082 1.083.426 1.953 1.18 2.53 2.232.572 1.043.84 2.32.84 3.835 0 1.344-.232 2.432-.69 3.225-.456.79-1.121 1.28-1.983 1.468-.858.187-1.74.015-2.496-.482-.386-.253-.66-.593-.805-.948-.116-.28-.187-.642-.187-1.068 0-.662.15-1.197.448-1.602.298-.405.718-.661 1.26-.77.44-.088.855.03 1.136.316a.618.618 0 0 1 .165.504.645.645 0 0 1-.055.19.84.84 0 0 1-.198.29.709.709 0 0 1-.204.14c-.106.055-.203.123-.292.205a.64.64 0 0 0-.051.057.248.248 0 0 0-.038.064c-.002.006.001.007.01-.001.06-.048.143-.086.247-.114.238-.064.517-.007.691.18.067.072.12.16.158.263.038.104.058.227.058.367 0 .278-.052.496-.156.655-.215.327-.615.583-1.196.766-.59.186-1.343.175-2.257-.03-1.135-.255-2.063-.879-2.698-1.842-.643-.979-.968-2.27-.968-3.868 0-1.646.337-3.018.996-4.076.662-1.064 1.605-1.788 2.792-2.15 1.191-.364 2.517-.32 3.812.14 1.217.43 2.218 1.223 2.895 2.323.676 1.095 1.016 2.44 1.016 4.054 0 1.57-.28 2.893-.834 3.928-.553 1.033-1.336 1.768-2.348 2.2-1.014.434-2.152.497-3.256.192-1.084-.3-1.989-.951-2.606-1.9a5.72 5.72 0 0 1-.352-.607 6.18 6.18 0 0 1-.356-.825 4.315 4.315 0 0 0 .255.14l.006.003c.543.286 1.179.48 1.907.58.728.1 1.472.052 2.18-.14.707-.191 1.327-.53 1.804-1.02.477-.49.826-1.115 1.005-1.875.18-.76.188-1.635.024-2.625-.164-.99-.492-1.876-.985-2.658a6.828 6.828 0 0 0-2.099-1.978 5.454 5.454 0 0 0-2.822-.752c-1.175 0-2.254.239-3.236.718a7.46 7.46 0 0 0-2.543 1.998 8.975 8.975 0 0 0-1.657 3.026c-.397 1.128-.599 2.377-.599 3.745 0 1.401.22 2.694.65 3.855.43 1.157 1.057 2.168 1.885 3.006.829.838 1.82 1.47 2.973 1.872 1.122.39 2.331.527 3.571.394 1.24-.133 2.532-.563 3.875-1.284 1.342-.721 2.585-1.72 3.73-3a.75.75 0 1 1 1.127.99c-1.267 1.443-2.661 2.578-4.183 3.4-1.521.822-3.048 1.324-4.583 1.497-1.537.174-3.03-.007-4.47-.52a9.35 9.35 0 0 1-3.735-2.348c-1.05-1.061-1.82-2.32-2.323-3.78-.504-1.463-.757-3.058-.757-4.786 0-1.693.284-3.254.853-4.683a10.47 10.47 0 0 1 1.937-3.086 9.037 9.037 0 0 1 3.06-2.177c1.187-.535 2.527-.804 4.016-.804zm.608 3.658h-.023c-1.213-.002-2.212.233-3.004.707a4.629 4.629 0 0 0-1.138.94c-.24.277-.398.543-.473.797a1.7 1.7 0 0 0-.068.475c0 .315.117.548.35.698.234.15.482.185.746.107.263-.078.484-.224.663-.438.178-.214.356-.49.534-.828.178-.338.395-.607.65-.808.256-.2.574-.318.953-.35.38-.034.826.018 1.338.157.512.139.99.374 1.435.706.445.332.802.768 1.07 1.308.27.54.442 1.217.515 2.032.074.815.03 1.715-.132 2.7-.161.984-.434 1.863-.82 2.637-.385.774-.861 1.38-1.427 1.818-.567.438-1.2.648-1.9.63-.699-.019-1.258-.24-1.676-.663-.418-.423-.627-1.003-.627-1.74 0-.657.154-1.2.463-1.63.31-.43.725-.72 1.245-.872.52-.152 1.023-.103 1.509.146.485.25.82.663 1.004 1.24.184.575.18 1.207-.012 1.894-.146.522-.405.937-.776 1.245a2.706 2.706 0 0 1-1.314.642.75.75 0 0 0 .253 1.478 4.206 4.206 0 0 0 2.046-1.003c.58-.49.98-1.114 1.2-1.873.22-.759.236-1.605.05-2.537a7.068 7.068 0 0 0-.65-1.886" />
      </svg>
    ),
  },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main area children stagger in
      gsap.fromTo(
        mainRef.current ? Array.from(mainRef.current.children) : [],
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
      // Bottom bar
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden">

      {/* ══════════════ UPPER SECTION ══════════════ */}
      <div className="relative">
        {/* Background image  right half visible, left fades out */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero-Background.png"
            alt=""
            fill
            className="object-cover object-right"
            sizes="100vw"
            aria-hidden="true"
          />
          {/* Strong overlay  heavy left, lighter right so skyline peeks through */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e1a] via-[#080e1a]/92 to-[#080e1a]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a] via-transparent to-[#080e1a]/40" />
        </div>

        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent z-10" />

        {/* Content */}
        <div
          ref={mainRef}
          className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 pt-16 pb-14 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12"
        >
          {/* ── Left: Brand block ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/large-logo.png"
                alt="Fortress Investment Holdings"
                width={320}
                height={96}
                className="h-24 w-auto object-contain drop-shadow-lg"
              />
            </Link>

            {/* Description */}
            <p className="text-[#8fa0b8] text-sm leading-relaxed max-w-[230px]">
              A Dubai-based diversified investment holding company focused on identifying, acquiring, and growing high-potential opportunities across real estate, private equity, technology, digital assets, energy, commodities, and hospitality.
            </p>

            {/* Download Brochure button */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-2.5 border border-[#C9A24A]/50 text-[#C9A24A] text-xs font-semibold tracking-widest uppercase px-5 py-3 w-fit hover:bg-[#C9A24A]/10 transition-colors"
              whileHover={{ borderColor: "rgba(201,162,74,0.9)" }}
              transition={{ duration: 0.2 }}
            >
              {/* Document icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="12" y2="17" />
              </svg>
              Download Brochure
            </motion.a>
          </div>

          {/* ── Right: 4 nav columns ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                {/* Heading + gold underline */}
                <div>
                  <h4 className="text-white text-xs font-bold tracking-[3px] uppercase mb-2">
                    {col.heading}
                  </h4>
                  <div className="h-[1.5px] w-8 bg-[#C9A24A]" />
                </div>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group flex items-center gap-1.5 text-[13px] text-[#8fa0b8] hover:text-[#C9A24A] transition-colors"
                      >
                        {/* Chevron */}
                        <svg
                          className="w-2.5 h-2.5 text-[#C9A24A]/60 group-hover:text-[#C9A24A] shrink-0 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ BOTTOM BAR ══════════════ */}
      <div
        ref={bottomRef}
        className="relative z-10 bg-[#060c17] border-t border-[#C9A24A]/15"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-6 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 justify-between">

          {/* Brand text + copyright */}
          <div className="flex flex-col gap-1 shrink-0">
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="text-white text-sm font-bold tracking-[5px] uppercase">FORTRESS</span>
              <span className="text-[#C9A24A] text-sm font-bold tracking-[5px] uppercase">IH</span>
            </Link>
            <p className="text-[#8fa0b8]/50 text-[11px] leading-snug">
              © {new Date().getFullYear()} Fortress Investment Holdings.
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* 3 Pillars  icons only, text on hover */}
          <div className="flex flex-row gap-6 sm:gap-10 lg:gap-14">
            {pillars.map((p) => (
              <div key={p.title} className="group relative flex items-center justify-center">
                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                  <div className="bg-[#0f1a2e] border border-[#C9A24A]/30 rounded px-3 py-2 shadow-xl whitespace-nowrap">
                    <p className="text-white text-[11px] font-bold tracking-[2px] uppercase leading-tight text-center">
                      {p.title}
                    </p>
                    <p className="text-[#8fa0b8] text-[10px] leading-snug mt-0.5 text-center">
                      {p.sub}
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-[#0f1a2e] border-r border-b border-[#C9A24A]/30 rotate-45 mx-auto -mt-1" />
                </div>
                {/* Hexagon-bordered icon */}
                <div className="relative flex items-center justify-center w-11 h-11 shrink-0">
                  <svg viewBox="0 0 44 44" className="absolute inset-0 w-full h-full" fill="none">
                    <polygon
                      points="22,2 40,12 40,32 22,42 4,32 4,12"
                      stroke="#C9A24A"
                      strokeOpacity="0.5"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="text-[#C9A24A]/80">{p.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Follow Us + social icons */}
          <div className="flex flex-col gap-2.5 shrink-0">
            <p className="text-white text-[11px] font-bold tracking-[3px] uppercase">
              FOLLOW US
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-[#8fa0b8]/25 flex items-center justify-center text-[#8fa0b8]/60 hover:border-[#C9A24A]/60 hover:text-[#C9A24A] transition-colors"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 450, damping: 18 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
