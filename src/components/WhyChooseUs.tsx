"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Disciplined Decision-Making",
    desc: "Every opportunity is examined through detailed commercial, financial, operational, and risk assessment. We say no more often than we say yes - and that is precisely why our partners trust us.",
  },
  {
    title: "Long-Term Perspective",
    desc: "We are not chasing quarterly results. We prioritise sustainable growth and lasting value over short-term speculation.",
  },
  {
    title: "Diversified Expertise",
    desc: "Our multi-sector approach means we understand how different industries, asset classes, and market cycles behave - and how to position investments accordingly.",
  },
  {
    title: "Strategic Involvement",
    desc: "Where it adds value, we contribute far more than capital: strategic guidance, business development, governance, and access to established professional networks.",
  },
  {
    title: "Trusted Partnerships",
    desc: "We build relationships on transparency, confidentiality, alignment, and mutual benefit. Our reputation is our most carefully protected asset.",
  },
  {
    title: "UAE Market Access",
    desc: "Based in Dubai, we operate at the heart of one of the world's most dynamic investment environments - with direct access to regional capital, talent, regulators, and opportunity flow.",
  },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 overflow-hidden rounded-2xl mx-4 my-2">
      <div className="absolute inset-0 bg-fortress-deep" />
      <div ref={ref} className="relative max-w-[1280px] mx-auto px-8">
        <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="block text-fortress-gold/50 text-xs tracking-[6px] uppercase mb-6 font-medium">
            04 - Why Choose Fortress
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-12 leading-tight">
            A Stronger Foundation for Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {benefits.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold text-fortress-gold mb-3">{item.title}</h3>
                <p className="text-fortress-silver/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider mt-28 max-w-[1280px] mx-auto" />
    </section>
  );
}
