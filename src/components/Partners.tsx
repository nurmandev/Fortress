"use client";

import { useEffect, useRef, useState } from"react";

const partners = ["Emirates NBD","DIFC","Emaar Properties","ADNOC","Mubadala","DAMAC","Nakheel","Meraas","Aldar Properties","Masdar",
];

export default function Partners() {
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
 <section className="relative py-24 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-fortress-navy to-fortress-deep" />
 <div
 ref={ref}
 className={`relative max-w-[1400px] mx-auto px-6 lg:px-8 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-6"
 }`}
 >
 <div className="text-center mb-12">
 <p className="text-fortress-gold/70 text-sm font-medium tracking-[4px] uppercase">
 Trusted Partners & Associates
 </p>
 </div>

 <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
 {partners.map((partner, i) => (
 <div
 key={partner}
 className="px-6 py-4 bg-white/[0.03] border border-white/[0.06] hover:border-fortress-gold/20 hover:bg-fortress-gold/5 transition-all duration-300 group"
 style={{ animationDelay: `${i * 100}ms` }}
 >
 <span className="text-fortress-silver/50 group-hover:text-fortress-gold/80 font-medium text-sm tracking-wide transition-colors duration-300">
 {partner}
 </span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
