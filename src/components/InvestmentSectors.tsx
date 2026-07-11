"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const sectors = [
  {
    title: "Real Estate",
    desc: "Residential, commercial, hospitality, and income-generating property investment across Dubai and the wider UAE.",
    image: "/plants-coins.jpg",
    className: "md:col-span-2 h-[380px]"
  },
  {
    title: "Business Acquisitions",
    desc: "Established businesses with proven operations, stable demand, and clear opportunities for expansion.",
    image: "/business.jpg",
    className: "md:col-span-1 h-[380px]"
  },
  {
    title: "Private Equity",
    desc: "Strategic investments in privately held companies with strong leadership and scalable business models.",
    image: "/african-man-black-suit.jpg",
    className: "md:col-span-1 h-[380px]"
  },
  {
    title: "AI & Technology",
    desc: "Technology-enabled businesses, digital platforms, and innovative solutions solving genuine market problems.",
    image: "/businessman-reading-good-news-laptop.jpg",
    className: "md:col-span-2 h-[380px]"
  },
  {
    title: "Hospitality",
    desc: "Hotels, serviced accommodation, tourism, food and beverage, and lifestyle-led businesses in one of the world's leading visitor economies.",
    image: "/employees.jpg",
    className: "md:col-span-2 h-[380px]"
  },
  {
    title: "Trading & Distribution",
    desc: "Businesses driving regional and international trade, supply, and market expansion across the GCC.",
    image: "/gold-coins.jpg",
    className: "md:col-span-1 h-[380px]"
  },
];

export default function InvestmentSectors() {
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
    <section id="investment-focus" className="relative py-28 overflow-hidden bg-fortress-navy rounded-2xl mx-4 my-2">
      <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="block text-fortress-gold text-xs tracking-[6px] uppercase mb-4 font-semibold">
                03 - Investment Sectors
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-fortress-ivory leading-tight uppercase tracking-tight">
                A Diversified<br />
                Investment Vision
              </h2>
            </div>
            <p className="text-fortress-silver/80 text-base md:text-lg leading-relaxed max-w-[500px]">
              Fortress Investment Holdings focuses on sectors where our capital, experience, and
              strategic involvement can create measurable value.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.title}
                className={`group relative -[2rem] overflow-hidden bg-fortress-deep border border-fortress-gold/5 flex flex-col justify-end p-8 md:p-10 transition-all duration-500 hover:border-fortress-gold/30 hover:shadow-2xl hover:-translate-y-1 ${sector.className} rounded-sm`}
              >
                {/* Background Image with Zoom Effect */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${sector.image}')` }}
                />
                
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-fortress-navy via-fortress-navy/80 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Content */}
                <div className="relative z-20 transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <span className="text-fortress-gold text-[10px] tracking-[4px] uppercase font-semibold block mb-2">
                    Sector {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-fortress-ivory mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-fortress-silver/70 text-sm leading-relaxed max-w-md transition-colors duration-300 group-hover:text-fortress-silver">
                    {sector.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/investment-focus"
              className="inline-flex items-center px-8 py-3.5 border border-fortress-gold text-fortress-gold hover:bg-fortress-gold hover:text-fortress-navy text-sm tracking-widest font-semibold transition-all duration-300 rounded-sm"
            >
              VIEW ALL INVESTMENT SECTORS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
