"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search, X, Filter, Grid3X3, List, Clock, Eye,
  Bookmark, Share2, ArrowRight, Star, BookOpen,
  Building2, Briefcase, Cpu, UtensilsCrossed, Truck,
  LineChart, Newspaper, Handshake, Check,
  MessageSquare, Mail, Crown, FileText, Users, ChevronLeft, ChevronRight, TrendingUp
} from "lucide-react";
import { categories as rawCategories } from "./articles";

/* ─── Types ──────────────────────────────────────────────────── */
interface ArticleRaw {
  slug: string; category: string; title: string; excerpt: string;
  date: string; readTime: string; featuredImage?: string;
}

interface EnrichedArticle {
  slug: string; category: string; title: string; excerpt: string;
  date: string; readTime: string; image: string;
  isPremium?: boolean; difficulty?: "Beginner" | "Intermediate" | "Advanced";
  tags?: string[]; author?: { name: string; role: string; initials: string; color: string };
  views?: number; comments?: number; rating?: number; trending?: boolean; featured?: boolean;
}

/* ─── Category helpers ───────────────────────────────────────── */
const CAT_ICONS: Record<string, React.ReactNode> = {
  "Real Estate": <Building2 className="w-3.5 h-3.5" />,
  "Business Acquisitions": <Briefcase className="w-3.5 h-3.5" />,
  "Private Equity": <TrendingUp className="w-3.5 h-3.5" />,
  "AI & Technology": <Cpu className="w-3.5 h-3.5" />,
  "Digital Assets & Blockchain": <Cpu className="w-3.5 h-3.5" />,
  "Hospitality": <UtensilsCrossed className="w-3.5 h-3.5" />,
  "Trading & Distribution": <Truck className="w-3.5 h-3.5" />,
  "Market Insights": <LineChart className="w-3.5 h-3.5" />,
  "Company News": <Newspaper className="w-3.5 h-3.5" />,
  "Strategic Partnerships": <Handshake className="w-3.5 h-3.5" />,
};
const CAT_COLORS: Record<string, string> = {
  "Real Estate": "bg-amber-50 text-amber-700 border-amber-200",
  "Business Acquisitions": "bg-blue-50 text-blue-700 border-blue-200",
  "Private Equity": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "AI & Technology": "bg-purple-50 text-purple-700 border-purple-200",
  "Digital Assets & Blockchain": "bg-orange-50 text-orange-700 border-orange-200",
  "Hospitality": "bg-pink-50 text-pink-700 border-pink-200",
  "Trading & Distribution": "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Market Insights": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Company News": "bg-red-50 text-red-700 border-red-200",
  "Strategic Partnerships": "bg-teal-50 text-teal-700 border-teal-200",
};

const POPULAR_TAGS = ["UAE","Dubai","Finance","Strategy","Growth","AI","ESG","Blockchain","Real Estate","Equity"];
const ARTICLES_PER_PAGE = 3;

/* ─── Skeleton ───────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-100 animate-pulse overflow-hidden">
      <div className="h-52 bg-gray-100" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-100 w-1/3" />
        <div className="h-5 bg-gray-200 w-full" />
        <div className="h-5 bg-gray-200 w-3/4" />
        <div className="h-4 bg-gray-100 w-full" />
        <div className="h-4 bg-gray-100 w-5/6" />
        <div className="flex gap-3 pt-2">
          <div className="h-7 w-7 bg-gray-100 rounded-full" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 bg-gray-100 w-1/2" />
            <div className="h-3 bg-gray-100 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Difficulty badge ───────────────────────────────────────── */
