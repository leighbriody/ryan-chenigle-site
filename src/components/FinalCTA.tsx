export function FinalCTA() {
  return (
    <section
      id="access"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10 sm:py-32"
      style={{ background: "#09080600" }}
    >
      {/* Layer 1 (back): true black base */}
      <div className="pointer-events-none absolute inset-0 -z-20" style={{ background: "#0b0a07" }} />

      {/* Layer 2: golden lines at the periphery */}
      <GoldenLines />

      {/* Layer 3: deep dark ellipse that carves out a readable center —
          lines remain visible at the edges but are masked where text lives */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 50%, rgba(9,8,6,0.94) 0%, rgba(9,8,6,0.88) 30%, rgba(9,8,6,0.65) 55%, rgba(9,8,6,0.25) 78%, transparent 100%)",
          zIndex: 0,
        }}
      />

      {/* Layer 4: subtle warm gold bloom — atmosphere only, not fog */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 48%, rgba(168,118,27,0.07), transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto w-full max-w-2xl" style={{ zIndex: 10 }}>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/55" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-500">
            Get Started
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/55" />
        </div>

        {/* Headline — large, punchy, high contrast */}
        <h2 className="mt-5 font-display text-[36px] font-black leading-[1.03] tracking-[-0.03em] text-white sm:text-[50px] md:text-[58px]">
          I built this for the person
          <br />
          who is{" "}
          {/* Brighter gold gradient — no near-black stops that vanish on dark bg */}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(160deg, #f0dca0 0%, #e9c264 35%, #c69327 70%, #a8761b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "var(--font-serif), serif",
              fontWeight: 400,
            }}
          >
            done feeling stuck
          </span>
        </h2>

        {/* Intro */}
        <p className="mx-auto mt-7 max-w-[46ch] text-balance text-[15px] leading-[1.78] text-white/72 sm:text-[16px]">
          The one who is tired of waking up, going to work, paying bills, and
          wondering if this is really all life is going to be.
        </p>

        {/* Hairline divider */}
        <div className="mx-auto mt-8 h-px w-10 bg-white/15" />

        {/* Staccato emphasis — bigger, more spaced, full white */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="font-display text-[17px] font-semibold text-white sm:text-[19px]">
            The one who wants more control.
          </p>
          <p className="font-display text-[17px] font-semibold text-white/85 sm:text-[19px]">
            More options.
          </p>
          <p className="font-display text-[17px] font-semibold text-white/85 sm:text-[19px]">
            More confidence.
          </p>
          <p className="font-display text-[17px] font-semibold text-white/85 sm:text-[19px]">
            More freedom.
          </p>
        </div>

        {/* Kicker — warm gold, clearly readable */}
        <p
          className="mt-7 text-[16px] font-semibold sm:text-[17px]"
          style={{
            color: "#e9c264",
            textDecoration: "underline",
            textDecorationColor: "rgba(198,147,39,0.50)",
            textUnderlineOffset: "5px",
          }}
        >
          If that sounds like you, come inside.
        </p>

        {/* Body */}
        <p className="mx-auto mt-6 max-w-[44ch] text-balance text-[14px] leading-[1.80] text-white/58 sm:text-[15px]">
          Get access to my private gold trading channel, real-time trade ideas
          sent to your phone, weekly education and mindset calls, direct support
          from me and my team, and a system you can build on for the long term.
        </p>

        {/* Primary gold CTA — high contrast on dark bg */}
        <div className="mt-10">
          <a
            href="#"
            className="group btn-primary relative inline-flex h-13 items-center justify-center gap-3 overflow-hidden rounded-full px-9 text-[14px] font-semibold text-white"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Access Now
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25 transition-transform duration-200 group-hover:translate-x-0.5">
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
            </span>
            {/* Shimmer on hover */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-500 group-hover:translate-x-full"
            />
          </a>
        </div>

        <p className="mt-4 text-[12.5px] text-white/40">
          Join today and take your first step toward a real system.
        </p>

        {/* Wordmark */}
        <div className="relative mx-auto mt-16 w-fit">
          <p className="font-display text-[22px] font-black tracking-[-0.04em] text-white/50">
            Ryan Chenigle
          </p>
          <span
            aria-hidden
            className="absolute -bottom-2 left-1/2 h-px w-10 -translate-x-1/2 bg-white/18"
          />
        </div>

        {/* Legal + copyright */}
        <p className="mx-auto mt-10 max-w-[52ch] text-balance text-[11px] leading-relaxed text-white/35">
          Trading involves risk and losses can happen. Never trade money you
          cannot afford to lose. This page is for education, community access,
          and market commentary. It does not guarantee results and it is not
          personal financial advice.
        </p>
        <p className="mt-3 text-[11px] text-white/28">
          © {new Date().getFullYear()} Ryan Chenigle. All rights reserved.
        </p>
      </div>
    </section>
  );
}

/* ─── Golden peripheral lines ──────────────────────────────────────── */

function GoldenLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softBlur" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>

        {/* ── Glow halos (wide, low opacity — pure atmosphere) ── */}
        <g opacity="0.12" strokeLinecap="round" fill="none">
          <path d="M -80 720 C 150 600, 400 480, 700 400 S 1100 300, 1520 220" stroke="#e9c264" strokeWidth="22" />
          <path d="M 0 600 C 200 500, 500 380, 820 320 S 1250 220, 1500 160" stroke="#e9c264" strokeWidth="18" />
          <path d="M -100 450 C 100 370, 350 280, 700 240 S 1150 160, 1500 100" stroke="#c69327" strokeWidth="16" />
          <path d="M 300 800 C 500 680, 700 540, 900 460 S 1200 360, 1440 300" stroke="#e9c264" strokeWidth="14" />
          <path d="M 600 0 C 650 150, 680 300, 700 400 S 720 550, 750 700" stroke="#c69327" strokeWidth="14" />
        </g>

        {/* ── Primary lines — slightly pulled back opacity ── */}
        <g filter="url(#softBlur)" strokeLinecap="round" fill="none">
          {/* Fan from lower-left */}
          <path d="M -80 720 C 150 600, 400 480, 700 400 S 1100 300, 1520 220" stroke="#e9c264" strokeWidth="1.4" opacity="0.65" />
          <path d="M 0 660 C 180 550, 430 430, 740 360 S 1130 260, 1500 190" stroke="#f0dca0" strokeWidth="1.0" opacity="0.55" />
          <path d="M -60 580 C 160 490, 420 380, 740 320 S 1140 230, 1500 170" stroke="#e9c264" strokeWidth="0.8" opacity="0.50" />
          <path d="M -100 450 C 100 380, 360 290, 700 250 S 1150 170, 1500 110" stroke="#c69327" strokeWidth="1.1" opacity="0.60" />
          <path d="M 0 380 C 180 320, 400 250, 720 210 S 1160 140, 1500 80" stroke="#e9c264" strokeWidth="0.7" opacity="0.45" />
          <path d="M -80 300 C 120 260, 380 200, 700 180 S 1150 120, 1500 60" stroke="#c69327" strokeWidth="0.6" opacity="0.40" />

          {/* From bottom */}
          <path d="M 200 800 C 380 680, 560 540, 760 450 S 1080 340, 1440 270" stroke="#e9c264" strokeWidth="0.9" opacity="0.52" />
          <path d="M 400 800 C 540 700, 680 580, 840 490 S 1120 380, 1440 310" stroke="#c69327" strokeWidth="0.65" opacity="0.38" />
          <path d="M 100 800 C 300 700, 500 570, 760 480 S 1100 370, 1440 290" stroke="#d4a428" strokeWidth="0.55" opacity="0.34" />

          {/* From upper left */}
          <path d="M 0 200 C 200 250, 450 320, 700 360 S 1050 420, 1440 480" stroke="#c69327" strokeWidth="0.7" opacity="0.36" />
          <path d="M 0 120 C 250 180, 500 270, 750 310 S 1100 380, 1440 440" stroke="#8a6116" strokeWidth="0.5" opacity="0.30" />

          {/* Vertical / steep diagonals */}
          <path d="M 600 0 C 640 140, 670 290, 700 400 S 730 540, 760 700" stroke="#e9c264" strokeWidth="0.9" opacity="0.48" />
          <path d="M 680 0 C 710 160, 730 320, 740 440 S 750 580, 760 800" stroke="#c69327" strokeWidth="0.6" opacity="0.32" />
          <path d="M 500 0 C 560 150, 610 300, 660 430 S 710 580, 730 800" stroke="#d4a428" strokeWidth="0.5" opacity="0.28" />

          {/* Cross lines */}
          <path d="M 1440 50 C 1200 150, 950 260, 700 360 S 350 480, 0 580" stroke="#c69327" strokeWidth="0.55" opacity="0.30" />
          <path d="M 1440 150 C 1180 250, 900 360, 660 450 S 320 560, -50 660" stroke="#e9c264" strokeWidth="0.45" opacity="0.26" />
          <path d="M 1440 300 C 1200 380, 950 460, 700 520 S 350 600, 0 680" stroke="#8a6116" strokeWidth="0.40" opacity="0.22" />
        </g>

        {/* ── Hair lines ── */}
        <g strokeLinecap="round" fill="none">
          <path d="M -100 500 C 200 430, 500 350, 820 300 S 1200 230, 1540 180" stroke="#e9c264" strokeWidth="0.32" opacity="0.32" />
          <path d="M -100 560 C 180 490, 480 400, 800 350 S 1220 280, 1540 230" stroke="#c69327" strokeWidth="0.28" opacity="0.28" />
          <path d="M 0 700 C 250 620, 520 510, 810 450 S 1180 370, 1440 320" stroke="#e9c264" strokeWidth="0.28" opacity="0.26" />
          <path d="M 0 160 C 280 210, 560 290, 820 330 S 1180 400, 1440 440" stroke="#c69327" strokeWidth="0.28" opacity="0.22" />
          <path d="M 550 0 C 600 120, 640 260, 680 390 S 710 520, 730 680" stroke="#e9c264" strokeWidth="0.28" opacity="0.24" />
          <path d="M 1440 400 C 1180 460, 920 520, 700 560 S 380 620, 0 680" stroke="#c69327" strokeWidth="0.25" opacity="0.18" />
        </g>

        {/* ── Focal nodes where lines converge ── */}
        <g fill="#e9c264" filter="url(#lineGlow)">
          <circle cx="700" cy="400" r="1.4" opacity="0.75" />
          <circle cx="420" cy="490" r="1.1" opacity="0.58" />
          <circle cx="940" cy="310" r="1.1" opacity="0.58" />
          <circle cx="580" cy="430" r="0.9" opacity="0.44" />
          <circle cx="820" cy="350" r="0.9" opacity="0.44" />
          <circle cx="260" cy="570" r="0.8" opacity="0.36" />
          <circle cx="1080" cy="255" r="0.8" opacity="0.36" />
        </g>
      </svg>
    </div>
  );
}
