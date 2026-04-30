"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Star,
  Check,
  Shield,
  Truck,
  Home,
  Building2,
  Package,
  Boxes,
  Map,
  Quote,
  Plus,
  Calendar,
  Clock,
  MessageCircle,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const PHONE = "0430 504 119";
const PHONE_LINK = "tel:0430504119";

export default function MoushsPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
  }, [navOpen]);

  return (
    <main className="overflow-x-hidden">
      {/* ============== NAV ============== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F0E4]/85 backdrop-blur-xl border-b border-[#2A1F1A]/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[76px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#FFFCF5] border border-[#2A1F1A]/10 shadow-sm group-hover:shadow-md transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/moush-logo.png"
                alt="Moush's Removals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden xs:flex flex-col leading-tight">
              <span className="font-serif text-[17px] sm:text-[19px] font-semibold tracking-tight">
                Moush&apos;s
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#4A3A30]">
                Removals
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
            <a href="#estimate" className="hover:text-[#B8462E] transition-colors">Quote</a>
            <a href="#services" className="hover:text-[#B8462E] transition-colors">Services</a>
            <a href="#difference" className="hover:text-[#B8462E] transition-colors">Why us</a>
            <a href="#reviews" className="hover:text-[#B8462E] transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-[#B8462E] transition-colors">Areas</a>
            <a href="#faq" className="hover:text-[#B8462E] transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PHONE_LINK}
              className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-full border border-[#2A1F1A]/15 text-sm font-semibold hover:border-[#2A1F1A] transition"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href="#estimate"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#B8462E] text-[#FFF8EC] px-4 h-10 rounded-full text-sm font-semibold hover:bg-[#8F3320] transition shadow-md"
            >
              Free quote
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-[#2A1F1A]/10 bg-[#FFFCF5]"
              aria-label="Menu"
            >
              {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[68px] bg-[#F7F0E4] transition-all duration-300 ${
            navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-5 py-8 flex flex-col gap-1 text-2xl font-serif">
            {[
              { href: "#estimate", label: "Get a quote" },
              { href: "#services", label: "Services" },
              { href: "#difference", label: "Why us" },
              { href: "#reviews", label: "Reviews" },
              { href: "#areas", label: "Areas" },
              { href: "#faq", label: "FAQ" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setNavOpen(false)}
                className="py-4 border-b border-[#2A1F1A]/10 flex items-center justify-between"
              >
                {l.label}
                <ArrowRight className="w-5 h-5 text-[#B8462E]" />
              </a>
            ))}
            <a
              href={PHONE_LINK}
              className="mt-6 bg-[#B8462E] text-[#FFF8EC] py-4 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE}
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Marquee />
      <TrustStrip />
      <Estimator />
      <Services />
      <Difference />
       <Story />
      <Timeline />
      <Testimonials />
      <Areas />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

/* ================================================== HERO */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-[100px] sm:pt-[120px] lg:pt-[140px] pb-16 sm:pb-24 lg:pb-32 grain"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[#D4A24C]/12 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-[#B8462E]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Eyebrow chip */}
        <Reveal>
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFCF5] border border-[#2A1F1A]/10 text-[11px] sm:text-xs font-medium">
              <span className="flex gap-0.5 text-[#D4A24C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </span>
              <span className="hidden sm:inline">5-star · Google · OneFlare · findamover</span>
              <span className="sm:hidden">5-star rated</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#4A3A30]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8462E] animate-pulse" />
              Booking moves this week
            </div>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.05}>
          <h1
            className="font-serif font-semibold tracking-tight leading-[0.98] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
          >
            Your move,
            <br />
            <span className="italic text-[#B8462E]">fixed-price.</span>{" "}
            <span className="relative inline-block whitespace-nowrap">
              No surprises.
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                style={{ height: "clamp(8px, 1.5vw, 14px)" }}
              >
                <path
                  d="M2 8 Q 75 2, 150 6 T 298 4"
                  stroke="#D4A24C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal delay={0.1}>
              <p
                className="text-[#4A3A30] mb-6 sm:mb-8 leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
              >
                Melbourne&apos;s straight-talking removalists. All-inclusive
                quotes, no deposit, no hidden fees — what we quote is what
                you pay.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 sm:mb-10">
                <a href="#estimate" className="btn-primary justify-center">
                  Get my fixed-price quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href={PHONE_LINK} className="btn-ghost justify-center">
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <figure className="border-l-2 border-[#B8462E] pl-4 sm:pl-5 max-w-md">
                <Quote className="w-4 h-4 text-[#B8462E] mb-2 opacity-60" />
                <blockquote className="font-serif text-base sm:text-lg leading-snug italic">
                  &ldquo;Absolutely sensational service. Fixed price meant we
                  knew what we were up for. Will use again.&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs sm:text-sm text-[#4A3A30]">
                  — Karen Murray · Google ★★★★★
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Photo composition */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[560px] mt-4 lg:mt-0">
            <motion.div
              style={{ y: y1 }}
              className="polaroid absolute top-0 right-4 sm:right-12 lg:right-20 w-[55%] sm:w-[42%] max-w-[280px] rotate-[-4deg] z-10"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#EFE4D0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80"
                  alt="Removalist truck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-2 font-serif italic text-xs sm:text-sm text-[#4A3A30]">
                Move day, Brunswick
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="polaroid absolute top-20 sm:top-24 left-0 sm:left-8 w-[50%] sm:w-[38%] max-w-[260px] rotate-[6deg] z-20"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#EFE4D0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                  alt="Boxes packed"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-2 font-serif italic text-xs sm:text-sm text-[#4A3A30]">
                Packed &amp; labelled
              </div>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="polaroid absolute bottom-0 right-0 sm:right-4 w-[58%] sm:w-[44%] max-w-[300px] rotate-[-2deg] z-30"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#EFE4D0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1558365916-2ca60efde7d6?w=600&q=80"
                  alt="Team loading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-2 font-serif italic text-xs sm:text-sm text-[#4A3A30]">
                Crew on the job
              </div>
            </motion.div>

            {/* Floating chip */}
            <motion.div
              style={{ y: y2 }}
              className="absolute top-6 sm:top-8 left-4 sm:left-0 bg-[#2A1F1A] text-[#FFF8EC] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl rotate-[-6deg] z-40"
            >
              <div className="flex gap-0.5 text-[#D4A24C] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <div className="text-[10px] sm:text-xs font-medium whitespace-nowrap">
                100+ five-star reviews
              </div>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              className="absolute bottom-16 sm:bottom-24 left-2 sm:left-32 bg-[#FFFCF5] border border-[#2A1F1A]/10 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg rotate-[3deg] z-40"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B8462E]" />
                <span className="text-[10px] sm:text-xs font-semibold">
                  No deposit · Pay on the day
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================== MARQUEE */
function Marquee() {
  const items = [
    "Fixed-price quotes",
    "No hidden fees",
    "Fully insured",
    "5-star rated",
    "No deposit needed",
    "Mel ↔ Syd weekly",
    "ASAP service",
    "Pianos &amp; specialty items",
  ];
  const all = [...items, ...items, ...items];

  return (
    <section className="py-5 sm:py-7 bg-[#2A1F1A] text-[#FFF8EC] overflow-hidden border-y border-[#2A1F1A]">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-6 sm:px-8 text-sm sm:text-base">
            <span className="font-serif italic">{t}</span>
            <span className="text-[#D4A24C]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================== TRUST STRIP */
function TrustStrip() {
  const stats = [
    { value: 9, suffix: "+", label: "Years moving Melbourne" },
    { value: 2400, suffix: "+", label: "Successful moves" },
    { value: 100, suffix: "+", label: "Five-star reviews" },
    { value: 50, suffix: "+", label: "Suburbs covered" },
  ];

  return (
    <section
      id="trust"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#2A1F1A] to-[#1F1714] text-[#FFF8EC] relative overflow-hidden"
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[400px] rounded-full bg-[#D4A24C]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4A24C] mb-3 font-semibold">
            Trusted across Melbourne
          </p>
          <h2
            className="text-center font-serif font-semibold mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Hundreds of stress-free moves.{" "}
            <span className="italic text-[#D4A24C]">One promise.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-12">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="text-center">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-xs sm:text-sm text-[#FFF8EC]/60 leading-tight">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[#FFF8EC]/15 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-5 sm:gap-y-6">
            <Badge label="Google" sub="★★★★★" />
            <Badge label="findamover" sub="5-Star" />
            <Badge label="OneFlare" sub="Top Rated" />
            <Badge label="Airtasker" sub="Verified" />
            <div className="col-span-2 sm:col-auto">
              <Badge label="Insured" sub="Comprehensive" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const dur = 1800;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    const r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [started, to]);

  return (
    <div
      ref={ref}
      className="font-serif font-semibold tabular-nums leading-none"
      style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
    >
      {val.toLocaleString()}
      <span className="text-[#D4A24C]">{suffix}</span>
    </div>
  );
}

function Badge({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-base sm:text-lg text-[#FFF8EC] leading-tight">
        {label}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D4A24C]/80 mt-0.5">
        {sub}
      </div>
    </div>
  );
}

/* ================================================== ESTIMATOR */
function Estimator() {
  const [propType, setPropType] = useState("House");
  const [bedrooms, setBedrooms] = useState("1-2");
  const [boxes, setBoxes] = useState("5-10");
  const [stairs, setStairs] = useState(false);
  const [piano, setPiano] = useState(false);
  const [bedAssembly, setBedAssembly] = useState(false);
  const [distance, setDistance] = useState("Metro Melbourne");

  const estimate = useMemo(() => {
    let base = 480;
    if (propType === "House") base += 80;
    if (propType === "Business") base += 220;
    if (propType === "Storage Unit") base -= 60;
    if (bedrooms === "3") base += 220;
    if (bedrooms === "4+") base += 480;
    if (boxes === "10-15") base += 120;
    if (boxes === "15+") base += 280;
    if (stairs) base += 140;
    if (piano) base += 220;
    if (bedAssembly) base += 90;
    if (distance === "Melbourne ↔ Sydney") base += 1600;
    if (distance === "Other interstate") base += 2400;
    const low = Math.round(base * 0.92);
    const high = Math.round(base * 1.12);
    return { low, high };
  }, [propType, bedrooms, boxes, stairs, piano, bedAssembly, distance]);

  return (
    <section id="estimate" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
                Live move estimator
              </p>
              <h2
                className="font-serif font-semibold tracking-tight leading-[1.02] mb-5 sm:mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                See your{" "}
                <span className="italic text-[#B8462E]">all-inclusive</span>{" "}
                price as you build it.
              </h2>
              <p className="text-[#4A3A30] mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                No forms. No waiting. Tap your way through and watch the
                fixed-price range update live.
              </p>
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  "What you see is what you pay",
                  "Includes truck, labour, fuel, GST",
                  "No deposit needed to lock it in",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#B8462E] grid place-items-center">
                      <Check className="w-3 h-3 text-[#FFF8EC]" strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a href={PHONE_LINK} className="btn-primary">
                <Phone className="w-4 h-4" />
                Lock it in — call now
              </a>
            </Reveal>
          </div>

          {/* Right form + price */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="card p-5 sm:p-7 lg:p-8">
                {/* Price panel */}
                <div className="bg-gradient-to-br from-[#2A1F1A] to-[#1F1714] text-[#FFF8EC] rounded-2xl p-5 sm:p-7 mb-6 sm:mb-8 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#D4A24C]/15 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[#B8462E]/15 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D4A24C]">
                        Your fixed range
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#FFF8EC]/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A24C] animate-pulse" />
                        Live
                      </div>
                    </div>
                    <div
                      className="font-serif font-semibold tabular-nums leading-none"
                      style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)" }}
                    >
                      ${estimate.low.toLocaleString()}
                      <span className="text-[#D4A24C] mx-1.5 sm:mx-2">–</span>
                      <span>${estimate.high.toLocaleString()}</span>
                    </div>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#FFF8EC]/70 leading-relaxed">
                      Truck, crew, fuel, blankets &amp; GST — all in. Final
                      price confirmed in a 60-second call.
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-5 sm:space-y-6">
                  <ChoiceRow
                    label="Moving from a"
                    value={propType}
                    options={["House", "Apartment", "Business", "Storage Unit"]}
                    onChange={setPropType}
                  />
                  <ChoiceRow
                    label="How many bedrooms"
                    value={bedrooms}
                    options={["1-2", "3", "4+"]}
                    onChange={setBedrooms}
                  />
                  <ChoiceRow
                    label="How many boxes"
                    value={boxes}
                    options={["5-10", "10-15", "15+"]}
                    onChange={setBoxes}
                  />
                  <ChoiceRow
                    label="Distance"
                    value={distance}
                    options={["Metro Melbourne", "Melbourne ↔ Sydney", "Other interstate"]}
                    onChange={setDistance}
                  />

                  <div>
                    <div className="text-xs sm:text-sm font-semibold mb-3 text-[#4A3A30]">
                      Add-ons
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <Toggle label="Stairs" on={stairs} setOn={setStairs} />
                      <Toggle label="Piano" on={piano} setOn={setPiano} />
                      <Toggle label="Bed assembly" on={bedAssembly} setOn={setBedAssembly} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="text-xs sm:text-sm font-semibold mb-2.5 text-[#4A3A30]">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-3.5 sm:px-4 h-11 rounded-full text-xs sm:text-sm font-medium transition-all ${
              value === opt
                ? "bg-[#B8462E] text-[#FFF8EC] shadow-md"
                : "bg-[#F7F0E4] text-[#2A1F1A] hover:bg-[#EFE4D0] border border-[#2A1F1A]/10"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({
  label,
  on,
  setOn,
}: {
  label: string;
  on: boolean;
  setOn: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => setOn(!on)}
      className={`h-12 px-4 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between gap-2 transition-all ${
        on
          ? "bg-[#B8462E] text-[#FFF8EC] shadow-md"
          : "bg-[#F7F0E4] text-[#2A1F1A] border border-[#2A1F1A]/10 hover:bg-[#EFE4D0]"
      }`}
    >
      <span>{label}</span>
      {on ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4 opacity-60" />}
    </button>
  );
}

/* ================================================== SERVICES */
function Services() {
  const services = [
    {
      icon: Home,
      title: "Furniture removals",
      desc: "Single pieces to whole-home moves. Wrapped, padded, and placed exactly where you want them.",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    },
    {
      icon: Truck,
      title: "Interstate moves",
      desc: "Regular Melbourne ↔ Sydney runs and reliable routes to every capital. Door to door.",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
    },
    {
      icon: Building2,
      title: "Office relocations",
      desc: "Weekend and after-hours moves. IT, workstations, fitouts — minimum disruption to your team.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    },
    {
      icon: Package,
      title: "Packing service",
      desc: "Full pack, partial pack, or just the fragiles. Materials supplied, everything labelled room-by-room.",
      img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80",
    },
    {
      icon: Boxes,
      title: "Storage solutions",
      desc: "Short or long-term storage between moves, settlements, or renovations. Secure and accessible.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    },
    {
      icon: Map,
      title: "Specialty items",
      desc: "Pianos, pool tables, antiques, artwork. The pieces that make every other removalist nervous.",
      img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=80",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
              What we do
            </p>
            <h2
              className="font-serif font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              Six services.{" "}
              <span className="italic text-[#B8462E]">One standard.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="card overflow-hidden h-full flex flex-col group">
                <div className="aspect-[5/3] bg-[#EFE4D0] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#B8462E]/10 grid place-items-center mb-3 sm:mb-4">
                    <s.icon className="w-5 h-5 text-[#B8462E]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl mb-2 font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-[#4A3A30] leading-relaxed flex-1 text-sm sm:text-base">
                    {s.desc}
                  </p>
                  <a
                    href="#estimate"
                    className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8462E] hover:gap-2.5 transition-all"
                  >
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== DIFFERENCE */
function Difference() {
  const pillars = [
    {
      icon: Shield,
      title: "Experienced",
      desc: "Founded in 2017 — what started as a small family operation now moves thousands of Melbourne homes and offices.",
    },
    {
      icon: Check,
      title: "Affordable",
      desc: "All-inclusive fixed pricing. Truck, fuel, crew, blankets, GST — all in. No fuel surcharges, no minimum-hour traps.",
    },
    {
      icon: Clock,
      title: "Reliable",
      desc: "We text 45 minutes before arrival. We turn up when we said we would. Promise made, promise kept.",
    },
    {
      icon: MessageCircle,
      title: "Honest",
      desc: "Talk to Moush directly. No call centres, no chatbots. Honesty and transparency from quote to keys.",
    },
  ];

  return (
    <section
      id="difference"
      className="py-16 sm:py-24 lg:py-32 bg-[#FFFCF5] border-y border-[#2A1F1A]/8"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
                The Moush&apos;s difference
              </p>
              <h2
                className="font-serif font-semibold leading-[1.02] tracking-tight mb-5 sm:mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Built on the boring stuff.{" "}
                <span className="italic text-[#B8462E]">Done brilliantly.</span>
              </h2>
              <p className="text-[#4A3A30] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Removalists shouldn&apos;t need a thousand-word marketing
                pitch. We turn up when we said we would, we charge what we
                quoted, and we don&apos;t scratch the floors. That&apos;s it.
                That&apos;s the whole thing.
              </p>
              <a href="#estimate" className="btn-primary">
                See it for yourself
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="card p-5 sm:p-6 h-full">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#B8462E] grid place-items-center mb-3 sm:mb-4">
                    <p.icon className="w-5 h-5 text-[#FFF8EC]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl mb-2 font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-[#4A3A30] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================== STORY */
function Story() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#D4A24C]/10 blur-[120px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                <div className="polaroid w-full max-w-[420px] mx-auto rotate-[-2deg]">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#EFE4D0]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80"
                      alt="Moush's Removals truck"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-3 font-serif italic text-sm text-[#4A3A30]">
                    Moush&apos;s Removals · Melbourne, since 2017
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#2A1F1A] text-[#FFF8EC] rounded-2xl px-4 py-3 shadow-xl rotate-[4deg]">
                  <div className="font-serif text-2xl sm:text-3xl font-semibold leading-none">
                    Est. <span className="text-[#D4A24C]">2017</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider opacity-70 mt-1">
                    Family-run
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
                Our story
              </p>
              <h2
                className="font-serif font-semibold leading-[1.02] tracking-tight mb-5 sm:mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Started small.{" "}
                <span className="italic text-[#B8462E]">Stayed honest.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#4A3A30]">
                <p>
                  Moush&apos;s Removals began in 2017 with a simple mission:
                  give Melbourne residents and businesses a moving service
                  they could actually trust. What started as a small family
                  operation has grown into one of the city&apos;s most
                  respected removal companies.
                </p>
                <p>
                  Thousands of moves later, the formula hasn&apos;t changed.
                  Quote a fair fixed price. Turn up when we said we would.
                  Treat your gear like our own. Every member of the team is
                  carefully selected and trained — from the movers and
                  logistics specialists to the people answering the phone.
                </p>
                <p className="font-serif italic text-xl sm:text-2xl text-[#2A1F1A]">
                  Reliability. Integrity. Excellence. Every move.
                </p>
              </div>
              <div className="mt-7 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                {[
                  { v: "9+", l: "Years" },
                  { v: "2,400+", l: "Moves" },
                  { v: "5★", l: "Rated" },
                ].map((s) => (
                  <div key={s.l} className="border-l-2 border-[#B8462E] pl-3">
                    <div className="font-serif text-2xl sm:text-3xl font-semibold leading-none">
                      {s.v}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#4A3A30] mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================== TIMELINE */
function Timeline() {
  const steps = [
    { num: "01", title: "Tap or call", desc: "Use the live estimator or ring Moush directly. 60 seconds, fixed price locked." },
    { num: "02", title: "We confirm the day", desc: "Email confirmation with your crew, truck size, and arrival window. No deposit needed." },
    { num: "03", title: "45-minute heads-up", desc: "On move day, we text 45 minutes before we pull up. So you know exactly when we're coming." },
    { num: "04", title: "Wrap, lift, load", desc: "Blankets on the timber, straps on the fragile gear. Stairs, hallways, lifts — handled." },
    { num: "05", title: "Drive, unload, place", desc: "Items go where you want them — not dumped at the door. Beds reassembled if you'd like." },
    { num: "06", title: "Settle in", desc: "Same fixed price you were quoted. No paperwork ambushes. We're gone, you're home." },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
              Move day
            </p>
            <h2
              className="font-serif font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              From quote to keys —{" "}
              <span className="italic text-[#B8462E]">six steps, no friction.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <div className="card p-5 sm:p-7 h-full relative overflow-hidden">
                <div className="absolute -top-2 -right-1 font-serif text-[80px] sm:text-[120px] text-[#B8462E]/8 font-bold leading-none select-none pointer-events-none">
                  {s.num}
                </div>
                <div className="relative">
                  <div className="text-xs sm:text-sm font-semibold text-[#B8462E] mb-2 sm:mb-3 tracking-wider">
                    Step {s.num}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-[#4A3A30] leading-relaxed text-sm sm:text-base">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== TESTIMONIALS */
function Testimonials() {
  const reviews = [
    { name: "Karen Murray", source: "Google", rotate: -2, text: "Absolutely sensational service. 3 men were on time, respectful and happy in their job. We were happy with the fixed price as we knew what we were up for. Would highly recommend. Will use again in the future." },
    { name: "Lisa Barnes", source: "Google", rotate: 1.5, text: "Moush's men were fantastic. They text me 45 minutes prior to let me know they would be on time; worked efficiently; and placed items where we requested with no fuss. I have engaged their services for work on at least 8 other occasions and have never had any problems." },
    { name: "Karen Stone", source: "Google", rotate: -1, text: "From the moment I spoke with Moush on the phone until the truck was unloaded this was a great moving experience. His team were on time, courteous, respectful of my belongings and worked really hard while dealing with a challenging location." },
    { name: "Trevor Molloy", source: "Google", rotate: 2, text: "Service was exactly as promised. 3 removalists & 2 trucks. On time and very careful with some special items. Friendly and hard working despite the hot day. Fixed price meant easy budgeting." },
    { name: "Heather Allen", source: "Google", rotate: -1.5, text: "Highly recommend Moush's Removals. The professionalism and knowledge shown by the boys was outstanding. I will definitely be using them again for all my furniture removal needs!" },
  ];

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 lg:py-32 bg-[#FFFCF5] border-y border-[#2A1F1A]/8 relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#D4A24C]/10 blur-[100px]" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
              Real Melbourne moves
            </p>
            <h2
              className="font-serif font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              The reviews{" "}
              <span className="italic text-[#B8462E]">do the selling.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <figure
                className="bg-[#F7F0E4] border border-[#2A1F1A]/10 rounded-2xl p-5 sm:p-7 h-full hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ transform: `rotate(${r.rotate}deg)` }}
              >
                <div className="flex gap-0.5 text-[#D4A24C] mb-3 sm:mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#B8462E]/30 mb-2 sm:mb-3" />
                <blockquote className="font-serif text-base sm:text-[17px] leading-relaxed mb-4 sm:mb-5 italic">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#2A1F1A]/10">
                  <div className="font-semibold text-sm sm:text-base">{r.name}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#4A3A30]">
                    via {r.source}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== AREAS */
function Areas() {
  const areas = [
    { region: "Inner City", tag: "Lanes & high-rises sorted", suburbs: ["Fitzroy", "Carlton", "Richmond", "South Yarra", "St Kilda", "Collingwood", "Brunswick", "Port Melbourne"] },
    { region: "Eastern Suburbs", tag: "Box Hill to Ringwood", suburbs: ["Hawthorn", "Camberwell", "Kew", "Box Hill", "Doncaster", "Balwyn", "Blackburn", "Mitcham"] },
    { region: "Northern Suburbs", tag: "Preston to Eltham", suburbs: ["Northcote", "Thornbury", "Preston", "Reservoir", "Ivanhoe", "Bundoora", "Eltham", "Greensborough"] },
    { region: "South-East Suburbs", tag: "Brighton to Berwick", suburbs: ["Brighton", "Clayton", "Mulgrave", "Berwick"] },
    { region: "Western Suburbs", tag: "Werribee corridor", suburbs: ["Point Cook", "Williamstown", "Newport", "Yarraville"] },
    { region: "Interstate", tag: "Mel ↔ Syd weekly", suburbs: ["Sydney", "Brisbane", "Adelaide", "Canberra"] },
  ];

  return (
    <section id="areas" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
              Where we work
            </p>
            <h2
              className="font-serif font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              Every Melbourne suburb.{" "}
              <span className="italic text-[#B8462E]">Most of Australia.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {areas.map((a, i) => (
            <Reveal key={a.region} delay={i * 0.05}>
              <div className="card p-5 sm:p-7 h-full">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Map className="w-4 h-4 text-[#B8462E]" />
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#B8462E]">
                    {a.tag}
                  </p>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">
                  {a.region}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {a.suburbs.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 sm:px-3 py-1 rounded-full bg-[#F7F0E4] text-[11px] sm:text-xs font-medium text-[#4A3A30] border border-[#2A1F1A]/8"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center mt-8 sm:mt-10 text-sm sm:text-base text-[#4A3A30]">
            Don&apos;t see your suburb?{" "}
            <a
              href={PHONE_LINK}
              className="text-[#B8462E] font-semibold underline-offset-4 hover:underline"
            >
              Call {PHONE}
            </a>{" "}
            — odds are we&apos;re there too.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== FAQ */
function Faq() {
  const items = [
    { q: "Do you charge by the hour or fixed price?", a: "Fixed price, every time. We give you one number that includes the truck, crew, fuel, blankets, and GST. No clock-watching, no minimum-hour traps, no fuel surcharges." },
    { q: "Do I need to pay a deposit?", a: "No. Your quote is locked in with a phone call. You pay on the day, after the move is complete and you're happy." },
    { q: "Are my belongings insured?", a: "Yes — comprehensive transit insurance covers your goods from the first lift to final placement at your new address." },
    { q: "Can you move pianos and other specialty items?", a: "Yes. Pianos, pool tables, antique furniture, artwork, and oversized items are all in our wheelhouse. Just let us know in your quote." },
    { q: "How much notice do you need?", a: "Most metro moves we can do within 48 hours. ASAP same-day moves are available subject to availability — give us a ring and we'll see what we can do." },
    { q: "Do you do interstate moves?", a: "Regularly. We run Melbourne ↔ Sydney weekly and cover every other capital and regional centre. Interstate gets the same fixed-price treatment as a local move." },
    { q: "What if I need to cancel or reschedule?", a: "No drama. With reasonable notice you can shift your move date or cancel without penalty. We're not in the business of charging cancellation fees." },
    { q: "Will you assemble and disassemble furniture?", a: "Yes. Beds, flat-pack, modular sofas — happy to take it apart at the start and put it back together at the end. Just flag it in your quote so we bring the tools." },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 lg:py-32 bg-[#FFFCF5] border-y border-[#2A1F1A]/8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B8462E] mb-3 font-semibold">
              Plain answers
            </p>
            <h2
              className="font-serif font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              The questions{" "}
              <span className="italic text-[#B8462E]">everyone asks.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 min-h-[60px]"
                >
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-semibold pr-2">
                    {it.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full bg-[#B8462E]/10 grid place-items-center transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4 text-[#B8462E]" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-[#4A3A30] leading-relaxed text-sm sm:text-base">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== FINAL CTA */
function FinalCta() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-[#B8462E] via-[#C97B5C] to-[#D4A24C]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-[#FFF8EC]">
        <Reveal>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 opacity-80">
            Ready when you are
          </p>
          <h2
            className="font-serif font-semibold leading-[1.02] tracking-tight mb-5 sm:mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Let&apos;s get you{" "}
            <span className="italic">moved.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            One phone call. Fixed price. No deposit. Talk to Moush directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#2A1F1A] text-[#FFF8EC] px-6 sm:px-7 py-4 rounded-full font-semibold hover:bg-black transition shadow-xl min-h-[52px]"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE}
            </a>
            <a
              href="#estimate"
              className="!bg-[#FFF8EC] !text-[#2A1F1A] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-full font-semibold hover:!bg-white transition min-h-[52px]"
            >
              Get a free quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-8 gap-y-3 text-xs sm:text-sm opacity-80">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No deposit</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No hidden fees</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Fully insured</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> 5★ rated</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== FOOTER */
function Footer() {
  return (
    <footer className="bg-[#2A1F1A] text-[#FFF8EC]/80 pt-14 sm:pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#FFFCF5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/moush-logo.png"
                  alt="Moush's Removals"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl text-[#FFF8EC] font-semibold">
                Moush&apos;s Removals
              </span>
            </div>
            <p className="leading-relaxed mb-5 sm:mb-6 max-w-md text-sm sm:text-base">
              Melbourne&apos;s straight-talking furniture removalists. Fixed
              price, no surprises, every move.
            </p>
            <div className="flex gap-0.5 text-[#D4A24C] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-[#FFF8EC]/60">
              5-star rated on Google, OneFlare &amp; findamover.com.au
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-base sm:text-lg text-[#FFF8EC] mb-3 sm:mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-[#D4A24C]">Furniture removals</a></li>
              <li><a href="#services" className="hover:text-[#D4A24C]">Interstate moves</a></li>
              <li><a href="#services" className="hover:text-[#D4A24C]">Office relocations</a></li>
              <li><a href="#services" className="hover:text-[#D4A24C]">Packing service</a></li>
              <li><a href="#services" className="hover:text-[#D4A24C]">Storage solutions</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-serif text-base sm:text-lg text-[#FFF8EC] mb-3 sm:mb-4 font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A24C] flex-shrink-0" />
                <a href={PHONE_LINK} className="hover:text-[#D4A24C]">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Map className="w-4 h-4 text-[#D4A24C] flex-shrink-0" />
                <span>Melbourne, VIC</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#D4A24C] flex-shrink-0" />
                <span>Mon–Sat · ASAP service</span>
              </li>
            </ul>
            <a href="#estimate" className="btn-primary mt-5 sm:mt-6 !text-sm">
              Get a quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-[#FFF8EC]/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#FFF8EC]/50 text-center sm:text-left">
          <p>© 2026 Moush&apos;s Removals. All rights reserved.</p>
          <p>
            Crafted by{" "}
            <a
              href="https://veleria.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A24C] hover:text-[#FFF8EC] transition"
            >
              Veleria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}