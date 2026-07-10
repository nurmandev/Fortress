"use client";

import Link from "next/link";
import { Shield, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Investment Focus", href: "/investment-focus" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const investmentSectors = [
  { label: "Real Estate", href: "/investment-focus#real-estate" },
  { label: "Digital Assets & Blockchain", href: "/investment-focus#digital-assets" },
  { label: "Business Acquisitions", href: "/investment-focus#business-acquisitions" },
  { label: "Private Equity", href: "/investment-focus#private-equity" },
  { label: "Hospitality", href: "/investment-focus#hospitality" },
  { label: "AI & Technology", href: "/investment-focus#ai-technology" },
  { label: "Trading & Distribution", href: "/investment-focus#trading" },
  { label: "Luxury Assets", href: "/investment-focus#luxury-assets" },
];

const resources = [
  { label: "Investment Insights", href: "/insights" },
  { label: "Market Analysis", href: "/insights" },
  { label: "Sector Reports", href: "/insights" },
  { label: "Company News", href: "/insights" },
  { label: "Partner Announcements", href: "/insights" },
];

const company = [
  { label: "Our Approach", href: "/our-approach" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Strategic Partnerships", href: "/partner-with-us" },
  { label: "Investment Opportunities", href: "/partner-with-us" },
  { label: "Submit a Proposal", href: "/partner-with-us" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Investment Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookies" },
];

const socials = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Instagram", href: "#", icon: "ig" },
  { label: "Facebook", href: "#", icon: "fb" },
  { label: "X / Twitter", href: "#", icon: "X" },
  { label: "YouTube", href: "#", icon: "yt" },
];

export default function Footer() {
  return (
    <footer className="relative bg-fortress-navy border-t border-fortress-gold/10">
      {/* Newsletter Band */}
      <div className="bg-fortress-deep border-b border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-fortress-ivory mb-2">
                Stay Informed
              </h3>
              <p className="text-fortress-silver text-sm">
                Selected market developments, investment perspectives, and company updates
                delivered occasionally.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-lg"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/50 focus:outline-none focus:border-fortress-gold/50 transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm hover:shadow-lg hover:shadow-fortress-gold/25 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Mega Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column - spans 2 */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-fortress-gold to-fortress-champagne flex items-center justify-center">
                <Shield className="w-5 h-5 text-fortress-navy" />
              </div>
              <div>
                <span className="text-fortress-gold font-bold tracking-[3px] text-lg">
                  FORTRESS
                </span>
                <span className="block text-fortress-silver text-[10px] tracking-[4px] -mt-1">
                  INVESTMENT HOLDINGS
                </span>
              </div>
            </Link>
            <p className="text-fortress-silver text-sm leading-relaxed mb-6 max-w-xs">
              Built on Strength. Driven by Vision. A Dubai-based diversified investment
              holding company building sustainable value through disciplined investment,
              strategic acquisitions, and long-term partnerships.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center text-fortress-silver hover:text-fortress-gold hover:border-fortress-gold/30 hover:bg-fortress-gold/10 transition-all duration-300 text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+97140000000"
                className="flex items-center gap-3 text-fortress-silver text-sm hover:text-fortress-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-fortress-gold/60" />
                +971 4 XXX XXXX
              </a>
              <a
                href="mailto:info@fortressih.com"
                className="flex items-center gap-3 text-fortress-silver text-sm hover:text-fortress-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-fortress-gold/60" />
                info@fortressih.com
              </a>
              <div className="flex items-start gap-3 text-fortress-silver text-sm">
                <MapPin className="w-4 h-4 text-fortress-gold/60 mt-0.5" />
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-fortress-ivory font-bold mb-5 text-xs tracking-[3px] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-fortress-silver text-sm hover:text-fortress-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Sectors */}
          <div>
            <h4 className="text-fortress-ivory font-bold mb-5 text-xs tracking-[3px] uppercase">
              Investment Focus
            </h4>
            <ul className="space-y-3">
              {investmentSectors.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-fortress-silver text-sm hover:text-fortress-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-fortress-ivory font-bold mb-5 text-xs tracking-[3px] uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-fortress-silver text-sm hover:text-fortress-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-fortress-ivory font-bold mb-5 text-xs tracking-[3px] uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-fortress-silver text-sm hover:text-fortress-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-fortress-silver/50 text-xs">
              &copy; {new Date().getFullYear()} Fortress Investment Holdings. All Rights
              Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-fortress-silver/50 text-xs hover:text-fortress-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
