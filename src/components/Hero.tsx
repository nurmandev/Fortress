"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-12 px-4 lg:px-8 bg-white flex flex-col items-center rounded-2xl mx-4 my-8 overflow-hidden">
      
      {/* Main Container */}
      <div 
        className={`relative w-full max-w-[1400px] min-h-[70vh] md:min-h-[85vh] overflow-hidden transition-all duration-1000 flex flex-col items-center justify-center p-6 md:p-16 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        
        {/* Background Image - Occupies the entire section container */}
        <div 
          className="absolute inset-0 z-0 bg-[#4F8AB9] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/portrait-smiling.jpg')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Top Content (Text + Buttons) */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] font-light uppercase tracking-tight mb-8">
            Invest in spaces<br />
            that matter
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/60 text-white text-base font-medium hover:bg-white/10 transition-colors backdrop-blur-sm rounded-sm"
            >
              Book a call
            </Link>
            <Link
              href="/invest"
              className="px-8 py-3 bg-white text-black text-base font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Invest
            </Link>
          </div>
        </div>

        {/* Decorative White "Cutout" Elements over the image */}
        {/* Top cutouts */}
        <div className="absolute top-0 left-[20%] w-[15%] h-12 md:h-16 bg-white z-20"></div>
        <div className="absolute top-0 right-[22%] w-[12%] h-12 md:h-16 bg-white z-20"></div>
        
        {/* Bottom cutouts - matching the complex puzzle shape from the image */}
        {/* Left side large cutout */}
        <div className="absolute bottom-0 left-0 w-[30%] h-24 md:h-32 bg-white z-20"></div>
        
        {/* Center-left small square cutout */}
        <div className="absolute bottom-0 left-[45%] w-[8%] h-16 md:h-24 bg-white z-20"></div>
        
        {/* Right side cutouts */}
        <div className="absolute bottom-0 right-[25%] w-[10%] h-12 md:h-20 bg-white z-20"></div>
        <div className="absolute bottom-0 right-[5%] w-[12%] h-16 md:h-24 bg-white z-20"></div>

      </div>
    </section>
  );
}