function DifficultyBadge({ level }: { level: string }) {
  const map: Record<string, string> = {
    Beginner: "bg-emerald-50 text-emerald-600 border-emerald-200",
    Intermediate: "bg-blue-50 text-blue-600 border-blue-200",
    Advanced: "bg-red-50 text-red-600 border-red-200",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 border ${map[level] || "bg-gray-50 text-gray-500 border-gray-200"}`}>
      {level}
    </span>
  );
}

/* ─── Image map (category → public image) ───────────────────── */
const CAT_IMAGES: Record<string, string> = {
  "Real Estate": "/business.jpg",
  "Business Acquisitions": "/black-men-cafe-have-business.jpg",
  "Private Equity": "/plants-coins.jpg",
  "AI & Technology": "/businessman-reading.jpg",
  "Digital Assets & Blockchain": "/gold-coins.jpg",
  "Hospitality": "/employees.jpg",
  "Trading & Distribution": "/discussing-business.jpg",
  "Market Insights": "/strategy-ideas.jpg",
  "Company News": "/african-man-black-suit.jpg",
  "Strategic Partnerships": "/portrait-smiling.jpg",
};

const AUTHORS = [
  { name: "James Whitmore",    role: "Senior Analyst",       initials: "JW", color: "bg-blue-600"    },
  { name: "Sara Al Mansoori",  role: "Investment Director",  initials: "SM", color: "bg-amber-600"   },
  { name: "David Chen",        role: "Research Lead",        initials: "DC", color: "bg-emerald-600" },
  { name: "Priya Nair",        role: "Market Strategist",    initials: "PN", color: "bg-purple-600"  },
];
const TAGS_POOL = ["UAE","Dubai","Finance","Strategy","Growth","AI","ESG","Blockchain","Real Estate","Equity"];
const DIFFICULTIES: Array<"Beginner"|"Intermediate"|"Advanced"> = ["Beginner","Intermediate","Advanced"];

function enrichArticles(articles: ArticleRaw[]): EnrichedArticle[] {
  return articles.map((a, i) => ({
    ...a,
    image: CAT_IMAGES[a.category] || "/business.jpg",
    difficulty: DIFFICULTIES[i % 3],
    tags: TAGS_POOL.slice(i % TAGS_POOL.length, (i % TAGS_POOL.length) + 3),
    author: AUTHORS[i % AUTHORS.length],
    views: 1200 + i * 347,
    comments: 4 + i * 3,
    rating: +(4.2 + (i % 8) * 0.1).toFixed(1),
    trending: i < 3,
    featured: i === 0,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function InsightsClient() {
  const [articles, setArticles]               = useState<EnrichedArticle[]>([]);
  const [search, setSearch]                   = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags]       = useState<string[]>([]);
  const [viewMode, setViewMode]               = useState<"grid"|"list">("grid");
  const [page, setPage]                       = useState(1);
  const [loading, setLoading]                 = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [bookmarked, setBookmarked]           = useState<Set<string>>(new Set());
  const [email, setEmail]                     = useState("");
  const [subscribed, setSubscribed]           = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.posts) {
          setArticles(enrichArticles(data.data.posts));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const toggleCategory  = (c: string) => { setSelectedCategories(p => p.includes(c) ? p.filter(x=>x!==c) : [...p,c]); setPage(1); };
  const toggleTag       = (t: string) => { setSelectedTags(p => p.includes(t) ? p.filter(x=>x!==t) : [...p,t]); setPage(1); };
  const toggleBookmark  = (slug: string) => setBookmarked(p => { const n=new Set(p); if(n.has(slug)){n.delete(slug);}else{n.add(slug);} return n; });

  const clearAll = () => {
    setSearch(""); setSelectedCategories([]); setSelectedTags([]);
    setPage(1);
  };

  const activeFilterCount = selectedCategories.length + selectedTags.length + (search ? 1 : 0);

  /* ── Filter + sort ── */
  const filtered = useMemo(() => {
    let list = [...articles];
    const q = search.toLowerCase().trim();
    if (q) list = list.filter(a =>
      a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) || (a.tags||[]).some(t=>t.toLowerCase().includes(q)) ||
      (a.author?.name||"").toLowerCase().includes(q)
    );
    if (selectedCategories.length) list = list.filter(a => selectedCategories.includes(a.category));
    if (selectedTags.length) list = list.filter(a => (a.tags||[]).some(t=>selectedTags.includes(t)));
    return list;
  }, [search, selectedCategories, selectedTags]);

  const featured       = filtered.find(a=>a.featured) || filtered[0];
  const rest           = filtered.filter(a=>a.slug!==featured?.slug);
  const totalPages     = Math.ceil(rest.length / ARTICLES_PER_PAGE);
  const paginated      = rest.slice((page-1)*ARTICLES_PER_PAGE, page*ARTICLES_PER_PAGE);

  const catCounts = useMemo(() =>
    rawCategories.reduce((acc,cat)=>{ acc[cat.label]=articles.filter(a=>a.category===cat.label).length; return acc; }, {} as Record<string,number>)
  ,[]);

  /* ═══════════════════ SIDEBAR ═══════════════════ */
  const Sidebar = () => (
    <aside className="flex flex-col gap-4">

      {/* Search */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}}
            placeholder="Search articles…"
            className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#C9A24A]/60 transition-all"
          />
          {search && <button onClick={()=>setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"><X className="w-3.5 h-3.5" /></button>}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-200 p-4">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 flex items-center gap-1.5">
          <BookOpen className="w-3 h-3 text-[#C9A24A]" /> Categories
        </h3>
        <div className="flex flex-col">
          <button onClick={()=>{setSelectedCategories([]);setPage(1);}}
            className={`flex items-center justify-between px-2 py-2 text-sm transition-all border-l-2 ${selectedCategories.length===0?"border-[#C9A24A] text-[#C9A24A] font-semibold bg-amber-50/50":"border-transparent text-gray-600 hover:bg-gray-50"}`}>
            <span className="flex items-center gap-2"><Grid3X3 className="w-3.5 h-3.5" /> All</span>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5">{articles.length}</span>
          </button>
          {rawCategories.map(cat=>(
            <button key={cat.label} onClick={()=>toggleCategory(cat.label)}
              className={`flex items-center justify-between px-2 py-2 text-sm transition-all border-l-2 ${selectedCategories.includes(cat.label)?"border-[#C9A24A] text-[#C9A24A] font-semibold bg-amber-50/50":"border-transparent text-gray-600 hover:bg-gray-50"}`}>
              <span className="flex items-center gap-2">{CAT_ICONS[cat.label]}<span className="truncate">{cat.label}</span></span>
              <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 shrink-0">{catCounts[cat.label]||0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white border border-gray-200 p-4">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3"># Popular Tags</h3>
        <div className="flex flex-wrap gap-1.5">
          {POPULAR_TAGS.map(tag=>(
            <button key={tag} onClick={()=>toggleTag(tag)}
              className={`text-[11px] px-2.5 py-1 border font-medium transition-all ${selectedTags.includes(tag)?"bg-[#C9A24A] text-white border-[#C9A24A]":"bg-white text-gray-500 border-gray-200 hover:border-[#C9A24A]/50 hover:text-[#C9A24A]"}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#07111D] p-5 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A24A]/10 -translate-y-6 translate-x-6" />
        <div className="relative">
          <Mail className="w-7 h-7 text-[#C9A24A] mb-3" />
          <h3 className="font-bold text-base mb-1">Stay Informed</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">Receive our latest investment insights and market commentary.</p>
          {subscribed ? (
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium"><Check className="w-4 h-4" /> Subscribed!</div>
          ) : (
            <div className="flex flex-col gap-2">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email"
                className="w-full px-3 py-2.5 bg-white/10 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A24A]/50 transition-all" />
              <button onClick={()=>email&&setSubscribed(true)}
                className="w-full py-2.5 bg-[#C9A24A] hover:bg-[#E6C879] text-[#07111D] text-sm font-bold transition-colors">Subscribe</button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );

  /* ═══════════════════ GRID CARD ═══════════════════ */
  const GridCard = ({ article }: { article: EnrichedArticle }) => (
    <article className="group bg-white border border-gray-200 hover:border-[#C9A24A]/30 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden shrink-0">
        <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-3">
          <span className={`text-[10px] font-bold px-2.5 py-1 border backdrop-blur-sm ${CAT_COLORS[article.category]||"bg-white/90 text-gray-700 border-gray-200"}`}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <DifficultyBadge level={article.difficulty||"Beginner"} />
          <span className="text-[10px] text-gray-400 flex items-center gap-1 ml-auto"><Clock className="w-3 h-3" /> {article.readTime}</span>
          <span className="text-[10px] text-gray-400 flex items-center gap-1"><Eye className="w-3 h-3" /> {(article.views||0).toLocaleString()}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] leading-snug mb-2 group-hover:text-[#C9A24A] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{article.excerpt}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {(article.tags||[]).slice(0,3).map(tag=>(
            <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-500">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`w-7 h-7 rounded-full ${article.author?.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
              {article.author?.initials}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-gray-800 leading-tight truncate">{article.author?.name}</p>
              <p className="text-[10px] text-gray-400">{article.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={()=>toggleBookmark(article.slug)}
              className={`p-1.5 transition-colors ${bookmarked.has(article.slug)?"text-[#C9A24A] bg-[#C9A24A]/10":"text-gray-400 hover:text-[#C9A24A] hover:bg-gray-50"}`} aria-label="Bookmark">
              <Bookmark className="w-3.5 h-3.5" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-[#C9A24A] hover:bg-gray-50 transition-colors" aria-label="Share"><Share2 className="w-3.5 h-3.5" /></button>
          </div>
        </div>
        <Link href={`/insights/${article.slug}`}
          className="mt-3 inline-flex items-center justify-center gap-2 py-2.5 bg-[#07111D] hover:bg-[#C9A24A] text-white hover:text-[#07111D] text-xs font-bold transition-all duration-200">
          Read Article <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );

  /* ═══════════════════ LIST CARD ═══════════════════ */
  const ListCard = ({ article }: { article: EnrichedArticle }) => (
    <article className="group bg-white border border-gray-200 hover:border-[#C9A24A]/30 hover:shadow-lg transition-all duration-300 flex overflow-hidden">
      <div className="relative w-40 sm:w-52 shrink-0 overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:640px)160px,208px" />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`text-[10px] font-semibold px-2.5 py-1 border ${CAT_COLORS[article.category]||"bg-gray-50 text-gray-600 border-gray-200"}`}>{article.category}</span>
          <DifficultyBadge level={article.difficulty||"Beginner"} />
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-1.5 group-hover:text-[#C9A24A] transition-colors line-clamp-2">{article.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">{article.excerpt}</p>
        <div className="hidden sm:flex flex-wrap gap-1 mb-3">
          {(article.tags||[]).slice(0,3).map(tag=>(
            <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-500">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3 flex-wrap">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
          <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{(article.views||0).toLocaleString()}</span>
          <span className="hidden sm:flex items-center gap-1"><MessageSquare className="w-3 h-3" />{article.comments}</span>
          <span className="hidden sm:flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />{article.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <div className={`w-6 h-6 rounded-full ${article.author?.color} flex items-center justify-center text-white text-[9px] font-bold shrink-0`}>{article.author?.initials}</div>
            <span className="text-[11px] text-gray-600 font-medium truncate">{article.author?.name}</span>
            <span className="text-[11px] text-gray-400">• {article.date}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={()=>toggleBookmark(article.slug)} className={`p-1.5 transition-colors ${bookmarked.has(article.slug)?"text-[#C9A24A] bg-[#C9A24A]/10":"text-gray-400 hover:text-[#C9A24A] hover:bg-gray-50"}`} aria-label="Bookmark"><Bookmark className="w-3.5 h-3.5" /></button>
            <Link href={`/insights/${article.slug}`} className="px-3 py-1.5 bg-[#07111D] hover:bg-[#C9A24A] text-white hover:text-[#07111D] text-xs font-bold transition-all duration-200 flex items-center gap-1">
              Read <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );

  /* ═══════════════════════════════════════════════════════════════
     RENDER
  ═══════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#07111D] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:"radial-gradient(#C9A24A 1px,transparent 1px)", backgroundSize:"32px 32px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07111D]" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="inline-flex items-center gap-2 text-[#C9A24A] text-[10px] sm:text-xs font-semibold tracking-[3px] sm:tracking-[4px] uppercase mb-4 sm:mb-5 bg-[#C9A24A]/10 border border-[#C9A24A]/20 px-3 sm:px-4 py-1.5 sm:py-2">
            <BookOpen className="w-3.5 h-3.5" /> Knowledge Hub
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-5 leading-tight">
            Insights &amp; <span className="bg-gradient-to-r from-[#C9A24A] to-[#E6C879] bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Investment perspectives, market analysis, and strategic commentary from Fortress Investment Holdings.
          </p>
          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 relative">
            <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
            <input type="text" value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}}
              placeholder="Search articles…"
              className="w-full pl-11 sm:pl-14 pr-11 sm:pr-14 py-4 sm:py-[18px] bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#C9A24A]/50 transition-all backdrop-blur-sm" />
            {search && <button onClick={()=>setSearch("")} className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"><X className="w-4 h-4" /></button>}
          </div>
          {/* Popular tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-gray-500 text-xs">Popular:</span>
            {["Real Estate","Private Equity","AI & Technology","Market Insights","UAE","ESG"].map(tag=>(
              <button key={tag} onClick={()=>rawCategories.find(c=>c.label===tag)?toggleCategory(tag):toggleTag(tag)}
                className="text-xs px-3.5 py-1.5 border border-white/10 text-gray-400 hover:border-[#C9A24A]/50 hover:text-[#C9A24A] hover:bg-[#C9A24A]/5 transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAIN LAYOUT ══ */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-6 sm:py-10">
        <div className="flex gap-6 lg:gap-8 items-start">

          {/* Sidebar desktop */}
          <div className="hidden lg:block w-64 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-4">
            <Sidebar />
          </div>

          {/* Content */}
          <div ref={resultsRef} className="flex-1 min-w-0 w-full">

            {/* Mobile filter bar */}
            <div className="lg:hidden flex items-center gap-2 mb-4">
              <button onClick={()=>setMobileDrawerOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2.5 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:border-[#C9A24A]/50 transition-all shrink-0">
                <Filter className="w-4 h-4" /> Filters
                {activeFilterCount>0&&<span className="bg-[#C9A24A] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center">{activeFilterCount}</span>}
              </button>
              <div className="flex-1 relative min-w-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}}
                  placeholder="Search…" className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#C9A24A]/60 transition-all shadow-sm" />
              </div>
            </div>

            {/* ── FEATURED ── */}
            {!loading && featured && filtered.length > 0 && (
              <section className="mb-8 sm:mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#C9A24A]" /> Featured Article
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <article className="group bg-white border border-gray-200 hover:border-[#C9A24A]/30 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-[48%] relative h-56 sm:h-64 md:h-auto md:min-h-[320px] shrink-0 overflow-hidden">
                      <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px)100vw,50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-black/20" />
                      <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 border backdrop-blur-sm ${CAT_COLORS[featured.category]||"bg-white/90 text-gray-700 border-gray-200"}`}>{featured.category}</span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                        <DifficultyBadge level={featured.difficulty||"Beginner"} />
                        <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1"><Eye className="w-3 h-3" /> {(featured.views||0).toLocaleString()}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-[#C9A24A] transition-colors">{featured.title}</h2>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 line-clamp-3 md:line-clamp-none">{featured.excerpt}</p>
                      <div className="hidden sm:flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                        {(featured.tags||[]).map(tag=>(
                          <span key={tag} className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-500">{tag}</span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${featured.author?.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{featured.author?.initials}</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{featured.author?.name}</p>
                            <p className="text-xs text-gray-400">{featured.author?.role} · {featured.date}</p>
                          </div>
                        </div>
                        <Link href={`/insights/${featured.slug}`}
                          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#07111D] hover:bg-[#C9A24A] text-white hover:text-[#07111D] text-sm font-bold transition-all duration-200 shadow-lg w-full sm:w-auto justify-center">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            )}

            {/* ── TOOLBAR ── */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 py-3 border-t border-b border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-500"><span className="font-bold text-gray-900">{rest.length}</span> articles</span>
                {activeFilterCount>0&&(
                  <button onClick={clearAll} className="flex items-center gap-1 text-xs text-red-500 font-medium bg-red-50 px-2.5 py-1.5 border border-red-100">
                    <X className="w-3 h-3" /> Clear ({activeFilterCount})
                  </button>
                )}
                {selectedCategories.slice(0,2).map(c=>(
                  <span key={c} className="flex items-center gap-1 text-[10px] bg-[#C9A24A]/10 text-[#C9A24A] border border-[#C9A24A]/20 px-2 py-1 font-medium max-w-[100px] truncate">
                    {c}<button onClick={()=>toggleCategory(c)} className="shrink-0"><X className="w-2.5 h-2.5" /></button>
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <div className="flex bg-white border border-gray-200 overflow-hidden shadow-sm">
                  <button onClick={()=>setViewMode("grid")} className={`p-2.5 transition-colors ${viewMode==="grid"?"bg-[#07111D] text-white":"text-gray-400 hover:text-gray-700"}`} aria-label="Grid view"><Grid3X3 className="w-4 h-4" /></button>
                  <button onClick={()=>setViewMode("list")} className={`p-2.5 transition-colors ${viewMode==="list"?"bg-[#07111D] text-white":"text-gray-400 hover:text-gray-700"}`} aria-label="List view"><List className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* ── ARTICLES ── */}
            {loading ? (
              <div className={`grid gap-4 sm:gap-5 ${viewMode==="grid"?"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3":"grid-cols-1"}`}>
                {Array.from({length:3}).map((_,i)=><SkeletonCard key={i} />)}
              </div>
            ) : paginated.length===0 ? (
              <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 flex items-center justify-center mb-4 sm:mb-5">
                  <Search className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-400 text-sm mb-5 sm:mb-6 max-w-xs">Try adjusting your search or removing some filters.</p>
                <button onClick={clearAll} className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#07111D] text-white text-sm font-bold hover:bg-[#C9A24A] hover:text-[#07111D] transition-all duration-200">Clear All Filters</button>
              </div>
            ) : (
              <div className={viewMode==="grid"?"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5":"flex flex-col gap-3 sm:gap-4"}>
                {paginated.map(a=>viewMode==="grid"?<GridCard key={a.slug} article={a}/>:<ListCard key={a.slug} article={a}/>)}
              </div>
            )}

            {/* ── PAGINATION ── */}
            {!loading && totalPages>1 && (
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
                <button onClick={()=>{setPage(p=>Math.max(1,p-1));resultsRef.current?.scrollIntoView({behavior:"smooth",block:"start"});}}
                  disabled={page===1} className="p-2.5 border border-gray-200 text-gray-500 hover:border-[#C9A24A]/50 hover:text-[#C9A24A] disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({length:totalPages}).map((_,i)=>(
                  <button key={i} onClick={()=>{setPage(i+1);resultsRef.current?.scrollIntoView({behavior:"smooth",block:"start"});}}
                    className={`w-9 h-9 sm:w-10 sm:h-10 text-xs sm:text-sm font-semibold transition-all border shadow-sm ${page===i+1?"bg-[#07111D] text-white border-[#07111D]":"bg-white text-gray-600 border-gray-200 hover:border-[#C9A24A]/50 hover:text-[#C9A24A]"}`}>
                    {i+1}
                  </button>
                ))}
                <button onClick={()=>{setPage(p=>Math.min(totalPages,p+1));resultsRef.current?.scrollIntoView({behavior:"smooth",block:"start"});}}
                  disabled={page===totalPages} className="p-2.5 border border-gray-200 text-gray-500 hover:border-[#C9A24A]/50 hover:text-[#C9A24A] disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ══ PREMIUM CTA ══ */}
      <section className="bg-[#07111D] py-20 mx-4 md:mx-8 mb-10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(#C9A24A 1px,transparent 1px)",backgroundSize:"28px 28px"}} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent" />
        <div className="relative max-w-[900px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C9A24A]/10 border border-[#C9A24A]/20 text-[#C9A24A] text-xs font-semibold tracking-widest uppercase px-4 py-2 mb-6">
            <Crown className="w-3.5 h-3.5" /> Premium Access
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Unlock Exclusive<br /><span className="bg-gradient-to-r from-[#C9A24A] to-[#E6C879] bg-clip-text text-transparent">Investment Intelligence</span>
          </h2>
          <p className="text-gray-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Get unlimited access to premium research, templates, and expert consultancy resources curated for serious investors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {icon:<FileText className="w-5 h-5"/>,title:"Premium Articles",desc:"In-depth analysis & research"},
              {icon:<Users className="w-5 h-5"/>,title:"Expert Consultancy",desc:"Direct access to our team"},
              {icon:<Star className="w-5 h-5"/>,title:"Market Reports",desc:"Exclusive sector insights"},
            ].map(b=>(
              <div key={b.title} className="bg-white/5 border border-white/10 p-5 text-left hover:border-[#C9A24A]/30 transition-colors">
                <div className="text-[#C9A24A] mb-3">{b.icon}</div>
                <p className="text-white text-sm font-semibold mb-1">{b.title}</p>
                <p className="text-gray-500 text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/invest-with-fortress" className="px-8 py-4 bg-[#C9A24A] hover:bg-[#E6C879] text-[#07111D] font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5">Become a Member</Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-all hover:bg-white/5">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      {/* ══ MOBILE DRAWER ══ */}
      {mobileDrawerOpen&&(
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={()=>setMobileDrawerOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[320px] bg-[#F8F9FB] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#C9A24A]" /> Filters
                {activeFilterCount>0&&<span className="bg-[#C9A24A] text-white text-[10px] font-bold px-2 py-0.5">{activeFilterCount}</span>}
              </h2>
              <div className="flex items-center gap-2">
                {activeFilterCount>0&&<button onClick={clearAll} className="text-xs text-red-500 font-medium">Clear all</button>}
                <button onClick={()=>setMobileDrawerOpen(false)} className="p-1.5 hover:bg-gray-100 text-gray-500 transition-colors"><X className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4"><Sidebar /></div>
            <div className="sticky bottom-0 p-4 bg-white border-t border-gray-200">
              <button onClick={()=>setMobileDrawerOpen(false)}
                className="w-full py-3 bg-[#07111D] text-white font-bold text-sm hover:bg-[#C9A24A] hover:text-[#07111D] transition-all">
                Show {filtered.length} Articles
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
