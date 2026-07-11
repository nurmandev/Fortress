"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "971500000000";
  const message = encodeURIComponent(
    "Hello, I would like to enquire about Fortress Investment Holdings."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 animate-ping opacity-20 rounded-full" />
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 rounded-full">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
}
