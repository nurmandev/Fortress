"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { title: "Disciplined Decision-Making", desc: "Every opportunity is examined through detailed commercial, financial, operational, and risk assessment. We say no more often than we say yes - and that is precisely why our partners trust us." },
  { title: "Long-Term Perspective", desc: "We are not chasing quarterly results. We prioritise sustainable growth and lasting value over short-term speculation." },
  { title: "Diversified Expertise", desc: "Our multi-sector approach means we understand how different industries, asset classes, and market cycles behave - and how to position investments accordingly." },
  { title: "Strategic Involvement", desc: "Where it adds value, we contribute far more than capital: strategic guidance, business development, governance, and access to established professional networks." },
  { title: "Trusted Partnerships", desc: "We build relationships on transparency, confidentiality, alignment, and mutual benefit. Our reputation is our most carefully protected asset." },
  { title: "UAE Market Access", desc: "Based in Dubai, we operate at the heart of one of the world's most dynamic investment environments - with direct access to regional capital, talent, regulators, and opportunity flow." },
];

export default function WhyChooseUs() {
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
          { opacity: 0, y: 35, x: -10 },
          { opacity: 1, y: 0, x: 0, duration: 0.55, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-16 md:py-28 overflow-hidden rounded-2xl mx-4 my-8">
      <div className="absolute inset-0 bg-fortress-deep" />
      <div ref={sectionRef} className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        <div ref={headerRef}>
          <span className="block text-fortress-gold/50 text-xs tracking-[6px] uppercase mb-6 font-medium">
            04 - Why Choose Fortress
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-fortress-ivory mb-8 md:mb-12 leading-tight">
            A Stronger Foundation for Growth
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              className="group cursor-default"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              {/* Animated gold accent */}
              <motion.div
                className="h-px w-8 bg-fortress-gold/30 mb-4"
                whileHover={{ width: "3rem", backgroundColor: "rgba(201,162,74,0.7)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <h3 className="text-lg font-bold text-fortress-gold mb-3 transition-colors duration-300 group-hover:text-fortress-champagne">
                {item.title}
              </h3>
              <p className="text-fortress-silver/60 text-sm leading-relaxed transition-colors duration-300 group-hover:text-fortress-silver/80">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16 md:mt-28 max-w-[1280px] mx-auto" />
    </section>
  );
}
