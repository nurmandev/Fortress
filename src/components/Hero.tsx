"use client";

import { useEffect, useRef, useState } from"react";
import Link from"next/link";
import { ArrowRight, TrendingUp, Shield, Globe } from"lucide-react";

export default function Hero() {
 const [visible, setVisible] = useState(false);
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
 setVisible(true);
 }, []);

 return (
 <section className="relative min-h-screen flex items-center overflow-hidden">
 {/* Background Effects */}
 <div className="absolute inset-0">
 <div className="absolute inset-0 bg-gradient-to-br from-fortress-navy via-fortress-deep to-fortress-navy" />
 <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fortress-gold/5 blur-[120px]" />
 <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fortress-gold/3 blur-[100px]" />
 {/* Grid pattern */}
 <div
 className="absolute inset-0 opacity-[0.03]"
 style={{
 backgroundImage: `linear-gradient(rgba(201,162,74,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,74,0.3) 1px, transparent 1px)`,
 backgroundSize:"60px 60px",
 }}
 />
 </div>

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-32 pb-20">
 <div className="grid lg:grid-cols-2 gap-16 items-center">
 {/* Left Content */}
 <div>
 <div
 className={`inline-flex items-center gap-2 px-4 py-2 bg-fortress-gold/10 border border-fortress-gold/20 mb-8 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-4"
 }`}
 >
 <div className="w-2 h-2 bg-fortress-gold animate-pulse" />
 <span className="text-fortress-gold text-sm font-medium tracking-wide">
 Dubai-Based Investment Holding Company
 </span>
 </div>

 <h1
 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight transition-all duration-700 delay-100 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <span className="text-fortress-ivory">Built on </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Strength.
 </span>
 <br />
 <span className="text-fortress-ivory">Driven by </span>
 <span className="bg-gradient-to-r from-fortress-champagne to-fortress-gold bg-clip-text text-transparent">
 Vision.
 </span>
 </h1>

 <p
 className={`mt-8 text-lg md:text-xl text-fortress-silver leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 We identify, acquire, and grow high-potential businesses and strategic assets
 across real estate, private equity, technology, hospitality, and beyond.
 </p>

 <div
 className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 delay-300 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <Link
 href="/investment-focus"
 className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105"
 >
 Explore Our Investments
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link
 href="/partner-with-us"
 className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-fortress-gold/30 text-fortress-gold font-bold hover:bg-fortress-gold/10 hover:border-fortress-gold/50 transition-all duration-300"
 >
 Partner With Us
 </Link>
 </div>

 {/* Trust Badges */}
 <div
 className={`flex flex-wrap gap-6 mt-12 transition-all duration-700 delay-500 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 {[
 { icon: Shield, label:"Regulated & Compliant" },
 { icon: Globe, label:"UAE-Based Operations" },
 { icon: TrendingUp, label:"Long-Term Value Creation" },
 ].map((badge) => (
 <div key={badge.label} className="flex items-center gap-2 text-fortress-silver/70 text-sm">
 <badge.icon className="w-4 h-4 text-fortress-gold/60" />
 <span>{badge.label}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Right Visual */}
 <div
 className={`hidden lg:block relative transition-all duration-1000 delay-300 ${
 visible ?"opacity-100 translate-x-0" :"opacity-0 translate-x-12"
 }`}
 >
 {/* Main Card */}
 <div className="relative">
 <div className="absolute -inset-1 bg-gradient-to-r from-fortress-gold/20 to-fortress-champagne/20 blur-lg" />
 <div className="relative bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/20 p-8 overflow-hidden">
 <div className="absolute top-0 right-0 w-40 h-40 bg-fortress-gold/5 blur-3xl" />
 <div className="relative">
 <div className="flex items-center justify-between mb-8">
 <div>
 <p className="text-fortress-silver text-sm">Portfolio Value</p>
 <p className="text-3xl font-bold text-fortress-gold mt-1">$2.4B+</p>
 </div>
 <div className="w-12 h-12 bg-fortress-gold/10 flex items-center justify-center">
 <TrendingUp className="w-6 h-6 text-fortress-gold" />
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4 mb-6">
 {[
 { label:"Active Investments", value:"12" },
 { label:"Countries", value:"8+" },
 { label:"Team Members", value:"45+" },
 { label:"Years Combined", value:"60+" },
 ].map((stat) => (
 <div
 key={stat.label}
 className="bg-white/5 p-4 border border-white/5"
 >
 <p className="text-2xl font-bold text-fortress-ivory">{stat.value}</p>
 <p className="text-xs text-fortress-silver mt-1">{stat.label}</p>
 </div>
 ))}
 </div>

 {/* Sectors */}
 <div>
 <p className="text-sm text-fortress-silver mb-3">Investment Sectors</p>
 <div className="flex flex-wrap gap-2">
 {["Real Estate","Private Equity","AI & Tech","Hospitality","Digital Assets"].map(
 (sector) => (
 <span
 key={sector}
 className="px-3 py-1.5 bg-fortress-gold/10 text-fortress-gold text-xs border border-fortress-gold/20"
 >
 {sector}
 </span>
 )
 )}
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Floating Cards */}
 <div className="absolute -left-8 top-16 animate-float">
 <div className="bg-fortress-deep/95 backdrop-blur-xl border border-fortress-gold/20 p-4 shadow-xl shadow-black/20">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-green-500/10 flex items-center justify-center">
 <TrendingUp className="w-5 h-5 text-green-400" />
 </div>
 <div>
 <p className="text-sm font-bold text-fortress-ivory">+18.4%</p>
 <p className="text-xs text-fortress-silver">Annual Return</p>
 </div>
 </div>
 </div>
 </div>

 <div className="absolute -right-4 bottom-20 animate-float" style={{ animationDelay:"2s" }}>
 <div className="bg-fortress-deep/95 backdrop-blur-xl border border-fortress-gold/20 p-4 shadow-xl shadow-black/20">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-fortress-gold/10 flex items-center justify-center">
 <Shield className="w-5 h-5 text-fortress-gold" />
 </div>
 <div>
 <p className="text-sm font-bold text-fortress-ivory">Secure</p>
 <p className="text-xs text-fortress-silver">Capital Protected</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Bottom Stats Bar */}
 <div
 className={`mt-20 pt-10 border-t border-fortress-gold/10 transition-all duration-700 delay-600 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
 {[
 { value:"8+", label:"Investment Sectors" },
 { value:"$2.4B+", label:"Portfolio Value" },
 { value:"45+", label:"Team Members" },
 { value:"8+", label:"Countries" },
 ].map((stat) => (
 <div key={stat.label} className="text-center md:text-left">
 <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 {stat.value}
 </p>
 <p className="text-fortress-silver text-sm mt-2">{stat.label}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
