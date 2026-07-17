"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  Cpu,
  Briefcase,
  TrendingUp,
  UtensilsCrossed,
  Wifi,
  Truck,
  Gem,
  Handshake,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { icon: Building2, title: "Real Estate", href: "/investment-focus#real-estate" },
  { icon: Briefcase, title: "Business Acquisitions", href: "/investment-focus#business-acquisitions" },
  { icon: TrendingUp, title: "Private Equity", href: "/investment-focus#private-equity" },
  { icon: Wifi, title: "AI & Emerging Technology", href: "/investment-focus#ai-technology" },
  { icon: UtensilsCrossed, title: "Hospitality", href: "/investment-focus#hospitality" },
  { icon: Cpu, title: "Digital Assets & Blockchain", href: "/investment-focus#digital-assets" },
  { icon: Truck, title: "Energy & Physical Commodities", href: "/investment-focus#energy-commodities" },
  { icon: Gem, title: "Luxury Assets", href: "/investment-focus#luxury-assets" },
  { icon: Handshake, title: "Strategic Partnerships", href: "/investment-focus#strategic-partnerships" },
];

const cardVariants: Variants = {
  rest: { y: 0, borderColor: "rgba(201,162,74,0.10)", boxShadow: "0 0px 0px rgba(201,162,74,0)" },
  hover: { y: -6, borderColor: "rgba(201,162,74,0.35)", boxShadow: "0 20px 40px rgba(201,162,74,0.08)", transition: { type: "spring" as const, stiffness: 350, damping: 22 } },
};

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }
      );
      if (gridRef.current) {
        tl.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.07, ease: "power3.out" },
          "-=0.4"
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      <div ref={sectionRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div>
            <span className="block text-fortress-gold text-xs tracking-[6px] uppercase mb-4 font-semibold">
              02  What We Do
            </span>
            <h2 className="text-2xl md:text-5xl font-light text-fortress-ivory leading-tight uppercase tracking-tight">
              Strategic Investment. Sustainable Growth.
            </h2>
          </div>
          <p className="text-fortress-silver/80 text-base md:text-lg leading-relaxed max-w-[500px]">
            We invest in businesses, assets, and opportunities with strong foundations and meaningful long-term potential.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group p-6 md:p-10 border bg-fortress-deep cursor-pointer rounded-sm"
            >
              <Link href={sector.href} className="block">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-fortress-gold/10 flex items-center justify-center mb-5 rounded-sm">
                  <sector.icon className="w-5 h-5 md:w-7 md:h-7 text-fortress-gold" />
                </div>
                <span className="text-fortress-gold/45 text-[10px] tracking-[4px] uppercase font-semibold block mb-2">
                  Sector {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-fortress-ivory">
                  {sector.title}
                </h3>
                <motion.div
                  className="h-px bg-gradient-to-r from-fortress-gold/60 to-transparent mt-6"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
