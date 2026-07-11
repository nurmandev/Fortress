"use client";

import { useEffect, useRef, useState } from "react";

const commitments = [
  {
    title: "Identify",
    desc: "Selected opportunities across focused sectors.",
  },
  {
    title: "Evaluate",
    desc: "Risk, market strength and value potential.",
  },
  {
    title: "Grow",
    desc: "Long-term capital growth through oversight.",
  },
];

export default function Philosophy() {
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
    <section id="approach" className="relative py-28 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-2">
      <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`max-w-[900px] mx-auto transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="block text-center text-fortress-gold text-xs tracking-[6px] uppercase mb-6 font-semibold">
            05 - Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-fortress-ivory text-center mb-8 uppercase tracking-tight leading-tight">
            Pillars of Value Creation
          </h2>
          <p className="text-fortress-silver/80 text-lg leading-relaxed text-center max-w-[700px] mx-auto mb-16">
            We build long-term value through disciplined strategy, trusted relationships, and institutional decision-making.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((item, i) => (
              <div key={item.title} className="text-center p-8 border border-fortress-gold/10 bg-fortress-deep transition-all duration-300 hover:border-fortress-gold/30 rounded-sm">
                <span className="text-fortress-gold/45 text-4xl font-light block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-fortress-ivory mb-4">{item.title}</h3>
                <p className="text-fortress-silver/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-fortress-silver/50 text-sm leading-relaxed text-center max-w-[600px] mx-auto mt-12 italic">
            If we cannot add value beyond a cheque, it is not an opportunity for Fortress.
          </p>
        </div>
      </div>
    </section>
  );
}
