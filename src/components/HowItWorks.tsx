"use client";

import { useEffect, useRef, useState } from"react";
import {
 Search,
 BarChart3,
 FileSignature,
 TrendingUp,
 Handshake,
} from"lucide-react";

const steps = [
 {
 num:"01",
 icon: Search,
 title:"Identify Opportunities",
 desc:"We find businesses and assets with genuine potential through networks, submissions, market research, and trusted advisors.",
 },
 {
 num:"02",
 icon: BarChart3,
 title:"Evaluate Risk & Potential",
 desc:"Every opportunity undergoes detailed assessment covering business model, market, leadership, financials, and risk profile.",
 },
 {
 num:"03",
 icon: FileSignature,
 title:"Invest Strategically",
 desc:"We design investment structures that fit the needs of the business and the interests of all stakeholders.",
 },
 {
 num:"04",
 icon: TrendingUp,
 title:"Manage & Grow Value",
 desc:"We contribute beyond capital through strategic planning, financial oversight, governance, and market expansion.",
 },
 {
 num:"05",
 icon: Handshake,
 title:"Build Long-Term Partnerships",
 desc:"We maintain clear communication, shared objectives, and mutual accountability with all stakeholders.",
 },
];

export default function HowItWorks() {
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

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`text-center mb-16 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Our Approach
 </p>
 <h2 className="text-4xl md:text-5xl font-bold mb-6">
 <span className="text-fortress-ivory">Disciplined. Strategic. </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Long-Term.
 </span>
 </h2>
 <p className="text-fortress-silver text-lg max-w-2xl mx-auto">
 Our investment process is designed to identify quality opportunities, manage risk,
 and build sustainable value.
 </p>
 </div>

 <div className="relative">
 {/* Timeline Line */}
 <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fortress-gold/20 to-transparent" />

 <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
 {steps.map((step, i) => (
 <div
 key={step.num}
 className={`relative text-center group transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: `${i * 150}ms` }}
 >
 {/* Step Circle */}
 <div className="relative inline-flex mb-6">
 <div className="w-20 h-20 bg-fortress-deep border-2 border-fortress-gold/20 flex items-center justify-center group-hover:border-fortress-gold/50 transition-all duration-300 relative z-10 bg-fortress-navy">
 <step.icon className="w-8 h-8 text-fortress-gold" />
 </div>
 <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-fortress-gold to-fortress-champagne flex items-center justify-center text-fortress-navy text-xs font-bold z-20">
 {step.num}
 </div>
 </div>

 <h3 className="text-lg font-bold text-fortress-ivory mb-3">{step.title}</h3>
 <p className="text-fortress-silver text-sm leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
