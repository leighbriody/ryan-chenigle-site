import { BackgroundLines } from "./BackgroundLines";
import { VideoPlayer } from "./VideoPlayer";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundLines />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-20 pt-10 text-center sm:px-10 sm:pb-28 sm:pt-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-600">
          Take Action
        </p>

        <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Make money straight from
          <span className="relative mt-2 block">
            <span className="gold-text">your phone</span>
            <span
              aria-hidden
              className="gold-underline absolute -bottom-2 left-1/2 h-[5px] w-[62%] -translate-x-1/2 rounded-full opacity-90 sm:-bottom-3 sm:h-[6px]"
            />
          </span>
        </h1>

        <p className="mt-10 max-w-md text-balance text-base leading-relaxed text-muted sm:text-lg">
          If you&apos;re working harder than ever and your paycheck still
          doesn&apos;t reflect it, this is for you.
        </p>

        <div className="relative mt-12 w-full sm:mt-14">
          <VideoPlayer />
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#access"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md"
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
            className="btn-gold inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            See What You Get
          </a>
        </div>

        <p className="mt-6 max-w-sm text-xs leading-relaxed text-muted/80">
          For educational purposes and market commentary. Trading carries risk.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
