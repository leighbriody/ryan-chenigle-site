import type { ReactNode } from "react";

const BULLETS = [
  "Follow the market from your phone, wherever you are",
  "Stay plugged in throughout your working day",
  "Build this around your schedule, not the other way round",
];

// Candle data for the chart phone — gentle uptrend with realistic pullbacks
const CANDLES: Array<{ o: number; c: number; h: number; l: number }> = [
  { o: 0.36, c: 0.50, h: 0.54, l: 0.32 },
  { o: 0.50, c: 0.43, h: 0.53, l: 0.40 },
  { o: 0.43, c: 0.58, h: 0.62, l: 0.41 },
  { o: 0.58, c: 0.52, h: 0.62, l: 0.49 },
  { o: 0.52, c: 0.67, h: 0.71, l: 0.50 },
  { o: 0.67, c: 0.62, h: 0.70, l: 0.59 },
  { o: 0.62, c: 0.76, h: 0.80, l: 0.60 },
  { o: 0.76, c: 0.71, h: 0.79, l: 0.68 },
  { o: 0.71, c: 0.83, h: 0.87, l: 0.69 },
  { o: 0.83, c: 0.78, h: 0.85, l: 0.75 },
];

export function Lifestyle() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      {/* Ambient bg shift — slightly different warmth from the plain background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 100% 50%, rgba(168,118,27,0.07), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Text side ── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/70" />
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
                Your Lifestyle
              </p>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/70" />
            </div>

            {/* Headline */}
            <h2 className="mt-4 font-display text-[34px] font-black leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[46px] md:text-[50px]">
              Take trades
              <br />
              <span
                className="gold-text italic"
                style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}
              >
                from anywhere
              </span>
            </h2>

            {/* Intro paragraph */}
            <p className="mt-5 text-[15px] leading-[1.78] text-muted sm:text-[15.5px]">
              One of the most powerful things about this is simple. You are not
              tied to one place.
            </p>

            {/* Bullet list */}
            <ul className="mt-5 flex flex-col gap-3.5">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[3px] grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gold-50 ring-1 ring-gold-200/60">
                    <span className="h-1.5 w-1.5 rounded-sm bg-gold-400" />
                  </span>
                  <span className="text-[14.5px] leading-[1.7] text-foreground/80">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Emphasis line */}
            <p className="mt-6 font-display text-[15.5px] font-black tracking-[-0.01em] text-foreground">
              That matters.
            </p>

            {/* Body copy */}
            <p className="mt-2.5 text-[14.5px] leading-[1.78] text-muted sm:text-[15px]">
              Because for some people this becomes a second stream of income.
              For others, this becomes the thing they build seriously enough to
              eventually create more freedom in their life.
            </p>

            {/* Kicker */}
            <p className="mt-4 text-[14.5px] font-semibold leading-[1.65] text-foreground sm:text-[15px]">
              Either way, it gives you options. And when you have options, you
              stop feeling trapped.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#access"
                className="group btn-ghost inline-flex h-11 items-center gap-2.5 rounded-full px-6 text-[13px] font-semibold"
              >
                Get Access Now
                <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/[0.08] transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* ── Phones side ── */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative shrink-0"
              style={{ width: 420, height: 540 }}
            >
              {/* Warm glow underneath both phones */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-12 bottom-0 h-16 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(168,118,27,0.35), transparent 70%)",
                }}
              />

              {/* Phone 2 — Chart — back-right, tilted clockwise */}
              <div
                className="absolute"
                style={{
                  top: 0,
                  right: 0,
                  width: 215,
                  transform: "rotate(5.5deg)",
                  zIndex: 10,
                }}
              >
                <ChartPhone />
              </div>

              {/* Phone 1 — Signals — front-left, tilted counter-clockwise */}
              <div
                className="absolute"
                style={{
                  bottom: 0,
                  left: 0,
                  width: 212,
                  transform: "rotate(-5deg)",
                  zIndex: 20,
                }}
              >
                <SignalsPhone />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Shared phone shell ─────────────────────────────────────────── */

