import type { ReactNode } from "react";

type Path = {
  icon: ReactNode;
  title: string;
  description: string;
  bullets: string[];
};

const PATHS: Path[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    title: "Extra income on the side",
    description:
      "Some people join because they want more breathing room.",
    bullets: [
      "Help with bills",
      "Stop relying on one payslip",
      "Build something real without blowing your life up overnight",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Something much bigger",
    description:
      "Others join because they are serious about the long game.",
    bullets: [
      "Build the skill properly",
      "Want structure and support",
      "Create real freedom over time",
    ],
  },
];

export function ChooseYourPath() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/70" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
            Choose Your Path
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold-400/70" />
        </div>

        {/* Headline */}
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-[32px] font-black leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[44px] md:text-[50px]">
          This works whether
          <br />
          you want side income
          <br />
          <span
            className="gold-text italic"
            style={{ fontFamily: "var(--font-serif), serif", fontWeight: 400 }}
          >
            or something bigger
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:mt-14">
          {PATHS.map((path, i) => (
            <PathCard key={path.title} path={path} index={i} />
          ))}
        </div>

        {/* Closing paragraph */}
        <p className="mx-auto mt-10 max-w-[50ch] text-balance text-center text-[14.5px] leading-[1.8] text-muted sm:mt-12 sm:text-[15px]">
          Both kinds of people thrive here. Because the foundation is the same.
          A real system. A real process. A real environment to grow in. And when
          you have options, you stop feeling trapped.
        </p>
      </div>
    </section>
  );
}

function PathCard({ path, index }: { path: Path; index: number }) {
  return (
    <div className="relative flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-foreground/[0.07] shadow-[0_4px_24px_-8px_rgba(14,12,8,0.10)] sm:p-7">
      {/* Decorative gold triangle — top edge of card, offset by column */}
      <span
        aria-hidden
        className="absolute -top-[9px]"
        style={{ right: index === 0 ? "28%" : "18%" }}
      >
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M7 10L0 0h14z" fill="#c69327" fillOpacity="0.65" />
        </svg>
      </span>

      {/* Icon chip */}
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-50 text-gold-500 ring-1 ring-gold-200/60">
        <span className="block h-5 w-5">{path.icon}</span>
      </span>

      {/* Title */}
      <h3 className="mt-4 font-display text-[15.5px] font-bold tracking-[-0.01em] text-foreground">
        {path.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        {path.description}
      </p>

      {/* Bullets */}
      <ul className="mt-4 flex flex-col gap-2.5">
        {path.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
            />
            <span className="text-[13px] leading-[1.68] text-foreground/75">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
