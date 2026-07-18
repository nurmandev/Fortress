"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function PartnershipCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(labelRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
        .fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: "power4.out" }, "-=0.3")
        .fromTo(
          parasRef.current ? Array.from(parasRef.current.querySelectorAll("p")) : [],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(btnsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/strategy-ideas.jpg" alt="" fill className="object-cover" loading="lazy" sizes="100vw" />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-fortress-navy/95 via-fortress-navy/90 to-fortress-navy/95" />

      <div ref={sectionRef} className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <span ref={labelRef} className="block text-fortress-gold text-xs tracking-[6px] uppercase mb-6 font-semibold">
            06 - Partnership
          </span>
          <h2 ref={headingRef} className="text-2xl md:text-5xl font-light text-fortress-ivory mb-6 uppercase tracking-tight leading-tight">
            Let&apos;s Build Long-Term Value Together
          </h2>
          <div ref={parasRef}>
            <p className="text-fortress-silver/90 text-lg leading-relaxed mb-4 max-w-[700px] mx-auto">
              We welcome selected opportunities from business owners, entrepreneurs, investors, developers, advisors, and strategic partners.
            </p>
            <p className="text-fortress-silver/70 text-sm leading-relaxed mb-8 md:mb-12 max-w-[600px] mx-auto">
              Whether you are seeking investment, presenting a business for acquisition, proposing a joint venture, or exploring a long-term partnership  our team is ready to review your opportunity with professionalism and discretion.
            </p>
          </div>
          <div ref={btnsRef} className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <Link
                href="/invest-with-fortress"
                className="block px-8 py-3.5 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm tracking-widest shadow-lg rounded-sm hover:opacity-90 transition-opacity"
              >
                SUBMIT AN OPPORTUNITY
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <Link
                href="/contact"
                className="block px-8 py-3.5 border border-fortress-gold text-fortress-gold text-sm tracking-widest font-semibold hover:bg-fortress-gold/10 transition-all duration-300 rounded-sm"
              >
                CONTACT OUR TEAM
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
