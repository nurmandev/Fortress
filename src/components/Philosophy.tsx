"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const commitments = [
  { title: "Identify", desc: "Selected opportunities across focused sectors.", number: "01" },
  { title: "Evaluate", desc: "Risk, market strength and value potential.", number: "02" },
  { title: "Grow", desc: "Long-term capital growth through oversight.", number: "03" },
];

const cardVariants: Variants = {
  rest: { y: 0, borderColor: "rgba(201,162,74,0.10)" },
  hover: {
    y: -8,
    borderColor: "rgba(201,162,74,0.40)",
    boxShadow: "0 24px 48px rgba(201,162,74,0.07)",
    transition: { type: "spring" as const, stiffness: 320, damping: 20 },
  },
};

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footnoteRef = useRef<HTMLParagraphElement>(null);

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
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        );
      }
      tl.fromTo(footnoteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="approach" className="relative py-16 md:py-28 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      <div ref={sectionRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          <div ref={headerRef}>
            <span className="block text-center text-fortress-gold text-xs tracking-[6px] uppercase mb-6 font-semibold">
              05 - Our Approach
            </span>
            <h2 className="text-2xl md:text-5xl font-light text-fortress-ivory text-center mb-6 md:mb-8 uppercase tracking-tight leading-tight">
              Pillars of Value Creation
            </h2>
            <p className="text-fortress-silver/80 text-lg leading-relaxed text-center max-w-[700px] mx-auto mb-10 md:mb-16">
              We build long-term value through disciplined strategy, trusted relationships, and institutional decision-making.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
            {commitments.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="text-center p-6 md:p-8 border bg-fortress-deep rounded-sm cursor-default"
              >
                <motion.span
                  className="text-fortress-gold/40 text-5xl font-light block mb-5 leading-none"
                  whileHover={{ color: "rgba(201,162,74,0.75)", scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.number}
                </motion.span>
                <h3 className="text-xl font-semibold text-fortress-ivory mb-4">{item.title}</h3>
                <p className="text-fortress-silver/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p ref={footnoteRef} className="text-fortress-silver/50 text-sm leading-relaxed text-center max-w-[600px] mx-auto mt-8 md:mt-12 italic">
            If we cannot add value beyond a cheque, it is not an opportunity for Fortress.
          </p>
        </div>
      </div>
    </section>
  );
}
