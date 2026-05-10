const WITHOUT_BULLETS = [
  "Entering too early",
  "Entering too late",
  "Risking too much on a single trade",
  "Panicking when price moves against them",
  "Chasing losses to try and recover",
  "Letting emotion drive every decision",
];

const INSIDE_BULLETS: { bold: string; rest: string }[] = [
  {
    bold: "Context",
    rest: "so you understand why a setup matters, not just what it looks like",
  },
  {
    bold: "Guidance",
    rest: "so you know what to focus on and what to ignore",
  },
  {
    bold: "Support",
    rest: "so you are never stuck trying to figure it out alone",
  },
  {
    bold: "A framework",
    rest: "that helps you stop moving like an amateur and start trading with structure",
  },
];

export function WhyMostFail() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      {/* Subtle section bg wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background-2/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent/40" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-accent">
            Why Most Fail
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-accent/40" />
        </div>

        {/* Headline */}
        <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-[32px] font-black leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[44px] md:text-[50px]">
          Why most people lose
          <br />
          when they try to{" "}
          <span
            className="italic"
            style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}
          >
            do this alone
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-5 max-w-[46ch] text-balance text-center text-[14.5px] leading-relaxed text-muted sm:text-[15px]">
          Most people do not fail because they are stupid. They fail because
          they are guessing.
        </p>

        {/* Comparison panel */}
        <div className="relative mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2">

          {/* WITHOUT card */}
          <div
            className="relative flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-foreground/[0.07] shadow-[0_4px_24px_-8px_rgba(14,12,8,0.10)] sm:p-7"
            style={{ transform: "rotate(-0.8deg)" }}
          >
            {/* Red triangle top-left — pointing down */}
            <span aria-hidden className="absolute -top-[9px] left-7">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M7 10L0 0h14z" fill="#b53122" fillOpacity="0.65" />
              </svg>
            </span>

            {/* Label */}
            <div className="flex items-center gap-2">
              <svg
                className="h-3.5 w-3.5 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Without Structure
              </p>
            </div>

            {/* Bullets */}
            <ul className="mt-4 flex flex-col gap-2.5">
              {WITHOUT_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                  />
                  <span className="text-[13px] leading-[1.68] text-foreground/75">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Closing note */}
            <p className="mt-5 border-t border-foreground/[0.07] pt-4 text-[12.5px] leading-relaxed text-muted">
              Because they have no structure, every trade feels heavier than it
              should.
            </p>

            {/* Red bottom accent triangle */}
            <span aria-hidden className="absolute -bottom-[9px] left-7">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M7 0L14 10H0z" fill="#b53122" fillOpacity="0.55" />
              </svg>
            </span>
          </div>

          {/* VS badge — absolute center */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:flex"
          >
            <div
              className="grid h-11 w-11 place-items-center rounded-full ring-4 ring-background-2/80"
              style={{
                background: "#0e0c08",
                boxShadow: "0 4px 16px -4px rgba(14,12,8,0.45)",
              }}
            >
              <span className="font-display text-[11px] font-black tracking-[0.06em] text-white">
                VS
              </span>
            </div>
          </div>

          {/* INSIDE RC card */}
          <div
            className="relative flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-foreground/[0.07] shadow-[0_4px_24px_-8px_rgba(14,12,8,0.10)] sm:p-7"
            style={{ transform: "rotate(0.8deg)" }}
          >
            {/* Gold triangle — top right */}
            <span aria-hidden className="absolute -top-[9px] right-7">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M7 10L0 0h14z" fill="#c69327" fillOpacity="0.65" />
              </svg>
            </span>

            {/* Label */}
            <div className="flex items-center gap-2">
              <svg
                className="h-3.5 w-3.5 text-gold-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600">
                Inside RC
              </p>
            </div>

            {/* Intro */}
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              Inside Trading with Ryan, you are not just getting trade ideas.
              You are getting:
            </p>

            {/* Bold-word bullets */}
            <ul className="mt-4 flex flex-col gap-3">
              {INSIDE_BULLETS.map(({ bold, rest }) => (
                <li key={bold} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  />
                  <span className="text-[13px] leading-[1.68] text-foreground/80">
                    <strong className="font-semibold text-foreground">
                      {bold}
                    </strong>{" "}
                    {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center sm:mt-14">
          <a
            href="#access"
            className="group btn-primary inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-[13px] font-semibold"
          >
            Get Access Now
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5">
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
    </section>
  );
}
