"use client";

import { useEffect, useRef, useState } from"react";
import { Quote, Star, ChevronLeft, ChevronRight } from"lucide-react";

const testimonials = [
 {
 name:"Ahmad Al-Rashid",
 position:"CEO, Al-Rashid Group",
 rating: 5,
 text:"Fortress Investment Holdings brought more than capital to our partnership. Their strategic guidance, market access, and governance support have been instrumental in our growth across the UAE.",
 },
 {
 name:"Sarah Mitchell",
 position:"Founder, Mitchell Holdings",
 rating: 5,
 text:"Working with Fortress has been a seamless experience. Their team is professional, discreet, and genuinely invested in creating long-term value. I recommend them without reservation.",
 },
 {
 name:"Mohammed Al-Farsi",
 position:"Director, Farsi Investments",
 rating: 5,
 text:"Fortress understands the UAE market better than most. Their disciplined approach and long-term perspective make them an ideal partner for serious investors.",
 },
 {
 name:"Elena Petrova",
 position:"Managing Partner, EuroCapital",
 rating: 5,
 text:"The team at Fortress brought clarity, professionalism, and genuine strategic value to our joint venture. They are thoughtful partners who prioritise alignment and transparency.",
 },
];

export default function Testimonials() {
 const [current, setCurrent] = useState(0);
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

 const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
 const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

 return (
 <section className="relative py-24 lg:py-32 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-fortress-navy to-fortress-deep" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,162,74,0.05),transparent_60%)]" />

 <div ref={ref} className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
 <div
 className={`text-center mb-16 transition-all duration-700 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
 Testimonials
 </p>
 <h2 className="text-4xl md:text-5xl font-bold">
 <span className="text-fortress-ivory">What Our </span>
 <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
 Partners Say
 </span>
 </h2>
 </div>

 <div
 className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
 visible ?"opacity-100 translate-y-0" :"opacity-0 translate-y-8"
 }`}
 >
 <div className="relative bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/15 p-8 md:p-12">
 <Quote className="absolute top-6 right-8 w-12 h-12 text-fortress-gold/10" />

 <div className="flex gap-1 mb-6">
 {Array.from({ length: testimonials[current].rating }).map((_, i) => (
 <Star key={i} className="w-5 h-5 fill-fortress-gold text-fortress-gold" />
 ))}
 </div>

 <p className="text-fortress-ivory text-lg md:text-xl leading-relaxed mb-8 min-h-[120px]">
 &ldquo;{testimonials[current].text}&rdquo;
 </p>

 <div className="flex items-center justify-between">
 <div>
 <p className="text-fortress-ivory font-bold">{testimonials[current].name}</p>
 <p className="text-fortress-silver text-sm">{testimonials[current].position}</p>
 </div>

 <div className="flex gap-3">
 <button
 onClick={prev}
 className="w-10 h-10 border border-fortress-gold/20 flex items-center justify-center text-fortress-gold hover:bg-fortress-gold/10 transition-all"
 aria-label="Previous testimonial"
 >
 <ChevronLeft className="w-5 h-5" />
 </button>
 <button
 onClick={next}
 className="w-10 h-10 border border-fortress-gold/20 flex items-center justify-center text-fortress-gold hover:bg-fortress-gold/10 transition-all"
 aria-label="Next testimonial"
 >
 <ChevronRight className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Dots */}
 <div className="flex justify-center gap-2 mt-8">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => setCurrent(i)}
 className={`w-2 h-2 transition-all duration-300 ${
 i === current ?"bg-fortress-gold w-6" :"bg-fortress-gold/30"
 }`}
 aria-label={`Go to testimonial ${i + 1}`}
 />
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
