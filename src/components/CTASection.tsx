"use client";

import { useEffect, useRef, useState } from"react";
import Link from"next/link";
import { ArrowRight, Shield } from"lucide-react";

export default function CTASection() {
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
 <div className="absolute inset-0 bg-gradient-to-br from-fortress-deep via-fortress-navy to-fortress-deep" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,74,0.08),transparent_50%)]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`relative bg-gradient-to-br from-fortress-charcoal to-fortress-navy border border-fortress-gold/15 p-10 md:p-16 text-center overflow-hidden transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 {/* Decorative Elements */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fortress-gold/5 blur-[100px]" />
 <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fortress-gold/3 blur-[80px]" />

 <div className="relative">
 <div className="w-16 h-16 bg-gradient-to-br from-fortress-gold to-fortress-champagne flex items-center justify-center mx-auto mb-8">
 <Shield className="w-8 h-8 text-fortress-navy" />
 </div>

 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
 <span className="text-fortress-ivory">Let&apos;s Build </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Long-Term Value
 </span>
 <span className="text-fortress-ivory"> Together</span>
 </h2>

 <p className="text-fortress-silver text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
 We welcome selected opportunities from business owners, entrepreneurs, investors,
 developers, advisors, and strategic partners. Every submission is reviewed
 professionally and treated with discretion.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 href="/partner-with-us"
 className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-lg hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105"
 >
 Submit an Opportunity
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link
 href="/contact"
 className="group inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-fortress-gold/30 text-fortress-gold font-bold text-lg hover:bg-fortress-gold/10 hover:border-fortress-gold/50 transition-all duration-300"
 >
 Contact Our Team
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
