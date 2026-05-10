"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const FEATURES = [
  {
    leftTag: "Signals",
    rightTag: "Real-Time",
    titleMain: "Daily Trade",
    titleAccent: "Alerts",
    description:
      "Every trading day you get clear gold trade ideas — entry, direction, and context. No guesswork. No noise. Just the setup.",
  },
  {
    leftTag: "Guidance",
    rightTag: "Direct Access",
    titleMain: "Direct",
    titleAccent: "Access",
    description:
      "Message me and my team directly. If you have a question about a trade or the market, you get a real answer — not a bot.",
  },
  {
    leftTag: "Education",
    rightTag: "Understanding",
    titleMain: "Market",
    titleAccent: "Breakdowns",
    description:
      "I break down exactly why trades work — not just what happened, but why. You build real understanding, not dependency.",
  },
  {
    leftTag: "Psychology",
    rightTag: "Discipline",
    titleMain: "Mindset",
    titleAccent: "Calls",
    description:
      "Because trading is not just technical. If your mindset is off, your execution will be too. We work on both.",
  },
  {
    leftTag: "Network",
    rightTag: "Accountability",
    titleMain: "The",
    titleAccent: "Community",
    description:
      "Surround yourself with people moving in the same direction. Share wins, stay accountable, stay consistent when markets get hard.",
  },
  {
    leftTag: "System",
    rightTag: "Execution",
    titleMain: "The",
    titleAccent: "Playbook",
    description:
      "A repeatable process for how I find setups, manage risk, and execute. The same system I use every day — now yours.",
  },
];

export function WhatYouGet() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const hoveredRef = useRef(false);
  const fadingRef = useRef(false);
  const activeRef = useRef(0);

  const goTo = useCallback((idx: number) => {
    if (fadingRef.current || idx === activeRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      activeRef.current = idx;
      setActive(idx);
      setFading(false);
      fadingRef.current = false;
    }, 220);
  }, []);

  // Auto-rotate every 4.5 s — pauses on hover
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hoveredRef.current) {
        goTo((active + 1) % FEATURES.length);
      }
    }, 4500);
    return () => clearTimeout(t);
  }, [active, goTo]);

  const f = FEATURES[active];

  return (
    <section
      id="what-you-get"
      className="relative isolate overflow-hidden py-20 sm:py-28"
      style={{ background: "#0e0c08" }}
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
    >
      {/* Ambient radial warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 65%, rgba(168,118,27,0.14), transparent 70%)",
        }}
      />
      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">

        {/* Section header */}
        <div className="mb-16 text-center sm:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/50" />
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-500">
              What You Get
            </p>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
          <h2 className="mt-4 font-display text-[26px] font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-[36px] md:text-[42px]">
            What you get inside{" "}
            <span
              className="gold-text italic"
              style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}
            >
              Trading with Ryan
            </span>
          </h2>
        </div>

        {/* Three-column interactive area */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_minmax(0,460px)_1fr] lg:gap-12">

          {/* LEFT tags — desktop only */}
          <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-[22px]">
            {FEATURES.map((feat, i) => (
              <button
                key={feat.leftTag}
                onClick={() => goTo(i)}
                aria-label={`Show ${feat.leftTag}`}
                className="group flex items-center gap-3 focus-visible:outline-none"
              >
                <span
                  className={`font-display text-[10.5px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
                    i === active
                      ? "text-gold-400"
                      : "text-white/20 hover:text-white/50"
                  }`}
                >
                  {feat.leftTag}
                </span>
                {/* Dot pointing toward center */}
                <span
                  className="h-[5px] w-[5px] shrink-0 rounded-full transition-all duration-300"
                  style={{
                    background:
                      i === active ? "#c69327" : "rgba(255,255,255,0.08)",
                    boxShadow:
                      i === active
                        ? "0 0 8px rgba(198,147,39,0.7)"
                        : "none",
                  }}
                />
              </button>
            ))}
          </div>

          {/* CENTER content */}
          <div className="flex flex-col items-center text-center">
            {/* Feature tags on mobile — shown instead of side columns */}
            <div className="mb-6 flex items-center justify-center gap-3 lg:hidden">
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-500">
                {f.leftTag}
              </span>
              <span className="h-1 w-1 rounded-full bg-gold-500/40" />
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-500">
                {f.rightTag}
              </span>
            </div>

            {/* Animated content block */}
            <div
              className="flex min-h-[260px] flex-col items-center justify-center sm:min-h-[300px]"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(7px)" : "translateY(0)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {/* Big two-tone title */}
              <h3
                className="font-display font-black leading-[0.93] tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(44px, 6.5vw, 76px)" }}
              >
                {f.titleMain}{" "}
                <span
                  className="gold-text italic"
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.titleAccent}
                </span>
              </h3>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-[36ch] text-balance text-[14px] leading-relaxed text-white/48 sm:text-[15.5px]">
                {f.description}
              </p>
            </div>

            {/* Dot pagination */}
            <div className="mt-10 flex items-center gap-2 sm:mt-12">
              {FEATURES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to feature ${i + 1}`}
                  className="rounded-full transition-all duration-300 focus-visible:outline-none"
                  style={{
                    width: i === active ? "18px" : "5px",
                    height: "5px",
                    background:
                      i === active
                        ? "#c69327"
                        : "rgba(255,255,255,0.18)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT tags — desktop only */}
          <div className="hidden lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-[22px]">
            {FEATURES.map((feat, i) => (
              <button
                key={feat.rightTag}
                onClick={() => goTo(i)}
                aria-label={`Show ${feat.rightTag}`}
                className="group flex items-center gap-3 focus-visible:outline-none"
              >
                {/* Dot pointing toward center */}
                <span
                  className="h-[5px] w-[5px] shrink-0 rounded-full transition-all duration-300"
                  style={{
                    background:
                      i === active ? "#c69327" : "rgba(255,255,255,0.08)",
                    boxShadow:
                      i === active
                        ? "0 0 8px rgba(198,147,39,0.7)"
                        : "none",
                  }}
                />
                <span
                  className={`font-display text-[10.5px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
                    i === active
                      ? "text-gold-400"
                      : "text-white/20 hover:text-white/50"
                  }`}
                >
                  {feat.rightTag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical progress dots — far right edge, xl screens only */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-[7px] xl:flex">
        {FEATURES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Feature ${i + 1}`}
            className="rounded-full transition-all duration-300 focus-visible:outline-none"
            style={{
              width: "5px",
              height: i === active ? "18px" : "5px",
              background:
                i === active ? "#c69327" : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </div>

      {/* Bottom hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}
