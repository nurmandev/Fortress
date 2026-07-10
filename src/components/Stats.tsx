"use client";

import { useEffect, useRef, useState } from"react";

interface CounterProps {
 end: number;
 suffix?: string;
 prefix?: string;
 label: string;
 duration?: number;
}

function AnimatedCounter({ end, suffix ="", prefix ="", label, duration = 2000 }: CounterProps) {
 const [count, setCount] = useState(0);
 const [started, setStarted] = useState(false);
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !started) {
 setStarted(true);
 }
 },
 { threshold: 0.3 }
 );
 if (ref.current) observer.observe(ref.current);
 return () => observer.disconnect();
 }, [started]);

 useEffect(() => {
 if (!started) return;
 let startTime: number | null = null;
 const step = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const progress = Math.min((timestamp - startTime) / duration, 1);
 const eased = 1 - Math.pow(1 - progress, 3);
 setCount(Math.floor(eased * end));
 if (progress < 1) requestAnimationFrame(step);
 };
 requestAnimationFrame(step);
 }, [started, end, duration]);

 return (
 <div ref={ref} className="text-center group">
 <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent mb-3">
 {prefix}
 {count.toLocaleString()}
 {suffix}
 </div>
 <p className="text-fortress-silver text-sm md:text-base">{label}</p>
 </div>
 );
}

export default function Stats() {
 return (
 <section className="relative py-24 overflow-hidden">
 <div className="absolute inset-0 bg-fortress-deep" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,74,0.05),transparent_60%)]" />
 <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
 <AnimatedCounter end={150} suffix="+" label="Projects Completed" />
 <AnimatedCounter end={120} suffix="+" label="Happy Clients" />
 <AnimatedCounter end={200} suffix="+" label="Premium Articles" />
 <AnimatedCounter end={45} suffix="+" label="Professional Consultants" />
 <AnimatedCounter end={8} suffix="+" label="Countries Served" />
 </div>
 </div>
 </section>
 );
}
