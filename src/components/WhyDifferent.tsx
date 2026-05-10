const FEATURES = [
  {
    title: "One market, done well",
    description:
      "We focus on gold. Real edge comes from depth, not from chasing 30 signals a day across 10 pairs.",
  },
  {
    title: "Honest in both directions",
    description:
      "Wins are shown. Losses are shown. Nothing buried, nothing cherry-picked. You see the full picture.",
  },
  {
    title: "Founder access, not a wall",
    description:
      "You message me and my team directly. Real answers from people who actually trade — no moderator queue.",
  },
  {
    title: "Built so you outgrow it",
    description:
      "The point is to teach the skill. Most members start by following signals and end up reading the market on their own.",
  },
];

export function WhyDifferent() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background-2/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">

          {/* ── Left: text ── */}
          <div>
            {/* Eyebrow — left-aligned, no hairlines */}
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
              What Sets Us Apart
            </p>

            {/* Headline */}
            <h2 className="mt-3 font-display text-[32px] font-black leading-[1.04] tracking-[-0.03em] text-foreground sm:text-[44px]">
              Why this is{" "}
              <span
                className="gold-text italic"
                style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}
              >
                different
              </span>
            </h2>

            {/* Staccato paragraphs */}
            <div className="mt-7 flex flex-col gap-2.5">
              <p className="text-[14.5px] leading-[1.72] text-muted">
                There are a lot of paid trading groups out there.
              </p>
              <p className="text-[14.5px] leading-[1.72] text-muted">
                Most throw 30 signals a day at you across markets nobody actually specialises in.
              </p>
              <p className="text-[14.5px] leading-[1.72] text-muted">
                Most go quiet the moment a trade goes wrong.
              </p>
              <p className="text-[14.5px] leading-[1.72] text-muted">
                Most leave you reading screenshots you cannot understand without them.
              </p>
            </div>

            <p className="mt-6 font-display text-[16px] font-black tracking-[-0.01em] text-foreground">
              That is not what I built.
            </p>

            <p className="mt-3 text-[14.5px] leading-[1.72] text-muted">
              I built this around how I trade and how I help people every single day —
              with depth, with honesty, and with the goal that you eventually do not need me.
            </p>
          </div>

          {/* ── Right: 2×2 feature grid ── */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-foreground/[0.07] ring-1 ring-foreground/[0.07] shadow-[0_4px_24px_-8px_rgba(14,12,8,0.10)]">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col bg-surface p-5 sm:p-6">
                <p className="font-display text-[13.5px] font-bold text-gold-600">
                  {f.title}
                </p>
                <p className="mt-2 text-[13px] leading-[1.72] text-muted">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing text — full width below ── */}
        <div className="mt-10 border-t border-foreground/[0.08] pt-8 sm:mt-12 lg:max-w-3xl">
          <p className="text-[14.5px] leading-[1.72] text-muted sm:text-[15px]">
            If you are looking for hype, this is not for you.
          </p>
          <p className="mt-3 text-[14.5px] font-semibold leading-[1.68] text-foreground sm:text-[15px]">
            If you are looking for a structured way to learn, follow a system,
            and build something real over time, you are in the right place.
          </p>
        </div>
      </div>
    </section>
  );
}
