"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Phone, ArrowRight, Star, Check, Shield, Truck, Home, Building2, Package,
  Boxes, Quote, Plus, Calendar, Clock, MessageCircle, Sparkles,
  Zap, ChevronLeft, ChevronRight, Search, MapPin,
  CheckCircle2, Activity, DollarSign, Wrench, X,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";

const PHONE = "0430 504 119";
const PHONE_LINK = "tel:0430504119";

// === COLORS (for reference) ===
// #0B1F3A — Deep navy
// #E63946 — Vivid red (Moush's brand)
// #FFD60A — Electric yellow (alerts/energy)
// #FAFAF7 — Warm white
// #0A0A0A — Near-black

export default function MoushsPage() {

  return (
    <main className="overflow-x-hidden bg-white text-[#0A0A0A]">
      <Nav />

      <Hero />
      <TickerBar />
      <Awards />
      <Estimator />
      <Services />
      <Difference />
      <Timeline />
      <Comparison />
      <Schedule />
      <Story />
      <Gallery />
      <Testimonials />
      <Areas />
      <Faq />
      <FinalCta />
      <Footer />

      {/* Floating mobile call button */}
      <a
        href={PHONE_LINK}
        className="fixed bottom-5 right-5 sm:hidden z-40 bg-[#E63946] text-white rounded-full shadow-2xl px-5 py-3.5 flex items-center gap-2 font-bold text-sm border-4 border-white"
      >
        <Phone className="w-4 h-4" />
        Call Moush
      </a>
    </main>
  );
}

