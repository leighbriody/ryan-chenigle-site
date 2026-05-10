import { BackgroundLines } from "./BackgroundLines";
import { VideoPlayer } from "./VideoPlayer";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundLines />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-16 pt-6 text-center sm:px-10 sm:pb-20 sm:pt-8">
        {/* Eyebrow with hairline ornaments */}
        <div className="rise-1 flex items-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/70" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
            Take Action
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/70" />
        </div>

        {/* Headline */}
        <h1 className="rise-2 mt-4 font-display text-[30px] font-black uppercase leading-[0.92] tracking-[-0.03em] text-foreground sm:text-[44px] md:text-[54px] lg:text-[60px]">
          <span className="block whitespace-nowrap">Make money straight from</span>
          <span className="relative mt-1 inline-block sm:mt-1.5">
            <span className="gold-text italic" style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400, letterSpacing: "-0.01em" }}>
              your phone
            </span>
            {/* Refined hand-drawn brush underline */}
            <svg
              aria-hidden
              viewBox="0 0 320 14"
              fill="none"
              className="absolute -bottom-1 left-1/2 h-3 w-[92%] -translate-x-1/2 sm:-bottom-2 sm:h-3.5"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="hero-brush" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#b53122" stopOpacity="0.25" />
                  <stop offset="0.2" stopColor="#d44b32" />
                  <stop offset="0.5" stopColor="#b53122" />
                  <stop offset="0.8" stopColor="#d44b32" />
                  <stop offset="1" stopColor="#b53122" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <path
                d="M4 8 C 70 3, 140 12, 210 6 S 300 4, 316 8"
                stroke="url(#hero-brush)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M10 11 C 80 9, 160 13, 240 10 S 300 11, 312 11"
                stroke="url(#hero-brush)"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </span>
        </h1>

        {/* Subhead — generous leading, balanced, refined */}
        <p className="rise-3 mt-8 max-w-[44ch] text-balance text-[15px] leading-[1.7] text-muted sm:text-[16px]">
          If you&apos;re working harder than ever and your paycheck still
          doesn&apos;t reflect it, this is for you.
        </p>

        {/* Video — constrained width so it reads as a focused element, not a banner */}
        <div className="rise-4 relative mt-10 w-full max-w-[680px] sm:mt-11">
          <VideoPlayer />
        </div>

        {/* CTAs */}
        <div className="rise-5 mt-8 flex w-full flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3">

          {/* Ghost / outline button */}
          <a
            href="#access"
            className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full border border-foreground/15 bg-white/70 px-6 text-[13px] font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:border-foreground/25 hover:bg-white hover:shadow-[0_8px_20px_-8px_rgba(14,12,8,0.2)]"
          >
            Get Access Now
            <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/8 transition-transform duration-200 group-hover:translate-x-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>

          {/* Primary gold CTA */}
          <a
            href="#what-you-get"
            className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "linear-gradient(180deg, #d8ad44 0%, #a8761b 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.18), 0 8px 20px -8px rgba(125,87,18,0.6)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              See What You Get
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 transition-transform duration-200 group-hover:translate-x-0.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            {/* subtle shimmer on hover */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full"
            />
          </a>

        </div>

        {/* Disclaimer with hairline ornaments */}
        <div className="rise-6 mt-6 flex items-center gap-3">
          <span className="h-px w-5 bg-foreground/15" />
          <p className="max-w-md text-[11.5px] leading-relaxed tracking-wide text-muted-2">
            For educational purposes and market commentary. Trading carries risk.
          </p>
          <span className="h-px w-5 bg-foreground/15" />
        </div>
      </div>

      {/* Hairline divider at the bottom of the hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  );
}
