"use client";

import { useEffect, useRef, useState } from"react";
import Link from"next/link";
import { ArrowRight, Clock, Tag } from"lucide-react";

const articles = [
 {
 title:"Understanding the Value of Business Acquisitions",
 desc:"The key factors serious investors evaluate before acquiring an established company — and the warning signs that end negotiations early.",
 category:"Business Acquisitions",
 readTime:"8 min read",
 image:"from-fortress-gold/20 to-fortress-champagne/10",
 },
 {
 title:"The UAE as a Global Investment Destination",
 desc:"Why capital, talent, and businesses continue to choose the UAE: a clear-eyed look at the commercial, regulatory, and strategic advantages.",
 category:"Market Insights",
 readTime:"6 min read",
 image:"from-blue-500/20 to-cyan-500/10",
 },
 {
 title:"Investing in AI With Commercial Purpose",
 desc:"Why practical applications, strong teams, and genuine customer demand matter more than technology trends alone.",
 category:"AI & Technology",
 readTime:"7 min read",
 image:"from-purple-500/20 to-pink-500/10",
 },
];

export default function FeaturedArticles() {
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
 <div className="absolute inset-0 bg-fortress-deep" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <div>
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Insights
 </p>
 <h2 className="text-4xl md:text-5xl font-bold">
 <span className="text-fortress-ivory">Featured </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Insights
 </span>
 </h2>
 </div>
 <Link
 href="/insights"
 className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-fortress-gold font-semibold hover:gap-3 transition-all duration-300"
 >
 View All Insights
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {articles.map((article, i) => (
 <article
 key={article.title}
 className={`group bg-gradient-to-br from-fortress-charcoal to-fortress-deep border border-fortress-gold/10 overflow-hidden hover:border-fortress-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-fortress-gold/5 hover:-translate-y-1 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: `${i * 150}ms` }}
 >
 {/* Image Placeholder */}
 <div
 className={`h-48 bg-gradient-to-br ${article.image} relative overflow-hidden`}
 >
 <div className="absolute inset-0 bg-fortress-navy/40" />
 <div className="absolute inset-0 flex items-center justify-center">
 <span className="text-fortress-gold/30 text-6xl font-bold tracking-widest">
 FIH
 </span>
 </div>
 </div>

 <div className="p-7">
 <div className="flex items-center gap-4 mb-4">
 <span className="flex items-center gap-1.5 text-fortress-gold text-xs font-medium">
 <Tag className="w-3.5 h-3.5" />
 {article.category}
 </span>
 <span className="flex items-center gap-1.5 text-fortress-silver/50 text-xs">
 <Clock className="w-3.5 h-3.5" />
 {article.readTime}
 </span>
 </div>

 <h3 className="text-xl font-bold text-fortress-ivory mb-3 group-hover:text-fortress-gold transition-colors duration-300">
 {article.title}
 </h3>
 <p className="text-fortress-silver text-sm leading-relaxed">{article.desc}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 );
}
