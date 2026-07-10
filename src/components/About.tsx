"use client";

import { useEffect, useRef, useState } from"react";
import Link from"next/link";
import { Target, Eye, Users, ArrowRight } from"lucide-react";

export default function About() {
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
 <div className="absolute inset-0 bg-gradient-to-b from-fortress-navy via-fortress-deep to-fortress-navy" />
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fortress-gold/5 blur-[120px]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-16 items-center">
 {/* Left */}
 <div
 className={`transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 About Fortress
 </p>
 <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
 <span className="text-fortress-ivory">Strength Behind </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Every Investment
 </span>
 </h2>
 <p className="text-fortress-silver text-lg leading-relaxed mb-8">
 Great businesses are rarely built by capital alone. They are built by people who
 combine resources with judgement, patience, and genuine commitment. That is the
 thinking behind Fortress Investment Holdings.
 </p>
 <p className="text-fortress-silver leading-relaxed mb-8">
 We were established to create a trusted platform for investment, acquisition, and
 long-term business growth in the UAE and selected international markets. Every
 investment we make receives our capital, our strategic attention, and our networks.
 </p>

 <Link
 href="/about"
 className="group inline-flex items-center gap-2 text-fortress-gold font-semibold hover:gap-3 transition-all duration-300"
 >
 Learn More About Us
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>

 {/* Right Cards */}
 <div
 className={`grid gap-6 transition-all duration-700 delay-200 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 {[
 {
 icon: Target,
 title:"Our Mission",
 desc:"Identify high-potential opportunities, deploy capital responsibly, and support sustainable growth through strategic involvement and long-term partnerships.",
 },
 {
 icon: Eye,
 title:"Our Vision",
 desc:"To establish Fortress Investment Holdings as a trusted, diversified, and internationally recognised investment group.",
 },
 {
 icon: Users,
 title:"Why Trust Us",
 desc:"Disciplined decision-making, long-term perspective, diversified expertise, and trusted partnerships built on transparency and alignment.",
 },
 ].map((card, i) => (
 <div
 key={card.title}
 className="group bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-8 hover:border-fortress-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-fortress-gold/5"
 style={{ animationDelay: `${i * 150}ms` }}
 >
 <div className="w-12 h-12 bg-fortress-gold/10 flex items-center justify-center mb-4 group-hover:bg-fortress-gold/20 transition-colors">
 <card.icon className="w-6 h-6 text-fortress-gold" />
 </div>
 <h3 className="text-xl font-bold text-fortress-ivory mb-3">{card.title}</h3>
 <p className="text-fortress-silver leading-relaxed text-sm">{card.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
