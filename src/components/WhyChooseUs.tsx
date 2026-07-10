"use client";

import { useEffect, useRef, useState } from"react";
import {
 ShieldCheck,
 Clock,
 Layers,
 Users,
 Handshake,
 MapPin,
} from"lucide-react";

const benefits = [
 {
 icon: ShieldCheck,
 title:"Disciplined Decision-Making",
 desc:"Every opportunity is examined through detailed commercial, financial, and risk assessment. We say no more often than we say yes.",
 },
 {
 icon: Clock,
 title:"Long-Term Perspective",
 desc:"We prioritise sustainable growth and lasting value over short-term speculation.",
 },
 {
 icon: Layers,
 title:"Diversified Expertise",
 desc:"Our multi-sector approach means we understand how different industries, asset classes, and market cycles behave.",
 },
 {
 icon: Users,
 title:"Strategic Involvement",
 desc:"Beyond capital: strategic guidance, business development, governance, and access to established professional networks.",
 },
 {
 icon: Handshake,
 title:"Trusted Partnerships",
 desc:"We build relationships on transparency, confidentiality, alignment, and mutual benefit.",
 },
 {
 icon: MapPin,
 title:"UAE Market Access",
 desc:"Based in Dubai, we operate at the heart of one of the world's most dynamic investment environments.",
 },
];

export default function WhyChooseUs() {
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
 <div className="absolute inset-0 bg-gradient-to-b from-fortress-deep to-fortress-navy" />
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fortress-gold/3 blur-[150px]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`text-center mb-16 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Why Choose Fortress
 </p>
 <h2 className="text-4xl md:text-5xl font-bold mb-6">
 <span className="text-fortress-ivory">A Stronger Foundation </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 for Growth
 </span>
 </h2>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {benefits.map((benefit, i) => (
 <div
 key={benefit.title}
 className={`group bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-8 hover:border-fortress-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-fortress-gold/5 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: `${i * 100}ms` }}
 >
 <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center mb-5 group-hover:bg-fortress-gold/20 group-hover:scale-110 transition-all duration-300">
 <benefit.icon className="w-7 h-7 text-fortress-gold" />
 </div>
 <h3 className="text-xl font-bold text-fortress-ivory mb-3">{benefit.title}</h3>
 <p className="text-fortress-silver leading-relaxed text-sm">{benefit.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
