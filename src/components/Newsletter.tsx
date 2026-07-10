"use client";

import { useEffect, useRef, useState } from"react";
import { Send } from"lucide-react";

export default function Newsletter() {
 const [visible, setVisible] = useState(false);
 const [email, setEmail] = useState("");
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
 <div className="absolute inset-0 bg-fortress-deep" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,74,0.06),transparent_60%)]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 <span className="text-fortress-ivory">Receive </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Fortress Insights
 </span>
 </h2>
 <p className="text-fortress-silver mb-8">
 Selected market developments, investment perspectives, and company updates — delivered
 occasionally, and only when worth your time.
 </p>

 <form
 onSubmit={(e) => {
 e.preventDefault();
 setEmail("");
 }}
 className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
 >
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="Enter your email address"
 required
 className="flex-1 px-6 py-4 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/50 focus:outline-none focus:border-fortress-gold/50 transition-colors"
 />
 <button
 type="submit"
 className="px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold hover:shadow-lg hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
 >
 <Send className="w-4 h-4" />
 Subscribe
 </button>
 </form>
 <p className="text-fortress-silver/40 text-xs mt-4">
 By subscribing, you agree to receive communications from Fortress Investment Holdings.
 You may unsubscribe at any time.
 </p>
 </div>
 </div>
 </section>
 );
}
