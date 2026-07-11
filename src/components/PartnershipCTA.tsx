"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PartnershipCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/strategy-ideas.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-fortress-navy/95 via-fortress-navy/90 to-fortress-navy/95" />
      
      <div ref={ref} className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`max-w-[900px] mx-auto text-center transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="block text-fortress-gold text-xs tracking-[6px] uppercase mb-6 font-semibold">
            06 - Partnership
          </span>
          <h2 className="text-2xl md:text-5xl font-light text-fortress-ivory mb-6 uppercase tracking-tight leading-tight">
            Let&apos;s Build Long-Term Value Together
          </h2>
          <p className="text-fortress-silver/90 text-lg leading-relaxed mb-6 max-w-[700px] mx-auto">
            We welcome selected opportunities from business owners, entrepreneurs, investors,
            developers, advisors, and strategic partners.
          </p>
          <p className="text-fortress-silver/70 text-sm leading-relaxed mb-8 md:mb-12 max-w-[600px] mx-auto">
            Whether you are seeking investment, presenting a business for acquisition, proposing
            a joint venture, or exploring a long-term partnership - our team is ready to review
            your opportunity with professionalism and discretion.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/partner-with-us"
              className="px-8 py-3.5 bg-fortress-gold text-fortress-navy font-bold text-sm tracking-widest hover:bg-fortress-champagne transition-all duration-300 shadow-lg rounded-sm"
            >
              SUBMIT AN OPPORTUNITY
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-fortress-gold text-fortress-gold text-sm tracking-widest font-semibold hover:bg-fortress-gold/10 transition-all duration-300 rounded-sm"
            >
              CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
