type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Daily market briefs",
    description:
      "Concise morning notes on the setups that matter, delivered before the open.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
  },
  {
    title: "Live trade alerts",
    description:
      "Real-time alerts straight to your phone with entries, stops, and targets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    title: "From-scratch playbook",
    description:
      "A step-by-step framework for going from zero to your first profitable week.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Private community",
    description:
      "Direct access to the team and a network of traders working alongside you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="what-you-get" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-600">
            What you get
          </p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
            Built to fit in your <span className="gold-text">pocket</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Everything you need to learn the markets and act on opportunities,
            wherever you are.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col bg-surface p-7 transition hover:bg-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/60 transition group-hover:bg-gradient-to-b group-hover:from-[#e7b748] group-hover:to-[#a87813] group-hover:text-white group-hover:ring-transparent">
                <span className="block h-5 w-5">{feature.icon}</span>
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          id="access"
          className="relative mt-20 overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center text-white sm:px-14 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(231,183,72,0.25), transparent 70%), radial-gradient(40% 80% at 80% 100%, rgba(192,48,28,0.18), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-200">
              Ready when you are
            </p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
              Your next move starts <span className="gold-text">today</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Get the full playbook, live alerts, and the community for the
              price of a single bad trade.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#"
                className="btn-gold inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Get Access Now
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Talk to the team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
