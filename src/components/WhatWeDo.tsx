"use client";

import { useEffect, useRef, useState } from "react";

const activities = [
  {
    title: "Direct Investments",
    desc: "Deploying capital into businesses and assets with clear commercial fundamentals.",
    className: "md:col-span-2",
  },
  {
    title: "Business Acquisitions",
    desc: "Acquiring established companies with proven operations and room to grow.",
    className: "md:col-span-1",
  },
  {
    title: "Private Equity Participation",
    desc: "Backing privately held companies with scalable models and capable leadership.",
    className: "md:col-span-1",
  },
  {
    title: "Real Estate Investments",
    desc: "Residential, commercial, hospitality, and income-generating property across the UAE.",
    className: "md:col-span-2",
  },
  {
    title: "Joint Ventures & Strategic Partnerships",
    desc: "Combining strengths with partners who share our standards.",
    className: "md:col-span-2",
  },
  {
    title: "Business Expansion Support",
    desc: "Helping portfolio companies enter new markets and scale operations.",
    className: "md:col-span-1",
  },
  {
    title: "Trading & Distribution",
    desc: "Connecting reliable products with growing regional demand.",
    className: "md:col-span-1",
  },
  {
    title: "Technology & Innovation",
    desc: "Investing in practical, commercially driven technology businesses.",
    className: "md:col-span-2",
  },
];

export default function WhatWeDo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-fortress-navy border-t border-fortress-gold/10 rounded-2xl mx-4 my-8">
      <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <span className="block text-fortress-gold text-xs tracking-[6px] uppercase mb-4 font-semibold">
                02 — What We Do
              </span>
              <h2 className="text-2xl md:text-5xl font-light text-fortress-ivory leading-tight uppercase tracking-tight">
                Strategic Investment. Sustainable Growth.
              </h2>
            </div>
            <p className="text-fortress-silver/80 text-base md:text-lg leading-relaxed max-w-[500px]">
              We invest in businesses, assets, and opportunities with strong foundations and meaningful long-term potential.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((item, i) => (
              <div
                key={i}
                className={`group p-6 md:p-10 border border-fortress-gold/10 bg-fortress-deep flex flex-col justify-between min-h-[180px] md:min-h-[220px] transition-all duration-500 hover:border-fortress-gold/30 hover:shadow-xl hover:-translate-y-1 ${item.className} rounded-sm`}
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
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-6 md:p-8 border-l border-fortress-gold/25 bg-fortress-deep/30">
            <p className="text-fortress-silver/60 text-sm leading-relaxed italic">
              Every opportunity passes through a structured evaluation process focused on
              commercial viability, risk, scalability, and long-term value. If it does not meet
              our standards, we do not invest. That discipline protects everyone we work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
