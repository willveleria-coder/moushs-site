"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, ArrowRight, Menu, X, DollarSign, Truck, Sparkles,
  Activity, Calendar, Star, MapPin, MessageCircle,
} from "lucide-react";

const PHONE = "0430 504 119";
const PHONE_LINK = "tel:0430504119";

const NAV_LINKS = [
  { href: "#estimate", label: "Get a quote", icon: DollarSign },
  { href: "#services", label: "Services", icon: Truck },
  { href: "#difference", label: "Why us", icon: Sparkles },
  { href: "#timeline", label: "How we move", icon: Activity },
  { href: "#schedule", label: "Mel ↔ Syd schedule", icon: Calendar },
  { href: "#reviews", label: "Reviews", icon: Star },
  { href: "#areas", label: "Areas", icon: MapPin },
  { href: "#faq", label: "FAQ", icon: MessageCircle },
];

const DESKTOP_LINKS = [
  { href: "#estimate", label: "Quote" },
  { href: "#services", label: "Services" },
  { href: "#difference", label: "Why us" },
  { href: "#timeline", label: "Process" },
  { href: "#schedule", label: "Schedule" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-xl border-b border-black/8 shadow-sm" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[72px] flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-white border border-black/10 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/moush-logo.png" alt="Moush's Removals" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] sm:text-[18px] font-black tracking-tight" style={{ color: "#0B1F3A" }}>
                Moush&apos;s
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: "#E63946" }}>
                Removals
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide">
            {DESKTOP_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 transition-colors"
                style={{ color: "#0B1F3A" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side: phone + CTA + burger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={PHONE_LINK}
              style={{ color: "#0B1F3A" }}
              className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-md border-2 border-[#0B1F3A] text-sm font-bold transition"
            >
              <Phone className="w-4 h-4" style={{ color: "#0B1F3A" }} />
              {PHONE}
            </a>
            <a
              href="#estimate"
              style={{ color: "white" }}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#E63946] hover:bg-[#c92a37] px-4 h-10 rounded-md text-sm font-black uppercase tracking-wide transition shadow-md"
            >
              Free quote
              <ArrowRight className="w-3.5 h-3.5" style={{ color: "white" }} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 grid place-items-center rounded-md border-2 transition"
              style={{ borderColor: "#0B1F3A", color: "#0B1F3A" }}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[64px] z-40 overflow-y-auto"
            style={{ backgroundColor: "#0B1F3A" }}
          >
            {/* Brand block */}
            <div className="px-5 py-6 border-b border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/moush-logo.png" alt="Moush's Removals" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-display text-xl font-black" style={{ color: "white" }}>
                    Moush&apos;s Removals
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: "#FFD60A" }}>
                    Est. 2017 · Melbourne
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Fixed-price removalists. No deposit. No surprises.
              </p>
            </div>

            {/* Links */}
            <div className="px-5 py-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-4 border-b border-white/10 flex items-center gap-3 transition"
                  style={{ color: "white" }}
                >
                  <div className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                    <l.icon className="w-4 h-4" style={{ color: "#FFD60A" }} />
                  </div>
                  <span className="font-display text-lg font-black flex-1" style={{ color: "white" }}>
                    {l.label}
                  </span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: "#E63946" }} />
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="px-5 py-6 space-y-3">
              <a
                href={PHONE_LINK}
                className="py-4 rounded-md flex items-center justify-center gap-2 text-base uppercase tracking-wide font-black shadow-lg"
                style={{ backgroundColor: "#E63946", color: "white" }}
              >
                <Phone className="w-5 h-5" style={{ color: "white" }} />
                <span style={{ color: "white" }}>Call {PHONE}</span>
              </a>
              <a
                href="#estimate"
                onClick={() => setOpen(false)}
                className="py-4 rounded-md flex items-center justify-center gap-2 text-base uppercase tracking-wide font-black shadow-lg"
                style={{ backgroundColor: "#FFD60A", color: "#0B1F3A" }}
              >
                <span style={{ color: "#0B1F3A" }}>Get my fixed quote</span>
                <ArrowRight className="w-5 h-5" style={{ color: "#0B1F3A" }} />
              </a>
            </div>

            {/* Footer in drawer */}
            <div className="px-5 py-6 border-t border-white/10 text-center">
              <p className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>
                Crafted by Veleria
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}