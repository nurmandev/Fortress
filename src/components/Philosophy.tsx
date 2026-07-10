"use client";

import { useEffect, useRef, useState } from"react";

export default function Philosophy() {
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
 <div className="absolute inset-0 bg-gradient-to-b from-fortress-navy to-fortress-deep" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,162,74,0.06),transparent_60%)]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Our Philosophy
 </p>
 <h2 className="text-4xl md:text-5xl font-bold mb-8">
 <span className="text-fortress-ivory">Capital </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 With Purpose
 </span>
 </h2>
 <p className="text-fortress-silver text-lg leading-relaxed mb-6">
 We believe capital should be deployed responsibly, strategically, and with a
 clear-eyed understanding of both opportunity and risk.
 </p>
 <p className="text-fortress-silver leading-relaxed mb-8">
 Our philosophy rests on three commitments: protect value, support growth, and build
 businesses and assets capable of performing across market cycles — not just in
 favourable conditions. We look for opportunities where our involvement genuinely
 changes the outcome.
 </p>

 <div className="grid md:grid-cols-3 gap-8 mt-12">
 {[
 { title:"Protect Value", desc:"Disciplined risk assessment and capital preservation at every stage." },
 { title:"Support Growth", desc:"Strategic involvement that accelerates business development and market expansion." },
 { title:"Build Endurance", desc:"Creating businesses and assets capable of performing across market cycles." },
 ].map((item, i) => (
 <div
 key={item.title}
 className={`p-6 bg-white/[0.03] border border-fortress-gold/10 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: `${(i + 1) * 200}ms` }}
 >
 <h3 className="text-lg font-bold text-fortress-gold mb-3">{item.title}</h3>
 <p className="text-fortress-silver text-sm leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
