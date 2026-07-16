"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(labelRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
        .fromTo(headingRef.current, { opacity: 0, y: 40, skewY: 1.5 }, { opacity: 1, y: 0, skewY: 0, duration: 0.8, ease: "power4.out" }, "-=0.3")
        .fromTo(dividerRef.current, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.5, ease: "power3.out" }, "-=0.4")
        .fromTo(
          parasRef.current ? Array.from(parasRef.current.querySelectorAll("p")) : [],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(imageRef.current, { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.7");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-16 md:py-28 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span ref={labelRef} className="block text-fortress-gold text-xs tracking-[6px] uppercase font-semibold">
              01 - Introduction
            </span>
            <h2 ref={headingRef} className="text-2xl md:text-5xl font-light text-fortress-ivory leading-tight uppercase tracking-tight mt-4">
              Strength Behind Every Investment
            </h2>
            <div ref={dividerRef} className="h-0.5 w-12 bg-fortress-gold/30 my-6" />
            <div ref={parasRef}>
              <p className="text-fortress-silver/90 text-base md:text-lg leading-relaxed mb-4">
                Great businesses are rarely built by capital alone. They are built by people who combine resources with judgement, patience, and genuine commitment.
              </p>
              <p className="text-fortress-silver/90 text-base md:text-lg leading-relaxed mb-4">
                That is the thinking behind Fortress Investment Holdings.
              </p>
              <p className="text-fortress-silver/80 text-base leading-relaxed">
                We were established to create a trusted platform for investment, acquisition, and long-term business growth in the UAE and selected international markets. Every investment we make receives our capital, our strategic attention, and our networks.
              </p>
            </div>
          </div>

          <div ref={imageRef}>
            <motion.div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-fortress-gold/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Image
                src="/website image.png"
                alt="Fortress Investment Holdings leadership"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-fortress-navy/20" />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-fortress-gold/60" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-fortress-gold/60" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
