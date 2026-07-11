"use client";

import { useEffect, useRef, useState } from "react";

export default function Newsletter() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
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
    <section className="relative py-16 md:py-24 overflow-hidden rounded-2xl mx-4 my-8">
      <div className="absolute inset-0 bg-fortress-deep" />
      <div className="section-divider max-w-[1280px] mx-auto" />
      <div ref={ref} className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 md:pt-24">
        <div className={`max-w-[600px] mx-auto text-center transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-fortress-ivory mb-4">
            Receive Fortress Insights
          </h2>
          <p className="text-fortress-silver/60 leading-relaxed mb-8">
            Selected market developments, investment perspectives, and company updates -
            delivered occasionally, and only when worth your time.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="flex flex-col sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full sm:flex-1 px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory text-sm placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-fortress-gold text-fortress-navy font-bold text-sm tracking-widest hover:bg-fortress-champagne transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-fortress-silver/30 text-xs mt-4">
            By subscribing, you agree to receive communications from Fortress Investment Holdings.
            You may unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
