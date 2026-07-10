"use client";

import { useEffect, useRef, useState } from"react";
import Link from"next/link";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from"lucide-react";

export default function ContactPreview() {
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
 <div className="absolute inset-0 bg-fortress-navy" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`text-center mb-16 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Get In Touch
 </p>
 <h2 className="text-4xl md:text-5xl font-bold">
 <span className="text-fortress-ivory">Start a </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Conversation
 </span>
 </h2>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: Phone, label:"Telephone", value:"+971 4 XXX XXXX", href:"tel:+97140000000" },
 { icon: Mail, label:"Email", value:"info@fortressih.com", href:"mailto:info@fortressih.com" },
 { icon: MessageCircle, label:"WhatsApp", value:"Chat With Us", href:"#" },
 { icon: MapPin, label:"Office", value:"Dubai, UAE", href:"#" },
 ].map((item, i) => (
 <a
 key={item.label}
 href={item.href}
 className={`group bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-7 hover:border-fortress-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-fortress-gold/5 text-center ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: `${i * 100}ms` }}
 >
 <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-fortress-gold/20 group-hover:scale-110 transition-all duration-300">
 <item.icon className="w-7 h-7 text-fortress-gold" />
 </div>
 <p className="text-fortress-silver text-sm mb-1">{item.label}</p>
 <p className="text-fortress-ivory font-bold">{item.value}</p>
 </a>
 ))}
 </div>

 <div
 className={`text-center mt-12 transition-all duration-700 delay-500 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <Link
 href="/contact"
 className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105"
 >
 Contact Our Team
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </section>
 );
}
