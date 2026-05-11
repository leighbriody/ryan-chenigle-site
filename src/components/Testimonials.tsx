"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The support is what sets this apart. Ryan and the team genuinely care about helping you improve.",
    name: "Sophie M.",
    role: "Retail manager",
  },
  {
    quote:
      "I tried doing this alone for over a year and got nowhere. Within a few months inside RC I felt calmer, more structured, and more confident in every trade. I wish I had found this sooner.",
    name: "Nathan K.",
    role: "Delivery driver",
  },
  {
    quote:
      "The mindset calls surprised me. I did not think that part mattered but it changed everything. My execution got way better once my head was right.",
    name: "Rachel T.",
    role: "Healthcare assistant",
  },
  {
    quote:
      "I have tried other trading communities before. The difference here is structure. Everything is laid out clearly and Ryan explains the why behind every trade.",
    name: "James O.",
    role: "Construction worker",
  },
  {
    quote:
      "Within six weeks I was seeing consistent small wins. Not huge numbers but consistent. That is what changed my mindset about what is actually possible.",
    name: "Kemi A.",
    role: "Nurse",
  },
  {
    quote:
      "I joined sceptical and left a believer. The system works. I just had to follow it and trust the process instead of jumping around chasing signals.",
    name: "Marcus B.",
    role: "Warehouse supervisor",
  },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS.length / PER_PAGE);

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);
  const fadingRef = useRef(false);

  const goTo = useCallback((idx: number) => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      setPage(idx);
      setFading(false);
      fadingRef.current = false;
    }, 200);
  }, []);

  const prev = () => goTo((page - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  const next = () => goTo((page + 1) % TOTAL_PAGES);

  // Auto-advance every 6 s
  const hoveredRef = useRef(false);
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hoveredRef.current) goTo((page + 1) % TOTAL_PAGES);
    }, 6000);
    return () => clearTimeout(t);
  }, [page, goTo]);

  const visible = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section
      className="relative isolate overflow-hidden py-20 sm:py-28"
      onMouseEnter={() => { hoveredRef.current = true; }}
      onMouseLeave={() => { hoveredRef.current = false; }}
    >
      {/* Subtle dot grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,12,8,0.055) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">

        {/* Section header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3.5">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-gold-600 tabular-nums">
              04
            </span>
            <span className="h-px w-8 bg-gold-400/45" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-foreground/55">
              Real Stories
            </span>
          </div>

          <h2 className="mt-4 font-display text-[30px] font-black leading-[1.04] tracking-[-0.03em] text-foreground sm:text-[42px] md:text-[48px]">
            Real people.{" "}
            <span
              className="gold-text italic"
              style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}
            >
              Real progress.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[50ch] text-balance text-[14.5px] leading-relaxed text-muted sm:text-[15px]">
            These are not cherry-picked profit screenshots. These are real
            people who found structure, support, and a better way to approach
            the market.
          </p>

          {/* Ornament line + nav arrows */}
          <div className="relative mx-auto mt-7 max-w-2xl">
            <div className="mx-auto h-px w-10 bg-gold-400/55" />
            <div className="absolute right-0 top-1/2 flex -translate-y-1/2 gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="grid h-8 w-8 place-items-center rounded-full border border-foreground/12 bg-surface text-foreground/60 shadow-[0_2px_8px_-4px_rgba(14,12,8,0.12)] transition-all duration-200 hover:border-foreground/20 hover:text-foreground hover:shadow-[0_4px_12px_-4px_rgba(14,12,8,0.18)]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="grid h-8 w-8 place-items-center rounded-full border border-foreground/12 bg-surface text-foreground/60 shadow-[0_2px_8px_-4px_rgba(14,12,8,0.12)] transition-all duration-200 hover:border-foreground/20 hover:text-foreground hover:shadow-[0_4px_12px_-4px_rgba(14,12,8,0.18)]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5 sm:mt-10"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(6px)" : "translateY(0)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          {visible.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Dot pagination */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
              className="rounded-full transition-all duration-300 focus-visible:outline-none"
              style={{
                width: i === page ? "18px" : "5px",
                height: "5px",
                background:
                  i === page ? "#c69327" : "rgba(14,12,8,0.18)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-foreground/[0.07] shadow-[0_4px_24px_-8px_rgba(14,12,8,0.10)]">
      {/* Opening quote mark */}
      <span
        aria-hidden
        className="mb-3 block font-display text-[36px] leading-none text-gold-300/70"
        style={{ fontFamily: "var(--font-serif), serif" }}
      >
        &ldquo;
      </span>

      {/* Quote */}
      <p className="flex-1 text-[13.5px] leading-[1.74] text-foreground/80">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="mt-6 border-t border-foreground/[0.07] pt-5">
        <p className="font-display text-[13.5px] font-bold tracking-[-0.005em] text-foreground">
          {testimonial.name}
        </p>
        <p className="mt-0.5 text-[12px] text-muted-2">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}