/* ================================================== HERO ================================================== */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yReel = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-[88px] sm:pt-[110px] lg:pt-[130px] pb-10 sm:pb-16 lg:pb-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full bg-[#E63946]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] rounded-full bg-[#FFD60A]/15 blur-[100px]" />
      <div className="absolute top-1/3 left-1/3 w-[40vw] max-w-[400px] h-[40vw] max-h-[400px] rounded-full bg-[#0B1F3A]/5 blur-[120px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top tag */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6 sm:mb-10 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1F3A] text-white text-[11px] font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] animate-pulse" />
              Booking moves this week
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold">
              <span className="flex gap-0.5 text-[#E63946]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </span>
              <span className="text-[#0A0A0A]">5.0</span>
              <span className="text-[#0A0A0A]/60">·</span>
              <span className="text-[#0A0A0A]/60">100+ reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Massive headline */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h1
                className="font-display font-black tracking-tight leading-[0.95] text-[#0B1F3A]"
                style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
              >
                <span className="block">Your move.</span>
                <span className="block">
                  <span className="text-[#E63946]">Fixed price.</span>
                </span>
                <span className="block relative">
                  Zero{" "}
                  <span className="relative inline-block">
                    surprises.
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 400 20"
                      preserveAspectRatio="none"
                      style={{ height: "clamp(10px, 2vw, 18px)" }}
                    >
                      <path
                        d="M5 14 Q100 4, 200 10 T395 8"
                        stroke="#FFD60A"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 sm:mt-10 text-[#0A0A0A]/70 leading-relaxed max-w-2xl text-lg sm:text-xl lg:text-2xl">
                Melbourne&apos;s straight-talking removalists. <strong className="text-[#0B1F3A]">All-inclusive quotes</strong>. No deposit. What we quote is what you pay — no fuel surcharges, no minimum-hour traps.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="#estimate"
                  className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-white px-6 sm:px-8 h-14 rounded-md font-black uppercase tracking-wide text-sm sm:text-base hover:bg-[#c92a37] transition shadow-lg shadow-[#E63946]/30 group"
                >
                  Get my fixed price
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href={PHONE_LINK}
                  style={{ color: "white" }}
                  className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#0A0A0A] px-6 sm:px-8 h-14 rounded-md font-black uppercase tracking-wide text-sm sm:text-base transition shadow-lg"
                >
                  <Phone className="w-4 h-4" style={{ color: "white" }} />
                  {PHONE}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#0A0A0A]/60">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#E63946]" /> No deposit</span>
                <span>·</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#E63946]" /> Fully insured</span>
                <span>·</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#E63946]" /> ASAP service</span>
              </div>
            </Reveal>
          </div>

          {/* Right: Photo reel + floating chips */}
          <div className="lg:col-span-5 relative h-[480px] sm:h-[560px] lg:h-[680px] mt-6 lg:mt-0">
            <motion.div style={{ y: yReel }} className="relative h-full w-full">
              {/* Card 1 - back */}
              <div className="absolute top-8 right-2 w-[70%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-[6deg] border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80" alt="Move" className="w-full h-full object-cover" />
              </div>

              {/* Card 2 - mid */}
              <div className="absolute top-32 left-0 w-[65%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-[-4deg] border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Boxes" className="w-full h-full object-cover" />
              </div>

              {/* Card 3 - front */}
              <div className="absolute bottom-0 right-4 w-[72%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-[2deg] border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80" alt="Truck" className="w-full h-full object-cover" />
              </div>

              {/* Floating chip - top */}
              <div className="absolute -top-2 -left-2 sm:top-2 sm:-left-4 bg-[#0B1F3A] text-white rounded-2xl px-4 py-3 shadow-2xl rotate-[-6deg] z-30 border-4 border-white">
                <div className="flex gap-0.5 text-[#FFD60A] mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <div className="text-[11px] font-bold whitespace-nowrap">100+ five-star moves</div>
              </div>

              {/* Floating chip - middle */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 bg-[#FFD60A] text-[#0B1F3A] rounded-2xl px-4 py-3 shadow-2xl rotate-[5deg] z-30 border-4 border-white">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span className="text-[11px] font-black uppercase tracking-wider">No deposit</span>
                </div>
              </div>

              {/* Floating chip - bottom */}
              <div className="absolute bottom-12 -left-2 sm:left-4 bg-[#E63946] text-white rounded-2xl px-4 py-3 shadow-2xl rotate-[-3deg] z-30 border-4 border-white">
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-80">Avg quote in</div>
                <div className="font-display font-black text-2xl leading-none">60s</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================== TICKER BAR ================================================== */
function TickerBar() {
  const items = [
    "FIXED-PRICE QUOTES", "NO HIDDEN FEES", "FULLY INSURED", "ASAP SERVICE",
    "MEL ↔ SYD WEEKLY", "PIANOS & SPECIALTY", "100+ FIVE-STAR REVIEWS", "NO DEPOSIT NEEDED",
  ];
  const all = [...items, ...items, ...items];

  return (
    <section className="bg-[#FFD60A] text-[#0B1F3A] py-4 overflow-hidden border-b-4 border-[#0B1F3A] -mt-px">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-6 sm:px-8">
            <span className="font-display font-black text-base sm:text-xl uppercase tracking-tight">{t}</span>
            <span className="text-[#E63946] text-xl">★</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================== AWARDS / STATS ================================================== */
function Awards() {
  const stats = [
    { value: 9, suffix: "+", label: "Years moving Melbourne", icon: Calendar },
    { value: 2400, suffix: "+", label: "Successful moves", icon: Truck },
    { value: 100, suffix: "+", label: "Five-star reviews", icon: Star },
    { value: 50, suffix: "+", label: "Suburbs covered", icon: MapPin },
  ];

  const badges = [
    { name: "Google", sub: "★★★★★ Verified" },
    { name: "OneFlare", sub: "Top Rated" },
    { name: "Airtasker", sub: "Most Hired" },
    { name: "findamover", sub: "5-Star" },
  ];

  return (
    <section className="bg-[#0B1F3A] text-white py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[400px] rounded-full bg-[#E63946]/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[40vw] max-w-[500px] h-[400px] rounded-full bg-[#FFD60A]/10 blur-[100px]" />
      <div className="absolute top-1/2 left-0 w-[40vw] max-w-[400px] h-[300px] rounded-full bg-white/5 blur-[100px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFD60A] mb-3 font-bold">
              Trust the numbers
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Hundreds of stress-free moves.
              <br />
              <span className="text-[#E63946]">One simple promise.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-7 text-center hover:bg-white/10 hover:border-[#FFD60A]/40 transition-all">
                <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFD60A] mx-auto mb-3" />
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-xs sm:text-sm text-white/60 leading-tight font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="pt-10 border-t border-white/15">
            <p className="text-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFD60A] mb-6 font-bold">
              Verified across every platform
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {badges.map((b) => (
                <div key={b.name} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 sm:p-5 text-center hover:border-[#FFD60A]/40 transition">
                  <div className="font-display font-black text-base sm:text-xl text-white">{b.name}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#FFD60A] mt-1 font-bold">{b.sub}</div>
                </div>
              ))}
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
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
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
    <div ref={ref} className="font-display font-black tabular-nums leading-none text-white" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
      {val.toLocaleString()}<span className="text-[#FFD60A]">{suffix}</span>
    </div>
  );
}

/* ================================================== ESTIMATOR ================================================== */
function Estimator() {
  const [propType, setPropType] = useState("House");
  const [bedrooms, setBedrooms] = useState("1-2");
  const [boxes, setBoxes] = useState("5-10");
  const [stairs, setStairs] = useState(false);
  const [piano, setPiano] = useState(false);
  const [bedAssembly, setBedAssembly] = useState(false);
  const [packing, setPacking] = useState(false);
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
    if (packing) base += 380;
    if (distance === "Melbourne ↔ Sydney") base += 1600;
    if (distance === "Other interstate") base += 2400;
    const low = Math.round(base * 0.92);
    const high = Math.round(base * 1.12);
    return { low, high, base };
  }, [propType, bedrooms, boxes, stairs, piano, bedAssembly, packing, distance]);

  // Truck fill % for visual indicator
  const fillPercent = useMemo(() => {
    let p = 20;
    if (bedrooms === "1-2") p += 15;
    if (bedrooms === "3") p += 35;
    if (bedrooms === "4+") p += 55;
    if (boxes === "10-15") p += 8;
    if (boxes === "15+") p += 18;
    return Math.min(p, 100);
  }, [bedrooms, boxes]);

  return (
    <section id="estimate" className="py-16 sm:py-24 lg:py-32 relative bg-[#FAFAF7]">
      <div className="absolute top-1/4 right-0 w-[40vw] max-w-[500px] h-[400px] rounded-full bg-[#E63946]/8 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[40vw] max-w-[400px] h-[300px] rounded-full bg-[#FFD60A]/10 blur-[100px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E63946] text-white text-[11px] font-mono uppercase tracking-wider font-bold mb-5">
                <Activity className="w-3 h-3" />
                Live estimator
              </div>
              <h2
                className="font-display font-black tracking-tight leading-[0.95] text-[#0B1F3A] mb-5 sm:mb-6"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                See your{" "}
                <span className="text-[#E63946]">price</span>{" "}
                update live.
              </h2>
              <p className="text-[#0A0A0A]/70 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-xl">
                No forms. No waiting. Tap your way through and watch the fixed-price range update in real time. Lock it in with a 60-second call.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Truck, crew, fuel, blankets — all in",
                  "What you see is what you pay",
                  "GST inclusive",
                  "No deposit needed to lock it in",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base font-medium">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD60A] grid place-items-center">
                      <Check className="w-3.5 h-3.5 text-[#0B1F3A]" strokeWidth={3} />
                    </span>
                    <span className="text-[#0A0A0A]/80">{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_LINK}
                style={{ color: "white" }}
                className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#0A0A0A] px-6 h-14 rounded-md font-black uppercase tracking-wide text-sm transition shadow-lg"
              >
                <Phone className="w-4 h-4" style={{ color: "white" }} />
                Lock it in — call Moush
              </a>
            </Reveal>
          </div>

          {/* Right form + price */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-white border-2 border-[#0B1F3A] rounded-2xl shadow-2xl overflow-hidden">
                {/* Price panel */}
                <div className="bg-[#0B1F3A] text-white p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#E63946]/15 blur-3xl" />
                  <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#FFD60A]/15 blur-3xl" />

                  <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 items-end">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FFD60A] font-bold">
                          Your fixed-price range
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] animate-pulse" />
                          Live
                        </div>
                      </div>
                      <div className="font-display font-black tabular-nums leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>
                        ${estimate.low.toLocaleString()}
                        <span className="text-[#E63946] mx-2">–</span>
                        <span>${estimate.high.toLocaleString()}</span>
                      </div>
                      <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                        Truck, crew, fuel, blankets &amp; GST — all in. Final locked-in price confirmed in a 60-second call.
                      </p>
                    </div>

                    {/* Truck fill visual */}
                    <div className="relative">
                      <p className="text-[9px] font-mono uppercase tracking-wider text-[#FFD60A] mb-2 font-bold text-center">Truck capacity</p>
                      <div className="relative w-20 h-32 rounded-md border-2 border-white/30 overflow-hidden">
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#E63946] to-[#FFD60A]"
                          animate={{ height: `${fillPercent}%` }}
                          transition={{ duration: 0.5 }}
                        />
                        <Truck className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 text-white/80" />
                      </div>
                      <p className="text-center text-xs font-bold mt-1 text-white">{fillPercent}%</p>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="p-6 sm:p-8 space-y-6">
                  <ChoiceRow label="Moving from a" value={propType} options={["House", "Apartment", "Business", "Storage Unit"]} onChange={setPropType} />
                  <ChoiceRow label="How many bedrooms" value={bedrooms} options={["1-2", "3", "4+"]} onChange={setBedrooms} />
                  <ChoiceRow label="How many boxes" value={boxes} options={["5-10", "10-15", "15+"]} onChange={setBoxes} />
                  <ChoiceRow label="Distance" value={distance} options={["Metro Melbourne", "Melbourne ↔ Sydney", "Other interstate"]} onChange={setDistance} />

                  <div>
                    <div className="text-xs sm:text-sm font-black uppercase tracking-wider mb-3 text-[#0B1F3A]">
                      Add-ons
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <Toggle label="Stairs" on={stairs} setOn={setStairs} />
                      <Toggle label="Piano" on={piano} setOn={setPiano} />
                      <Toggle label="Bed assembly" on={bedAssembly} setOn={setBedAssembly} />
                      <Toggle label="Packing" on={packing} setOn={setPacking} />
                    </div>
                  </div>

                  <a
                    href={PHONE_LINK}
                    style={{ color: "white" }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#c92a37] py-4 rounded-md font-black uppercase tracking-wide text-sm transition shadow-lg shadow-[#E63946]/30 min-h-[52px]"
                  >
                    <Phone className="w-4 h-4" style={{ color: "white" }} />
                    <span style={{ color: "white" }}>Call to lock this price</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceRow({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5 text-[#0B1F3A]">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 h-11 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wide transition-all ${
              value === opt
                ? "bg-[#0B1F3A] text-white shadow-md"
                : "bg-[#FAFAF7] text-[#0B1F3A] hover:bg-[#FFD60A] border-2 border-[#0B1F3A]/15"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, on, setOn }: { label: string; on: boolean; setOn: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setOn(!on)}
      className={`h-12 px-3 rounded-md text-xs font-bold flex items-center justify-between gap-2 transition-all ${
        on
          ? "bg-[#E63946] text-white shadow-md"
          : "bg-[#FAFAF7] text-[#0B1F3A] border-2 border-[#0B1F3A]/15 hover:border-[#0B1F3A]"
      }`}
    >
      <span className="uppercase tracking-wide truncate">{label}</span>
      {on ? <Check className="w-4 h-4 flex-shrink-0" /> : <Plus className="w-4 h-4 opacity-60 flex-shrink-0" />}
    </button>
  );
}

/* ================================================== SERVICES ================================================== */
function Services() {
  const services = [
    { icon: Home, title: "Furniture removals", desc: "Single pieces to whole-home moves. Wrapped, padded, and placed exactly where you want them.", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80", color: "#E63946" },
    { icon: Truck, title: "Interstate moves", desc: "Regular Melbourne ↔ Sydney runs and reliable routes to every capital. Door to door.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80", color: "#0B1F3A" },
    { icon: Building2, title: "Office relocations", desc: "Weekend and after-hours moves. IT, workstations, fitouts — minimum disruption.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", color: "#FFD60A" },
    { icon: Package, title: "Packing service", desc: "Full pack, partial pack, or just the fragiles. Materials supplied, everything labelled.", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80", color: "#E63946" },
    { icon: Boxes, title: "Storage solutions", desc: "Short or long-term storage between moves, settlements, or renos. Secure and accessible.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80", color: "#0B1F3A" },
    { icon: Wrench, title: "Specialty items", desc: "Pianos, pool tables, antiques, artwork. The pieces every other removalist won't touch.", img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=80", color: "#FFD60A" },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              What we do
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              Six services.{" "}
              <span className="text-[#E63946]">One standard.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="bg-white border-2 border-[#0B1F3A]/10 rounded-2xl overflow-hidden h-full flex flex-col group hover:border-[#E63946] hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="aspect-[5/3] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white shadow-lg grid place-items-center" style={{ borderTop: `3px solid ${s.color}` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.color }} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl sm:text-2xl mb-2 font-black text-[#0B1F3A] leading-tight">{s.title}</h3>
                  <p className="text-[#0A0A0A]/65 leading-relaxed flex-1 text-sm">{s.desc}</p>
                  <a href="#estimate" className="mt-5 inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-wide text-[#E63946] hover:gap-2.5 transition-all">
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

/* ================================================== DIFFERENCE ================================================== */
function Difference() {
  const pillars = [
    { icon: Shield, title: "Experienced", desc: "Founded in 2017 — what started as a small family operation now moves thousands of Melbourne homes and offices." },
    { icon: DollarSign, title: "Affordable", desc: "All-inclusive fixed pricing. Truck, fuel, crew, blankets, GST — all in. No fuel surcharges, no minimum-hour traps." },
    { icon: Clock, title: "Reliable", desc: "We text 45 minutes before arrival. We turn up when we said we would. Promise made, promise kept." },
    { icon: MessageCircle, title: "Honest", desc: "Talk to Moush directly. No call centres, no chatbots. Honesty and transparency from quote to keys." },
  ];

  return (
    <section id="difference" className="py-16 sm:py-24 lg:py-32 bg-[#0B1F3A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] max-w-[500px] h-[400px] rounded-full bg-[#E63946]/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[40vw] max-w-[400px] h-[300px] rounded-full bg-[#FFD60A]/12 blur-[100px]" />
      <div className="absolute top-1/2 left-1/4 w-[30vw] max-w-[300px] h-[250px] rounded-full bg-white/5 blur-[80px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFD60A] mb-3 font-bold">
                The Moush&apos;s difference
              </p>
              <h2
                className="font-display font-black leading-[0.95] tracking-tight mb-5 sm:mb-6"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                Built on the boring stuff.{" "}
                <span className="text-[#E63946]">Done brilliantly.</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-7">
                Removalists shouldn&apos;t need a thousand-word marketing pitch. We turn up when we said we would, we charge what we quoted, and we don&apos;t scratch the floors. That&apos;s it.
              </p>
              <a
                href="#estimate"
                className="inline-flex items-center gap-2 bg-[#FFD60A] text-[#0B1F3A] px-6 h-14 rounded-md font-black uppercase tracking-wide text-sm hover:bg-white transition shadow-lg"
              >
                See it for yourself
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-7 h-full hover:bg-white/10 hover:border-[#FFD60A]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#E63946] grid place-items-center mb-4">
                    <p.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl mb-2 font-black">{p.title}</h3>
                  <p className="text-white/65 text-sm sm:text-base leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================== TIMELINE — HORIZONTAL ================================================== */
function Timeline() {
  const steps = [
    { num: "01", title: "Tap or call", desc: "Use the live estimator or ring Moush directly. 60 seconds, fixed price locked.", icon: Phone, img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80" },
    { num: "02", title: "We confirm the day", desc: "Email confirmation with your crew, truck size, and arrival window. No deposit needed.", icon: Calendar, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" },
    { num: "03", title: "45-min heads-up", desc: "On move day, we text 45 minutes before we pull up. So you know exactly when we're coming.", icon: MessageCircle, img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80" },
    { num: "04", title: "Wrap, lift, load", desc: "Blankets on the timber, straps on the fragile gear. Stairs, hallways, lifts — handled.", icon: Boxes, img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80" },
    { num: "05", title: "Drive, unload, place", desc: "Items go where you want them — not dumped at the door. Beds reassembled if you'd like.", icon: Truck, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80" },
    { num: "06", title: "Settle in", desc: "Same fixed price you were quoted. No paperwork ambushes. We're gone, you're home.", icon: Home, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  ];

  return (
    <section id="timeline" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              Move day timeline
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              Quote to keys —{" "}
              <span className="text-[#E63946]">six steps. Zero friction.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <div className="bg-[#FAFAF7] border-2 border-[#0B1F3A]/10 rounded-2xl overflow-hidden h-full hover:border-[#E63946] hover:shadow-2xl transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 sm:p-6 relative">
                  <div className="absolute -top-8 right-5 w-16 h-16 rounded-2xl bg-[#0B1F3A] text-[#FFD60A] grid place-items-center shadow-xl border-4 border-white">
                    <span className="font-display font-black text-2xl">{s.num}</span>
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[#E63946] mb-2">
                    Step {s.num}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl mb-2 font-black text-[#0B1F3A] pr-16">{s.title}</h3>
                  <p className="text-[#0A0A0A]/65 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== COMPARISON TABLE ================================================== */
function Comparison() {
  const rows = [
    { feature: "Fixed price quote", moush: true, typical: "Hourly + extras" },
    { feature: "Deposit required", moush: false, typical: "Usually 30%" },
    { feature: "Fuel surcharge", moush: false, typical: "Common" },
    { feature: "Minimum hours", moush: false, typical: "3-4 hour min" },
    { feature: "45-min arrival heads-up", moush: true, typical: "Rare" },
    { feature: "Blankets & wrapping included", moush: true, typical: "Often extra" },
    { feature: "Pianos, antiques, specialty", moush: true, typical: "Often refused" },
    { feature: "Direct line to owner", moush: true, typical: "Call centre" },
    { feature: "Same-day / ASAP service", moush: true, typical: "Days notice" },
    { feature: "GST included in quote", moush: true, typical: "Often added on" },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              Side-by-side
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              See exactly what makes us{" "}
              <span className="text-[#E63946]">different.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white border-2 border-[#0B1F3A] rounded-2xl overflow-hidden shadow-xl">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[2fr_1fr_1fr] bg-[#0B1F3A] text-white">
              <div className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-mono uppercase tracking-wider opacity-70">
                What you get
              </div>
              <div className="px-3 sm:px-6 py-4 sm:py-5 text-center bg-[#E63946] flex items-center justify-center gap-2">
                <span className="font-display font-black text-sm sm:text-base">MOUSH&apos;S</span>
              </div>
              <div className="px-3 sm:px-6 py-4 sm:py-5 text-center text-xs sm:text-sm font-mono uppercase tracking-wider opacity-70">
                Typical
              </div>
            </div>

            {/* Rows */}
            {rows.map((r, i) => (
              <div
                key={r.feature}
                className={`grid grid-cols-[1fr_auto_auto] sm:grid-cols-[2fr_1fr_1fr] border-t border-[#0B1F3A]/10 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]"}`}
              >
                <div className="px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-bold text-[#0B1F3A]">
                  {r.feature}
                </div>
                <div className="px-3 sm:px-6 py-4 sm:py-5 grid place-items-center bg-[#E63946]/5">
                  {typeof r.moush === "boolean" ? (
                    r.moush ? (
                      <div className="w-8 h-8 rounded-full bg-[#FFD60A] grid place-items-center">
                        <Check className="w-5 h-5 text-[#0B1F3A]" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#0B1F3A] grid place-items-center">
                        <X className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                    )
                  ) : (
                    <span className="text-sm font-bold text-[#E63946]">{r.moush}</span>
                  )}
                </div>
                <div className="px-3 sm:px-6 py-4 sm:py-5 grid place-items-center">
                  {typeof r.typical === "boolean" ? (
                    r.typical ? (
                      <Check className="w-5 h-5 text-[#0A0A0A]/40" />
                    ) : (
                      <X className="w-5 h-5 text-[#0A0A0A]/40" />
                    )
                  ) : (
                    <span className="text-xs sm:text-sm text-[#0A0A0A]/60 text-center">{r.typical}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="bg-[#FFD60A] px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-[#0B1F3A]">
              <p className="font-display font-black text-base sm:text-lg text-[#0B1F3A] text-center sm:text-left">
                The difference is the price you pay at the end of the day.
              </p>
              <a
                href="#estimate"
                style={{ color: "white" }}
                className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#0A0A0A] px-5 h-12 rounded-md font-black uppercase tracking-wide text-xs sm:text-sm transition shadow-lg"
              >
                <span style={{ color: "white" }}>Get my quote</span>
                <ArrowRight className="w-4 h-4" style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== SCHEDULE ================================================== */
function Schedule() {
  // Generate next 4 weeks of Mel-Syd departures
  const departures = useMemo(() => {
    const result: { date: Date; dir: "MEL→SYD" | "SYD→MEL"; spotsLeft: number }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 28; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      const day = d.getDay();
      // MEL→SYD on Mon/Wed/Fri, SYD→MEL on Tue/Thu/Sat
      if (day === 1 || day === 3 || day === 5) {
        result.push({ date: new Date(d), dir: "MEL→SYD", spotsLeft: Math.max(1, 5 - (i % 5)) });
      } else if (day === 2 || day === 4 || day === 6) {
        result.push({ date: new Date(d), dir: "SYD→MEL", spotsLeft: Math.max(1, 5 - (i % 5)) });
      }
    }
    return result;
  }, []);

  const [filter, setFilter] = useState<"all" | "MEL→SYD" | "SYD→MEL">("all");
  const filtered = filter === "all" ? departures : departures.filter((d) => d.dir === filter);

  return (
    <section id="schedule" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
                Mel ↔ Syd run schedule
              </p>
              <h2
                className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                Next 4 weeks.{" "}
                <span className="text-[#E63946]">Real availability.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#0A0A0A]/70 leading-relaxed">
                Regular runs three times a week each way. Lock your spot — call us with a date and the price is yours.
              </p>
            </div>

            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              {[
                { v: "all" as const, l: "All" },
                { v: "MEL→SYD" as const, l: "MEL → SYD" },
                { v: "SYD→MEL" as const, l: "SYD → MEL" },
              ].map((f) => (
                <button
                  key={f.v}
                  onClick={() => setFilter(f.v)}
                  className={`px-4 h-11 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wide transition ${
                    filter === f.v
                      ? "bg-[#0B1F3A] text-white shadow-md"
                      : "bg-[#FAFAF7] text-[#0B1F3A] border-2 border-[#0B1F3A]/15 hover:border-[#0B1F3A]"
                  }`}
                >
                  {f.l}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.slice(0, 12).map((dep, i) => {
            const isHot = dep.spotsLeft <= 2;
            const dateStr = dep.date.toLocaleDateString("en-AU", { day: "numeric", month: "short" });
            const dayStr = dep.date.toLocaleDateString("en-AU", { weekday: "short" });
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div
                  className={`relative bg-white border-2 rounded-xl p-4 sm:p-5 h-full hover:shadow-2xl transition-all group ${
                    isHot ? "border-[#E63946]" : "border-[#0B1F3A]/15 hover:border-[#0B1F3A]"
                  }`}
                >
                  {isHot && (
                    <div className="absolute -top-2 -right-2 bg-[#FFD60A] text-[#0B1F3A] px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border-2 border-white">
                      ⚡ Going fast
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/50">{dayStr}</div>
                      <div className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A] leading-none mt-1">{dateStr}</div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-bold ${
                        dep.dir === "MEL→SYD" ? "bg-[#E63946] text-white" : "bg-[#0B1F3A] text-white"
                      }`}
                    >
                      {dep.dir}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#0B1F3A]/10">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/50 mb-1">Spots left</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 flex-1 rounded ${idx < dep.spotsLeft ? "bg-[#FFD60A]" : "bg-[#0B1F3A]/10"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <a
                    href={PHONE_LINK}
                    style={{ color: "white" }}
                    className="mt-4 w-full inline-flex items-center justify-center gap-1 bg-[#0B1F3A] hover:bg-[#E63946] py-2.5 rounded-md text-xs font-black uppercase tracking-wide transition"
                  >
                    <span style={{ color: "white" }}>Lock this date</span>
                    <ArrowRight className="w-3 h-3" style={{ color: "white" }} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="text-center mt-10 text-sm sm:text-base text-[#0A0A0A]/65">
            Don&apos;t see your date?{" "}
            <a href={PHONE_LINK} className="text-[#E63946] font-bold underline-offset-4 hover:underline">
              Call {PHONE}
            </a>{" "}
            — we usually have flex.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== STORY ================================================== */
function Story() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0B1F3A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] max-w-[500px] h-[400px] rounded-full bg-[#FFD60A]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[40vw] max-w-[400px] h-[300px] rounded-full bg-[#E63946]/15 blur-[100px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] max-w-[460px] mx-auto rounded-2xl overflow-hidden border-4 border-[#FFD60A] shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80" alt="Moush's truck" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#E63946] text-white rounded-2xl px-5 py-4 shadow-2xl rotate-[4deg] border-4 border-white">
                  <div className="font-display font-black text-3xl sm:text-4xl leading-none">
                    Est. <span className="text-[#FFD60A]">2017</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider opacity-90 mt-1 font-bold">
                    Family-run · Melbourne
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFD60A] mb-3 font-bold">
                Our story
              </p>
              <h2
                className="font-display font-black leading-[0.95] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                Started small.{" "}
                <span className="text-[#E63946]">Stayed honest.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed text-white/75">
                <p>
                  Moush&apos;s Removals began in 2017 with one mission: give Melbourne residents and businesses a moving service they could actually trust. What started as a small family operation has grown into one of the city&apos;s most respected removal companies.
                </p>
                <p>
                  Thousands of moves later, the formula hasn&apos;t changed. Quote a fair fixed price. Turn up when we said we would. Treat your gear like our own. Every member of the team is carefully selected and trained — from the movers to the people answering the phone.
                </p>
              </div>
              <div className="mt-7 sm:mt-9 inline-block bg-[#FFD60A] text-[#0B1F3A] rounded-2xl px-6 py-4">
                <p className="font-display font-black text-xl sm:text-2xl leading-tight">
                  Reliability · Integrity · Excellence.
                </p>
                <p className="font-mono text-xs uppercase tracking-wider mt-1 font-bold">Every move.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================== GALLERY WALL ================================================== */
function Gallery() {
  const photos = [
    "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=900&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=900&q=80",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              On the job
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Real Melbourne moves.{" "}
              <span className="text-[#E63946]">Tap to see closer.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((url, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <button
                onClick={() => setActive(i)}
                className={`group relative w-full overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[100] bg-[#0B1F3A]/95 backdrop-blur grid place-items-center p-4 sm:p-8 cursor-pointer"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? 0 : (a - 1 + photos.length) % photos.length)); }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white hover:bg-[#E63946]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? 0 : (a + 1) % photos.length)); }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white hover:bg-[#E63946]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photos[active]} alt="" className="w-full h-auto rounded-2xl shadow-2xl" />
                <p className="mt-4 text-center text-xs sm:text-sm font-mono uppercase tracking-wider text-white/60">
                  Tap anywhere to close · {active + 1} of {photos.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ================================================== TESTIMONIALS ================================================== */
function Testimonials() {
  const reviews = [
    { name: "Karen Murray", source: "Google", text: "Absolutely sensational service. 3 men were on time, respectful and happy in their job. We were happy with the fixed price as we knew what we were up for. Would highly recommend. Will use again in the future." },
    { name: "Lisa Barnes", source: "Google", text: "Moush's men were fantastic. They text me 45 minutes prior to let me know they would be on time; worked efficiently; and placed items where we requested with no fuss. Have engaged at least 8 times — never had any problems." },
    { name: "Karen Stone", source: "Google", text: "From the moment I spoke with Moush on the phone until the truck was unloaded this was a great moving experience. His team were on time, courteous, respectful of my belongings and worked really hard." },
    { name: "Trevor Molloy", source: "Google", text: "Service was exactly as promised. 3 removalists & 2 trucks. On time and very careful with some special items. Friendly and hard working despite the hot day. Fixed price meant easy budgeting." },
    { name: "Heather Allen", source: "Google", text: "Highly recommend Moush's Removals. The professionalism and knowledge shown by the boys was outstanding. I will definitely be using them again for all my furniture removal needs!" },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              Real customers
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              The reviews{" "}
              <span className="text-[#E63946]">do the selling.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <figure className="bg-white border-2 border-[#0B1F3A]/10 rounded-2xl p-6 sm:p-7 h-full hover:border-[#E63946] hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-[#E63946]">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/50 font-bold">
                    via {r.source}
                  </div>
                </div>
                <Quote className="w-7 h-7 text-[#FFD60A] mb-3" />
                <blockquote className="font-display text-base sm:text-lg leading-relaxed mb-5 text-[#0A0A0A]/80">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="pt-4 border-t border-[#0B1F3A]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B1F3A] text-[#FFD60A] grid place-items-center font-display font-black text-sm">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-bold text-sm text-[#0B1F3A]">{r.name}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== AREAS ================================================== */
function Areas() {
  const areas = [
    { region: "Inner City", tag: "Lanes & high-rises sorted", suburbs: ["Fitzroy", "Carlton", "Richmond", "South Yarra", "St Kilda", "Collingwood", "Brunswick", "Port Melbourne"] },
    { region: "Eastern Suburbs", tag: "Box Hill to Ringwood", suburbs: ["Hawthorn", "Camberwell", "Kew", "Box Hill", "Doncaster", "Balwyn", "Blackburn", "Mitcham"] },
    { region: "Northern Suburbs", tag: "Preston to Eltham", suburbs: ["Northcote", "Thornbury", "Preston", "Reservoir", "Ivanhoe", "Bundoora", "Eltham", "Greensborough"] },
    { region: "South-East", tag: "Brighton to Berwick", suburbs: ["Brighton", "Clayton", "Mulgrave", "Berwick", "Glen Waverley", "Caulfield"] },
    { region: "Western Suburbs", tag: "Werribee corridor", suburbs: ["Point Cook", "Williamstown", "Newport", "Yarraville", "Footscray", "Sunshine"] },
    { region: "Interstate", tag: "Mel ↔ Syd weekly", suburbs: ["Sydney", "Brisbane", "Adelaide", "Canberra", "Newcastle", "Wollongong"] },
  ];

  return (
    <section id="areas" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              Where we work
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Every Melbourne suburb.{" "}
              <span className="text-[#E63946]">Most of Australia.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {areas.map((a, i) => (
            <Reveal key={a.region} delay={i * 0.05}>
              <div className="bg-[#FAFAF7] border-2 border-[#0B1F3A]/10 rounded-2xl p-6 h-full hover:border-[#E63946] transition">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#E63946] grid place-items-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-black text-[#E63946]">{a.tag}</p>
                </div>
                <h3 className="font-display text-2xl mb-4 font-black text-[#0B1F3A]">{a.region}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {a.suburbs.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-md bg-white text-xs font-bold text-[#0B1F3A] border border-[#0B1F3A]/15">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center mt-10 text-base text-[#0A0A0A]/70">
            Don&apos;t see your suburb?{" "}
            <a href={PHONE_LINK} className="text-[#E63946] font-black underline-offset-4 hover:underline">
              Call {PHONE}
            </a>{" "}
            — odds are we&apos;re there too.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== FAQ ================================================== */
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
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#E63946] mb-3 font-bold">
              Plain answers
            </p>
            <h2
              className="font-display font-black leading-[0.95] tracking-tight text-[#0B1F3A]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              The questions{" "}
              <span className="text-[#E63946]">everyone asks.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${open === i ? "border-[#E63946] shadow-xl" : "border-[#0B1F3A]/15"}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 min-h-[64px]"
                >
                  <span className="font-display text-base sm:text-lg lg:text-xl font-black text-[#0B1F3A] pr-2 leading-tight">
                    {it.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full grid place-items-center transition-all ${
                      open === i ? "bg-[#E63946] text-white rotate-45" : "bg-[#FFD60A] text-[#0B1F3A]"
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={3} />
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#0B1F3A]/10">
                        <p className="text-[#0A0A0A]/70 leading-relaxed text-sm sm:text-base mt-4">
                          {it.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== FINAL CTA ================================================== */
function FinalCta() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#E63946] text-white">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #FFD60A, #FFD60A 2px, transparent 2px, transparent 30px)",
        }}
      />
      <div className="absolute top-0 right-0 w-[60vw] max-w-[700px] h-[400px] rounded-full bg-[#FFD60A]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[50vw] max-w-[500px] h-[300px] rounded-full bg-[#0B1F3A]/30 blur-[100px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFD60A] mb-4 sm:mb-5 font-bold">
              Ready when you are
            </p>
            <h2
              className="font-display font-black leading-[0.92] tracking-tight mb-6 sm:mb-8"
              style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
            >
              Let&apos;s get you{" "}
              <span className="relative inline-block">
                <span className="text-[#FFD60A]">moved.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  style={{ height: "clamp(8px, 1.5vw, 14px)" }}
                >
                  <path d="M2 8 Q 75 2, 150 6 T 298 4" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              One phone call. Fixed price. No deposit. Talk to Moush directly — no call centre, no chatbot, no runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={PHONE_LINK}
                style={{ color: "white" }}
                className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-black px-7 h-16 rounded-md font-black uppercase tracking-wide text-base transition shadow-2xl"
              >
                <Phone className="w-5 h-5" style={{ color: "white" }} />
                <span style={{ color: "white" }}>Call {PHONE}</span>
              </a>
              <a
                href="#estimate"
                className="group inline-flex items-center justify-center gap-2 bg-[#FFD60A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-[#FFD60A] px-7 h-16 rounded-md font-black uppercase tracking-wide text-base transition-all shadow-2xl"
              >
                Get my fixed quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-mono uppercase tracking-wider opacity-90">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No deposit</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No hidden fees</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Fully insured</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> 5★ rated</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================== FOOTER ================================================== */
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/65 pt-14 sm:pt-16 lg:pt-20 pb-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/moush-logo.png" alt="Moush's Removals" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl text-white font-black leading-none">Moush&apos;s Removals</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E63946] font-bold mt-1">Melbourne · Est. 2017</div>
              </div>
            </div>
            <p className="leading-relaxed mb-5 max-w-md text-sm sm:text-base">
              Melbourne&apos;s straight-talking furniture removalists. Fixed price, no surprises, every move.
            </p>
            <div className="flex gap-0.5 text-[#FFD60A] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/50">
              5-star rated on Google, OneFlare, Airtasker &amp; findamover.com.au
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-base sm:text-lg text-white mb-4 font-black uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-[#FFD60A] transition">Furniture removals</a></li>
              <li><a href="#services" className="hover:text-[#FFD60A] transition">Interstate moves</a></li>
              <li><a href="#services" className="hover:text-[#FFD60A] transition">Office relocations</a></li>
              <li><a href="#services" className="hover:text-[#FFD60A] transition">Packing service</a></li>
              <li><a href="#services" className="hover:text-[#FFD60A] transition">Storage solutions</a></li>
              <li><a href="#services" className="hover:text-[#FFD60A] transition">Specialty items</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-base sm:text-lg text-white mb-4 font-black uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#E63946] grid place-items-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href={PHONE_LINK} className="hover:text-[#FFD60A] font-bold text-base">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#0B1F3A] border border-white/15 grid place-items-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#FFD60A]" />
                </div>
                <span>Melbourne, VIC · ABN 60 681 762 119</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#0B1F3A] border border-white/15 grid place-items-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-[#FFD60A]" />
                </div>
                <span>Mon–Sat · ASAP service</span>
              </li>
            </ul>
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-[#E63946] text-white px-5 h-12 rounded-md font-black uppercase tracking-wide text-xs sm:text-sm hover:bg-[#c92a37] transition shadow-lg"
            >
              Get a quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs text-white/40 font-mono uppercase tracking-wider">
          <p>© 2026 Moush&apos;s Removals · All rights reserved</p>
          <p>
            Crafted by{" "}
            <a
              href="https://veleria.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD60A] hover:text-white transition"
            >
              Veleria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
