export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

export const categoryColors: Record<string, string> = {
  "Real Estate": "border-l-fortress-gold",
  "Business Acquisitions": "border-l-blue-400",
  "Private Equity": "border-l-green-400",
  "AI & Technology": "border-l-purple-400",
  "Digital Assets & Blockchain": "border-l-orange-400",
  "Hospitality": "border-l-pink-400",
  "Trading & Distribution": "border-l-cyan-400",
  "Market Insights": "border-l-amber-400",
  "Company News": "border-l-red-400",
  "Strategic Partnerships": "border-l-teal-400",
};

export const categories = [
  { label: "Real Estate" },
  { label: "Business Acquisitions" },
  { label: "Private Equity" },
  { label: "AI & Technology" },
  { label: "Digital Assets & Blockchain" },
  { label: "Hospitality" },
  { label: "Trading & Distribution" },
  { label: "Market Insights" },
  { label: "Company News" },
  { label: "Strategic Partnerships" },
];

export const allArticles: Article[] = [
  {
    slug: "value-of-business-acquisitions",
    category: "Business Acquisitions",
    title: "Understanding the Value of Business Acquisitions",
    excerpt: "The key factors serious investors evaluate before acquiring an established company  and the warning signs that end negotiations early.",
    date: "July 2026",
    readTime: "5 min read",
  },
  {
    slug: "uae-global-investment-destination",
    category: "Market Insights",
    title: "The UAE as a Global Investment Destination",
    excerpt: "Why capital, talent, and businesses continue to choose the UAE: a clear-eyed look at the commercial, regulatory, and strategic advantages.",
    date: "July 2026",
    readTime: "6 min read",
  },
  {
    slug: "investing-in-ai-commercial-purpose",
    category: "AI & Technology",
    title: "Investing in AI With Commercial Purpose",
    excerpt: "Why practical applications, strong teams, and genuine customer demand matter more than technology trends alone.",
    date: "June 2026",
    readTime: "4 min read",
  },
  {
    slug: "real-estate-outlook-2026",
    category: "Real Estate",
    title: "Real Estate Investment Outlook",
    excerpt: "An analysis of current market cycles, emerging opportunities in commercial and residential real estate across key global markets.",
    date: "June 2026",
    readTime: "7 min read",
  },
  {
    slug: "private-equity-middle-market",
    category: "Private Equity",
    title: "Middle Market Private Equity Opportunities",
    excerpt: "Why the middle market continues to offer compelling risk-adjusted returns for patient capital with operational expertise.",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "blockchain-beyond-crypto",
    category: "Digital Assets & Blockchain",
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Exploring enterprise blockchain applications in supply chain, trade finance, and asset tokenisation that are gaining commercial traction.",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    slug: "hospitality-sector-recovery",
    category: "Hospitality",
    title: "Hospitality Sector: Recovery and Reinvention",
    excerpt: "How the hospitality industry is adapting to new traveller expectations and creating opportunities for strategic investment.",
    date: "May 2026",
    readTime: "4 min read",
  },
  {
    slug: "trading-distribution-uae",
    category: "Trading & Distribution",
    title: "Trading and Distribution in the UAE",
    excerpt: "An overview of the UAE's position as a global trading hub and what it means for distribution-focused investments.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    slug: "strategic-partnerships-growth",
    category: "Strategic Partnerships",
    title: "The Power of Strategic Partnerships",
    excerpt: "How well-structured partnerships can accelerate growth, reduce risk, and create value that neither party could achieve alone.",
    date: "April 2026",
    readTime: "4 min read",
  },
  {
    slug: "company-announcement-fortress",
    category: "Company News",
    title: "Fortress Investment Holdings Welcomes Yogesh",
    excerpt: "An announcement about the latest addition to the Fortress leadership team and what it means for our strategic direction.",
    date: "March 2026",
    readTime: "3 min read",
  },
];
