"use client";

import { useState, useId } from "react";

function compound(capital: number, monthlyRate: number, months: number) {
  return capital * Math.pow(1 + monthlyRate / 100, months);
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

const CAPITAL_MIN = 500;
const CAPITAL_MAX = 50000;
const CAPITAL_STEP = 500;

const RATE_MIN = 1;
const RATE_MAX = 15;
const RATE_STEP = 0.5;

const MILESTONES = [
  { months: 3,  label: "3 months",  icon: "🕐" },
  { months: 6,  label: "6 months",  icon: "📈" },
  { months: 12, label: "12 months", icon: "💰" },
];

function SliderTrack({
  id,
  min,
  max,
  step,
  value,
  onChange,
}: {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative h-5 flex items-center">
      {/* Track background */}
      <div className="absolute inset-x-0 h-[5px] rounded-full bg-foreground/10" />
      {/* Filled portion */}
      <div
        className="absolute left-0 h-[5px] rounded-full"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, #c69327 0%, #e6c771 100%)",
        }}
      />
      {/* Native input — invisible but fully interactive */}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full cursor-pointer opacity-0 h-5"
        style={{ zIndex: 2 }}
      />
      {/* Thumb */}
      <div
        className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 rounded-full ring-[3px] ring-gold-400 shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        style={{
          left: `${pct}%`,
          background: "linear-gradient(180deg, #f0dca0 0%, #c69327 100%)",
          zIndex: 1,
        }}
      />
    </div>
  );
}

export function ReturnCalculator() {
  const [capital, setCapital] = useState(2000);
  const [rate, setRate] = useState(5.5);

  const capitalId = useId();
  const rateId = useId();

  const at12 = compound(capital, rate, 12);
  const profit12 = at12 - capital;

  return (
    <section className="relative py-20 sm:py-28">
      {/* Subtle section bg shift */}
      <div className="pointer-events-none absolute inset-0 bg-background-2/40" />

      <div className="relative mx-auto w-full max-w-4xl px-6 sm:px-10">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/70" />
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
              Your Potential
            </p>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/70" />
          </div>
          <h2 className="mt-4 font-display text-[28px] font-black leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[38px] md:text-[44px]">
            See what building a<br />
            real skill{" "}
            <span className="gold-text italic" style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}>
              could look like
            </span>
          </h2>
          <p className="mt-4 text-balance text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Adjust the sliders below to explore how consistent returns compound
            over time. Based on an average 85% win rate across signals.
          </p>
        </div>

        {/* Calculator grid */}
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr] sm:gap-5">

          {/* Left — sliders */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface p-6 ring-1 ring-foreground/[0.07] shadow-[0_4px_24px_-8px_rgba(14,12,8,0.1)] sm:p-7">
            <div className="flex flex-col gap-8">
              {/* Starting Capital */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={capitalId} className="text-[12.5px] font-semibold text-foreground/70">
                    Starting Capital
                  </label>
                  <span className="font-display text-[14px] font-black text-gold-600 tabular-nums">
                    {fmt(capital)}
                  </span>
                </div>
                <SliderTrack
                  id={capitalId}
                  min={CAPITAL_MIN}
                  max={CAPITAL_MAX}
                  step={CAPITAL_STEP}
                  value={capital}
                  onChange={setCapital}
                />
                <div className="flex justify-between text-[10.5px] text-muted-2">
                  <span>{fmt(CAPITAL_MIN)}</span>
                  <span>{fmt(CAPITAL_MAX)}</span>
                </div>
              </div>

              {/* Monthly Return */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={rateId} className="text-[12.5px] font-semibold text-foreground/70">
                    Monthly Return
                  </label>
                  <span className="font-display text-[14px] font-black text-gold-600 tabular-nums">
                    {rate.toFixed(1)}% / month
                  </span>
                </div>
                <SliderTrack
                  id={rateId}
                  min={RATE_MIN}
                  max={RATE_MAX}
                  step={RATE_STEP}
                  value={rate}
                  onChange={setRate}
                />
                <div className="flex justify-between text-[10.5px] text-muted-2">
                  <span>{RATE_MIN}%</span>
                  <span>{RATE_MAX}%</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 flex items-start gap-2.5 rounded-xl bg-gold-50/70 p-3.5 ring-1 ring-gold-200/50">
              <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-[10.5px] leading-relaxed text-muted">
                This is a projection tool for educational purposes. It does not
                guarantee returns. Trading involves risk and past performance
                does not indicate future results.
              </p>
            </div>
          </div>

          {/* Right — results */}
          <div className="flex flex-col gap-4">
            {/* Milestone cards */}
            <div className="grid grid-cols-3 gap-3">
              {MILESTONES.map(({ months, label, icon }) => {
                const val = compound(capital, rate, months);
                return (
                  <div
                    key={months}
                    className="flex flex-col gap-1.5 rounded-xl bg-surface p-4 ring-1 ring-foreground/[0.07] shadow-[0_2px_12px_-4px_rgba(14,12,8,0.08)]"
                  >
                    <span className="text-sm">{icon}</span>
                    <p className="text-[10.5px] font-medium text-muted">{label}</p>
                    <p className="font-display text-[18px] font-black tracking-tight text-foreground tabular-nums sm:text-[20px]">
                      {fmt(val)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 12-month profit highlight */}
            <div
              className="flex flex-1 flex-col items-start justify-center rounded-2xl p-6 sm:p-7"
              style={{
                background: "linear-gradient(135deg, #f8edd1 0%, #f0dca0 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 20px -6px rgba(168,118,27,0.25)",
              }}
            >
              <p className="text-[11.5px] font-semibold text-gold-700">
                Projected profit after 12 months
              </p>
              <p
                className="mt-1 font-display text-[40px] font-black leading-none tracking-[-0.03em] tabular-nums sm:text-[48px]"
                style={{
                  background: "linear-gradient(180deg, #c69327 0%, #7d5712 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {fmt(profit12)}
              </p>
              <p className="mt-2.5 text-[11.5px] leading-relaxed text-gold-700/80">
                From {fmt(capital)} starting capital at {rate.toFixed(1)}% monthly
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#access"
            className="group btn-ghost inline-flex h-11 items-center gap-2.5 rounded-full px-7 text-[13px] font-semibold"
          >
            Start Building Your Returns
            <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/8 transition-transform duration-200 group-hover:translate-x-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
