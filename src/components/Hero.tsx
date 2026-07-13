"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(containerRef.current, { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 1.4 })
      .fromTo(badgeRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.7")
      .fromTo(headingRef.current, { opacity: 0, y: 50, skewY: 2 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9 }, "-=0.4")
      .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .fromTo(btnsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] md:min-h-screen pt-20 pb-12 md:pt-28 md:pb-16 px-5 sm:px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden bg-fortress-navy"
    >
      {/* Background image with layered gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero-Background.png"
          alt="Fortress Investment Holdings"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Stronger overlay on mobile so text stays readable */}
        <div className="absolute inset-0 bg-fortress-navy/80 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-fortress-navy/95 via-fortress-navy/85 md:via-fortress-navy/80 to-fortress-navy/60 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-fortress-navy/80 via-transparent to-fortress-navy/30" />
      </div>

      {/* Subtle animated grain texture overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content  centred on mobile, left-aligned on md+ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center text-center md:items-start md:text-left">
        <span ref={badgeRef} className="block text-fortress-gold text-[10px] sm:text-xs md:text-sm tracking-[4px] md:tracking-[6px] uppercase font-semibold mb-4 md:mb-6">
          Fortress Investment Holdings
        </span>

        <h1 ref={headingRef} className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] uppercase tracking-tight mb-5 md:mb-8 max-w-xs sm:max-w-lg md:max-w-4xl">
          Built on Strength.<br />
          <span className="font-semibold bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
            Driven by Vision.
          </span>
        </h1>

        <p ref={subRef} className="text-fortress-silver/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-xl md:max-w-3xl leading-relaxed mb-8 md:mb-10 font-light">
          A Dubai-based diversified investment holding company identifying, acquiring, and growing high-potential businesses across real estate, private equity, technology, and hospitality.
        </p>

        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/investment-focus"
              className="block w-full sm:w-auto px-6 sm:px-8 py-3.5 md:py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-xs sm:text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm shadow-lg text-center"
            >
              Explore Our Investments
            </Link>
          </motion.div>
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/partner-with-us"
              className="block w-full sm:w-auto px-6 sm:px-8 py-3.5 md:py-4 border border-fortress-silver/40 text-white font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all rounded-sm backdrop-blur-sm text-center"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated decorative gold line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fortress-gold/40 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 1.2 }}
      />
    </section>
  );
}
