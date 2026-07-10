"use client";

import { useEffect, useRef, useState } from"react";
import Link from"next/link";
import {
 Building2,
 Briefcase,
 TrendingUp,
 Cpu,
 Hotel,
 Globe,
 Diamond,
 Handshake,
 ArrowRight,
} from"lucide-react";

const sectors = [
 {
 icon: Building2,
 title:"Real Estate",
 desc:"Residential, commercial, hospitality, and income-generating property investment across Dubai and the wider UAE.",
 },
 {
 icon: Briefcase,
 title:"Business Acquisitions",
 desc:"Established businesses with proven operations, stable demand, and clear opportunities for expansion.",
 },
 {
 icon: TrendingUp,
 title:"Private Equity",
 desc:"Strategic investments in privately held companies with strong leadership and scalable business models.",
 },
 {
 icon: Cpu,
 title:"AI & Technology",
 desc:"Technology-enabled businesses, digital platforms, and innovative solutions solving genuine market problems.",
 },
 {
 icon: Hotel,
 title:"Hospitality",
 desc:"Hotels, serviced accommodation, tourism, food and beverage, and lifestyle-led businesses.",
 },
 {
 icon: Globe,
 title:"Trading & Distribution",
 desc:"Businesses driving regional and international trade, supply, and market expansion across the GCC.",
 },
 {
 icon: Diamond,
 title:"Luxury Assets",
 desc:"Premium and luxury assets including real estate, vehicles, yachts, collectibles, and fine art.",
 },
 {
 icon: Handshake,
 title:"Strategic Partnerships",
 desc:"Joint ventures, co-investment, market expansion, and long-term commercial collaboration.",
 },
];

export default function InvestmentSectors() {
 const [visible, setVisible] = useState(false);
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) setVisible(true);
 },
 { threshold: 0.1 }
 );
 if (ref.current) observer.observe(ref.current);
 return () => observer.disconnect();
 }, []);

 return (
 <section className="relative py-24 lg:py-32 overflow-hidden">
 <div className="absolute inset-0 bg-fortress-navy" />
 <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fortress-gold/3 blur-[120px]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`text-center mb-16 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Investment Focus
 </p>
 <h2 className="text-4xl md:text-5xl font-bold mb-6">
 <span className="text-fortress-ivory">A Diversified </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Investment Vision
 </span>
 </h2>
 <p className="text-fortress-silver text-lg max-w-2xl mx-auto">
 Fortress Investment Holdings focuses on sectors where our capital, experience, and
 strategic involvement can create measurable value.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {sectors.map((sector, i) => (
 <div
 key={sector.title}
 className={`group bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-7 hover:border-fortress-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-fortress-gold/5 hover:-translate-y-1 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: `${i * 80}ms` }}
 >
 <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center mb-5 group-hover:bg-fortress-gold/20 group-hover:scale-110 transition-all duration-300">
 <sector.icon className="w-7 h-7 text-fortress-gold" />
 </div>
 <h3 className="text-lg font-bold text-fortress-ivory mb-3">{sector.title}</h3>
 <p className="text-fortress-silver text-sm leading-relaxed">{sector.desc}</p>
 </div>
 ))}
 </div>

 <div
 className={`text-center mt-12 transition-all duration-700 delay-500 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <Link
 href="/investment-focus"
 className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-fortress-gold/30 text-fortress-gold font-bold hover:bg-fortress-gold/10 hover:border-fortress-gold/50 transition-all duration-300"
 >
 View All Investment Sectors
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </section>
 );
}
