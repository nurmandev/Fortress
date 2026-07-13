"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  { title: "Direct Investments", desc: "Deploying capital into businesses and assets with clear commercial fundamentals.", className: "md:col-span-2" },
  { title: "Business Acquisitions", desc: "Acquiring established companies with proven operations and room to grow.", className: "md:col-span-1" },
  { title: "Private Equity Participation", desc: "Backing privately held companies with scalable models and capable leadership.", className: "md:col-span-1" },
  { title: "Real Estate Investments", desc: "Strategic real estate investments across residential, commercial, hospitality, and income-generating assets in the UAE, GCC, and global markets.", className: "md:col-span-2" },
  { title: "Joint Ventures & Strategic Partnerships", desc: "Combining strengths with partners who share our standards.", className: "md:col-span-2" },
  { title: "Business Expansion Support", desc: "Helping portfolio companies enter new markets and scale operations.", className: "md:col-span-1" },
  { title: "Trading & Distribution", desc: "Connecting reliable products with growing regional demand.", className: "md:col-span-1" },
  { title: "Technology & Innovation", desc: "Investing in practical, commercially driven technology businesses.", className: "md:col-span-2" },
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
          {activities.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className={`group p-6 md:p-10 border bg-fortress-deep flex flex-col justify-between min-h-[180px] md:min-h-[220px] cursor-default ${item.className} rounded-sm`}
            >
              <div>
                <span className="text-fortress-gold/45 text-[10px] tracking-[4px] uppercase font-semibold block mb-4">
                  Activity {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-fortress-ivory mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-fortress-silver/70 text-sm leading-relaxed max-w-xl">
                {item.desc}
              </p>
              {/* Hover gold accent line */}
              <motion.div
                className="h-px bg-gradient-to-r from-fortress-gold/60 to-transparent mt-4"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
