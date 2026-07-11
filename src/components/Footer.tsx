import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "#",
      label: "Instagram",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "#",
      label: "Facebook",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
      label: "X (Twitter)",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
      href: "#",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative bg-fortress-navy border-t border-fortress-gold/10 py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-6 md:gap-6">
        
        {/* Brand Logo & Copyright */}
        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="text-lg font-extrabold tracking-[6px] text-fortress-ivory uppercase leading-none">
            FORTRESS <span className="text-fortress-gold">IH</span>
          </Link>
          <p className="text-fortress-silver/40 text-[10px] md:text-xs text-center">
            &copy; {new Date().getFullYear()} Fortress Investment Holdings. All Rights Reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 md:gap-6 flex-wrap">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-fortress-silver/40 hover:text-fortress-gold transition-colors duration-300"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-fortress-silver/40">
          <Link href="/privacy-policy" className="hover:text-fortress-gold transition-colors whitespace-nowrap">Privacy Policy</Link>
          <span className="text-fortress-silver/20">&middot;</span>
          <Link href="/terms-of-use" className="hover:text-fortress-gold transition-colors whitespace-nowrap">Terms of Use</Link>
          <span className="text-fortress-silver/20">&middot;</span>
          <Link href="/investment-disclaimer" className="hover:text-fortress-gold transition-colors whitespace-nowrap">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
