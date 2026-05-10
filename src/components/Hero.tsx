import { BackgroundLines } from "./BackgroundLines";
import { VideoPlayer } from "./VideoPlayer";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundLines />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-24 pt-8 text-center sm:px-10 sm:pb-32 sm:pt-12">
        {/* Eyebrow with hairline ornaments */}
        <div className="rise-1 flex items-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/70" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
            Take Action
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/70" />
        </div>

        {/* Headline — Inter Tight, ultra-tight tracking, balanced lines */}
        <h1 className="rise-2 mt-6 max-w-[18ch] font-display text-[40px] font-black uppercase leading-[0.92] tracking-[-0.035em] text-foreground sm:max-w-none sm:text-[68px] md:text-[84px]">
          <span className="block">Make money</span>
          <span className="block">straight from</span>
          <span className="relative inline-block">
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
        <p className="rise-3 mt-12 max-w-[44ch] text-balance text-[15px] leading-[1.7] text-muted sm:text-[17px]">
          If you&apos;re working harder than ever and your paycheck still
          doesn&apos;t reflect it, this is for you.
        </p>

        {/* Video */}
        <div className="rise-4 relative mt-14 w-full sm:mt-16">
          <VideoPlayer />
        </div>

        {/* CTAs */}
        <div className="rise-5 mt-12 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3.5">
          <a
            href="#access"
            className="btn-ghost group inline-flex h-[52px] items-center gap-2.5 rounded-full px-7 text-[14px] font-semibold"
          >
            Get Access Now
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <a
            href="#what-you-get"
            className="btn-primary inline-flex h-[52px] items-center justify-center rounded-full px-7 text-[14px] font-semibold"
          >
            See What You Get
          </a>
        </div>

        {/* Disclaimer with hairline ornaments */}
        <div className="rise-6 mt-8 flex items-center gap-3">
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