function PhoneShell({
  children,
  gold = false,
}: {
  children: ReactNode;
  gold?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[32px]"
      style={{
        background: "#111210",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: gold
          ? "0 0 0 2px rgba(198,147,39,0.55), 0 0 0 5px rgba(198,147,39,0.10), 0 44px 90px -20px rgba(14,12,8,0.70)"
          : "0 44px 90px -20px rgba(14,12,8,0.60), 0 8px 24px -6px rgba(14,12,8,0.30)",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "11px 18px 0",
        }}
      >
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: "rgba(255,255,255,0.55)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          9:41
        </span>
        {/* Battery + signal icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden>
            <rect x="0" y="5.5" width="2" height="3.5" rx="0.5" fill="rgba(255,255,255,0.38)" />
            <rect x="3.5" y="3" width="2" height="6" rx="0.5" fill="rgba(255,255,255,0.55)" />
            <rect x="7" y="1" width="2" height="8" rx="0.5" fill="rgba(255,255,255,0.75)" />
            <rect x="10.5" y="0" width="2" height="9" rx="0.5" fill="rgba(255,255,255,0.9)" />
          </svg>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
            <rect
              x="0.5"
              y="0.5"
              width="18"
              height="9"
              rx="2.5"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />
            <rect x="19" y="3.2" width="2.5" height="3.6" rx="1" fill="rgba(255,255,255,0.35)" />
            <rect x="2" y="2" width="12" height="6" rx="1.5" fill="rgba(255,255,255,0.82)" />
          </svg>
        </div>
      </div>

      {/* Dynamic island pill */}
      <div
        style={{
          width: 76,
          height: 5,
          borderRadius: 10,
          background: "rgba(255,255,255,0.07)",
          margin: "5px auto 0",
        }}
      />

      {children}
    </div>
  );
}

/* ─── Signals phone (Telegram-style channel) ────────────────────── */

function SignalsPhone() {
  return (
    <PhoneShell>
      {/* Channel header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: "8px 14px 9px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            background:
              "linear-gradient(180deg, #f0dca0 0%, #c69327 55%, #8a6116 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
          }}
        >
          <span
            style={{
              fontSize: 9,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            RC
          </span>
        </div>
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.3,
            }}
          >
            RC Gold Signals
          </p>
          <p
            style={{ fontSize: 8.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.3 }}
          >
            2,847 subscribers
          </p>
        </div>
      </div>

      {/* Signal feed */}
      <div style={{ display: "flex", flexDirection: "column", padding: "8px 0" }}>
        <SignalCard
          type="buy"
          pair="XAU/USD"
          price="2,640.50"
          entry="2,409.00"
          tp="2,650.00"
          sl="2,380.00"
          time="11:23 AM"
        />

        {/* TP HIT badge */}
        <div
          style={{
            margin: "4px 10px",
            borderRadius: 10,
            background: "rgba(34,197,94,0.10)",
            border: "1px solid rgba(34,197,94,0.18)",
            padding: "7px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginBottom: 3,
            }}
          >
            <span
              style={{
                fontSize: 7.5,
                fontWeight: 800,
                color: "#fff",
                background: "#22c55e",
                padding: "1.5px 5px",
                borderRadius: 4,
                letterSpacing: "0.07em",
              }}
            >
              TP HIT ✓
            </span>
          </div>
          <p
            style={{
              fontSize: 8.5,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.45,
            }}
          >
            XAU/USD Buy closed · +171 pips
          </p>
          <p
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#22c55e",
              marginTop: 2,
            }}
          >
            +$342.80
          </p>
        </div>

        <SignalCard
          type="sell"
          pair="XAU/USD"
          price="2,671.20"
          entry="2,652.00"
          tp="2,640.00"
          sl="2,680.00"
          time="2:11 PM"
        />
      </div>

      {/* Message bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "8px 12px",
        }}
      >
        <div
          style={{
            height: 26,
            borderRadius: 13,
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 12,
          }}
        >
          <span
            style={{ fontSize: 8.5, color: "rgba(255,255,255,0.2)" }}
          >
            Channel notifications
          </span>
        </div>
      </div>
    </PhoneShell>
  );
}

function SignalCard({
  type,
  pair,
  price,
  entry,
  tp,
  sl,
  time,
}: {
  type: "buy" | "sell";
  pair: string;
  price: string;
  entry: string;
  tp: string;
  sl: string;
  time: string;
}) {
  const isBuy = type === "buy";
  const color = isBuy ? "#22c55e" : "#ef4444";
  const label = isBuy ? "BUY" : "SELL";

  return (
    <div
      style={{
        margin: "4px 10px",
        borderRadius: 10,
        background: "rgba(255,255,255,0.04)",
        padding: "8px 10px",
        borderLeft: `2px solid ${color}`,
      }}
    >
      {/* Row 1: label + pair + price */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              fontSize: 7.5,
              fontWeight: 800,
              color,
              background: `${color}1a`,
              padding: "1.5px 5px",
              borderRadius: 4,
              letterSpacing: "0.07em",
            }}
          >
            {label}
          </span>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "#fff" }}>
            {pair}
          </span>
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: "#fff",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {price}
        </span>
      </div>

      {/* Row 2: entry / tp / sl grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 8px" }}>
        <p style={{ fontSize: 7.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>
          Entry:{" "}
          <span style={{ color: "rgba(255,255,255,0.72)" }}>{entry}</span>
        </p>
        <p style={{ fontSize: 7.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>
          TP:{" "}
          <span style={{ color: isBuy ? "#22c55e" : "#ef4444" }}>{tp}</span>
        </p>
        <p style={{ fontSize: 7.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>
          SL:{" "}
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{sl}</span>
        </p>
      </div>

      {/* Timestamp */}
      <p
        style={{
          fontSize: 7,
          color: "rgba(255,255,255,0.18)",
          textAlign: "right",
          marginTop: 3,
        }}
      >
        {time}
      </p>
    </div>
  );
}

