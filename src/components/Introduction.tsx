"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Introduction() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-16 md:py-28 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="block text-fortress-gold text-xs tracking-[6px] uppercase font-semibold">
              01 - Introduction
            </span>
            <h2 className="text-2xl md:text-5xl font-light text-fortress-ivory leading-tight uppercase tracking-tight">
              Strength Behind Every Investment
            </h2>
            <div className="h-0.5 w-12 bg-fortress-gold/30 my-6"></div>
            <p className="text-fortress-silver/90 text-base md:text-lg leading-relaxed">
              Great businesses are rarely built by capital alone. They are built by people who
              combine resources with judgement, patience, and genuine commitment.
            </p>
            <p className="text-fortress-silver/80 text-base leading-relaxed">
              We were established to create a trusted platform for investment, acquisition, and
              long-term business growth in the UAE and selected international markets. We evaluate
              opportunities across multiple sectors - but we never spread ourselves thin. Every
              investment we make receives our capital, our strategic attention, and our networks.
            </p>
            <p className="text-fortress-silver/60 text-sm leading-relaxed border-l border-fortress-gold/20 pl-4">
              Our objective is simple to state and demanding to deliver: strengthen the businesses
              we back, improve their market position, and create value that lasts for our partners,
              investors, and stakeholders.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative -[2rem] overflow-hidden shadow-2xl border border-fortress-gold/10 aspect-[4/3] lg:aspect-square rounded-sm">
            <Image
              src="/black-men-cafe-have-business.jpg"
              alt=""
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-fortress-navy/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
