import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fortress Investment Holdings",
  description:
    "Contact Fortress Investment Holdings in Dubai, UAE. Get in touch by phone, email, or visit our office. We respond to all enquiries within 1-2 business days.",
  openGraph: {
    title: "Contact Us | Fortress Investment Holdings",
    description: "Get in touch with Fortress Investment Holdings in Dubai.",
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+971 4 XXX XXXX",
    href: "tel:+97140000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@fortressih.com",
    href: "mailto:info@fortressih.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Dubai, United Arab Emirates",
    href: "#map",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun - Thu, 9AM - 6PM GST",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,162,74,0.08),transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-fortress-ivory">Let&apos;s Start a </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent rounded-sm">
                Conversation
              </span>
            </h1>
            <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl">
              Whether you have a question, an investment opportunity, or simply
              want to learn more about Fortress - we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-5 bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 hover:border-fortress-gold/30 transition-all duration-300 rounded-sm"
              >
                <div className="w-12 h-12 bg-fortress-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-fortress-gold" />
                </div>
                <div>
                  <p className="text-fortress-silver text-xs">{item.label}</p>
                  <p className="text-fortress-ivory font-medium text-sm">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-fortress-ivory mb-2">
                Send Us a Message
              </h2>
              <p className="text-fortress-silver text-sm mb-8">
                We typically respond within 1-2 business days.
              </p>
              <ContactForm />

              <div className="mt-10 pt-8 border-t border-fortress-gold/10">
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300 text-sm font-medium rounded-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3" id="map">
              <div className="bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 overflow-hidden h-full min-h-[500px] rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.643879742878!2d55.2708!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d348d56a8df%3A0x2e84e1b4b4b4b4b4!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.6) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fortress Investment Holdings Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