/* ─── Chart phone ─────────────────────────────────────────────────── */

function ChartPhone() {
  return (
    <PhoneShell gold>
      {/* Pair + price header */}
      <div style={{ padding: "6px 14px 10px" }}>
        <p
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
            marginBottom: 2,
            letterSpacing: "0.04em",
          }}
        >
          XAU / USD · Gold
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            2,847.50
          </span>
          <span style={{ fontSize: 11.5, fontWeight: 700, color: "#22c55e" }}>
            +1.24%
          </span>
        </div>

        {/* Timeframe selector */}
        <div style={{ display: "flex", gap: 4, marginTop: 9 }}>
          {(["1H", "4H", "1D", "1W"] as const).map((tf, i) => (
            <div
              key={tf}
              style={{
                padding: "2px 8px",
                borderRadius: 6,
                background:
                  i === 2 ? "rgba(198,147,39,0.18)" : "rgba(255,255,255,0.06)",
                fontSize: 8.5,
                fontWeight: 600,
                color: i === 2 ? "#c69327" : "rgba(255,255,255,0.38)",
              }}
            >
              {tf}
            </div>
          ))}
        </div>
      </div>

      {/* Candlestick chart SVG */}
      <div style={{ padding: "0 10px" }}>
        <svg
          width="100%"
          viewBox="0 0 200 100"
          aria-hidden
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          {/* Subtle grid lines */}
          {[0.25, 0.5, 0.75].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y * 100}
              x2="200"
              y2={y * 100}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
            />
          ))}

          {/* Candles */}
          {CANDLES.map((c, i) => {
            const bullish = c.c >= c.o;
            const color = bullish ? "#22c55e" : "#ef4444";
            const slotW = 200 / CANDLES.length;
            const x = i * slotW + slotW / 2;
            const bw = slotW * 0.52;
            const bodyTop = (1 - Math.max(c.o, c.c)) * 100;
            const bodyH = Math.max(Math.abs(c.c - c.o) * 100, 1.5);
            return (
              <g key={i}>
                {/* Wick */}
                <line
                  x1={x}
                  y1={(1 - c.h) * 100}
                  x2={x}
                  y2={(1 - c.l) * 100}
                  stroke={color}
                  strokeWidth="0.8"
                />
                {/* Body */}
                <rect
                  x={x - bw / 2}
                  y={bodyTop}
                  width={bw}
                  height={bodyH}
                  rx="0.5"
                  fill={color}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Profit card */}
      <div style={{ padding: "10px 10px 14px" }}>
        <div
          style={{
            borderRadius: 13,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "11px 13px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 8,
                color: "rgba(255,255,255,0.38)",
                marginBottom: 3,
                letterSpacing: "0.04em",
              }}
            >
              Closed position
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: "#22c55e",
                letterSpacing: "-0.025em",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              +$342.80
            </p>
          </div>
          <div
            style={{
              background: "#ef4444",
              color: "#fff",
              fontSize: 10.5,
              fontWeight: 800,
              padding: "9px 13px",
              borderRadius: 9,
              letterSpacing: "0.04em",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 0 4px 12px -4px rgba(239,68,68,0.5)",
            }}
          >
            SELL
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
