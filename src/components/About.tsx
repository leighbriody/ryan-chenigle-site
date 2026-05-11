const PORTRAIT_URL =
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85";

const ROUTINE = [
  "Wake up.",
  "Go to work.",
  "Come home exhausted.",
  "Repeat.",
];

const DISCIPLINE = [
  "I learned the charts.",
  "I focused on risk.",
  "I built discipline.",
  "I kept a routine.",
];

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-20 sm:py-28">
      {/* Ambient warm wash so the section reads as a chapter break */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(168,118,27,0.08), transparent 70%), radial-gradient(50% 40% at 100% 100%, rgba(181,49,34,0.05), transparent 70%)",
        }}
      />
      {/* Top hairline divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* Chapter mark */}
        <div className="flex items-center justify-center gap-3.5">
          <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-gold-600 tabular-nums">
            02
          </span>
          <span className="h-px w-8 bg-gold-400/45" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-foreground/55">
            The Story
          </span>
        </div>

        {/* Headline */}
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-[28px] font-black leading-[1.02] tracking-[-0.025em] text-foreground sm:text-[40px] md:text-[48px]">
          From the tanks{" "}
          <span
            className="gold-text italic"
            style={{
              fontFamily: "var(--font-serif), serif",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            to the charts.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[58ch] text-balance text-center text-[14.5px] leading-relaxed text-muted sm:text-[15.5px]">
          The honest version. Not a polished origin story — the actual one.
        </p>

        {/* Two-column body */}
        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
          {/* Photo column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <PortraitCard />
          </div>

          {/* Story column */}
          <div className="flex flex-col gap-8 sm:gap-9">
            {/* Opening — slightly larger lede */}
            <p className="font-display text-[20px] font-bold leading-[1.45] tracking-[-0.01em] text-foreground sm:text-[22px]">
              Before any of this, I was a biogas engineer.
            </p>

            <Paragraph>
              And I do not mean that as some polished little backstory to make
              this sound good.
            </Paragraph>

            <Paragraph>
              I mean I was literally climbing into tanks and standing in shit.
              That was my life.
            </Paragraph>

            <Paragraph>
              I would get home and still feel like the day was stuck to me. My
              clothes smelled. My hands smelled. My hair smelled. Even after a
              shower, it felt like it never fully left.
            </Paragraph>

            <Paragraph>But the worst part was not even the job itself.</Paragraph>

            <Paragraph>
              It was the feeling that my life was already written for me.
            </Paragraph>

            {/* Staccato — the trap */}
            <StaccatoBlock items={ROUTINE} tone="trap" />

            <Paragraph>
              I was raised by a single parent, and from young I always had this
              thing in my head that one day I would make enough money to help
              my family properly and retire my dad.
            </Paragraph>

            <Paragraph>
              But deep down, I knew I was never going to do that from the path
              I was on. So I started looking for a way out.
            </Paragraph>

            <Paragraph>
              At first I did what most people do. I looked for shortcuts. Quick
              wins. Random tips. Anything that felt like an escape.
            </Paragraph>

            <Paragraph subtle>None of that changed anything.</Paragraph>

            {/* Pull quote — the turning point */}
            <PullQuote
              quote="What changed everything was when I stopped treating trading like a fantasy and started treating it like a skill."
              author="Ryan Chenigle"
              role="Founder"
            />

            <Paragraph>Then something clicked. That is when things began to move.</Paragraph>

            <Paragraph>I got serious.</Paragraph>

            {/* Staccato — the discipline */}
            <StaccatoBlock items={DISCIPLINE} tone="growth" />

            <Paragraph>And over time, the results started stacking.</Paragraph>

            {/* Three-up cadence */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {["More confidence.", "More control.", "More consistency."].map(
                (line) => (
                  <div
                    key={line}
                    className="rounded-2xl bg-surface px-4 py-4 text-center ring-1 ring-foreground/[0.06] shadow-[0_2px_12px_-6px_rgba(14,12,8,0.08)] sm:px-5 sm:py-5"
                  >
                    <p className="font-display text-[13px] font-bold leading-snug tracking-[-0.01em] text-foreground sm:text-[14.5px]">
                      {line}
                    </p>
                  </div>
                ),
              )}
            </div>

            {/* Closing kicker */}
            <div className="mt-2 border-t border-foreground/[0.08] pt-8">
              <p className="font-display text-[20px] font-bold leading-[1.4] tracking-[-0.01em] text-foreground sm:text-[24px]">
                Eventually, the life I hated became optional.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                Now I help other people do this properly.
              </p>

              <a
                href="#access"
                className="group btn-ghost mt-7 inline-flex h-11 items-center gap-2.5 rounded-full px-6 text-[13px] font-semibold"
              >
                Work with me
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
        </div>
      </div>
    </section>
  );
}

function Paragraph({
  children,
  subtle = false,
}: {
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <p
      className={`text-[15.5px] leading-[1.8] sm:text-[16.5px] ${
        subtle ? "text-muted italic" : "text-foreground/85"
      }`}
    >
      {children}
    </p>
  );
}

function StaccatoBlock({
  items,
  tone,
}: {
  items: string[];
  tone: "trap" | "growth";
}) {
  const isGrowth = tone === "growth";
  return (
    <div className="relative flex gap-5 py-1 sm:gap-6">
      {/* Vertical accent rail */}
      <span
        aria-hidden
        className="mt-1 w-px shrink-0 self-stretch"
        style={{
          background: isGrowth
            ? "linear-gradient(180deg, rgba(198,147,39,0.55) 0%, rgba(198,147,39,0) 100%)"
            : "linear-gradient(180deg, rgba(14,12,8,0.22) 0%, rgba(14,12,8,0) 100%)",
        }}
      />
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            {isGrowth ? (
              <span
                aria-hidden
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-50 ring-1 ring-gold-200/70"
              >
                <svg
                  className="h-3 w-3 text-gold-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            ) : (
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30"
              />
            )}
            <span
              className={`font-display ${
                isGrowth
                  ? "text-[16px] font-bold tracking-tight text-foreground sm:text-[17px]"
                  : "text-[14px] font-semibold uppercase tracking-[0.16em] text-foreground/70 sm:text-[14.5px]"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PullQuote({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <figure className="relative my-2 overflow-hidden rounded-2xl px-6 py-7 ring-1 ring-gold-200/60 sm:px-8 sm:py-9">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(248,237,209,0.85) 0%, rgba(240,220,160,0.5) 100%)",
        }}
      />
      <div aria-hidden className="grain" />

      {/* Decorative opening quote */}
      <span
        aria-hidden
        className="absolute -top-2 left-4 select-none font-display text-[120px] leading-none text-gold-300/40 sm:left-6 sm:text-[150px]"
        style={{ fontFamily: "var(--font-serif), serif" }}
      >
        &ldquo;
      </span>

      <blockquote
        className="relative gold-text italic"
        style={{
          fontFamily: "var(--font-serif), serif",
          fontWeight: 400,
          fontSize: "clamp(20px, 2.4vw, 26px)",
          lineHeight: 1.4,
          letterSpacing: "-0.005em",
        }}
      >
        {quote}
      </blockquote>

      <figcaption className="relative mt-5 flex items-center gap-3">
        <span className="h-px w-6 bg-gold-400/60" />
        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-gold-700">
          {author}
          <span className="ml-2 font-medium normal-case tracking-normal text-gold-700/70">
            · {role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function PortraitCard() {
  return (
    <div className="relative w-full">
      {/* Soft warm glow behind the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,118,27,0.28), transparent 70%)",
        }}
      />

      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-background-2 ring-1 ring-foreground/10"
        style={{
          boxShadow:
            "0 50px 100px -30px rgba(14,12,8,0.4), 0 20px 40px -20px rgba(14,12,8,0.25)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PORTRAIT_URL}
          alt="Portrait of Ryan Chenigle"
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* warm gradient overlay to tie into palette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,12,8,0) 50%, rgba(14,12,8,0.5) 100%)",
          }}
        />

        <div aria-hidden className="grain" />

        {/* Top-right meta chip */}
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md ring-1 ring-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e6c771]" />
          Founder
        </span>

        {/* Bottom name plate */}
        <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
          <div
            className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 ring-1 ring-white/15 backdrop-blur-md"
            style={{ background: "rgba(14,12,8,0.45)" }}
          >
            <div className="flex flex-col">
              <span className="font-display text-[14px] font-black leading-tight tracking-tight text-white">
                Ryan Chenigle
              </span>
              <span className="text-[11px] leading-tight text-white/70">
                Trader · Educator
              </span>
            </div>
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #f0dca0 0%, #c69327 55%, #8a6116 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.15)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
              >
                <polyline points="3 17 9 11 13 15 21 7" />
                <polyline points="14 7 21 7 21 14" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Caption underneath */}
      <div className="mt-5 flex items-center gap-3">
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold-400/70" />
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.32em] text-gold-600">
          Then &amp; Now
        </p>
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
        From climbing into tanks at sunrise to running a full-time trading
        desk from a laptop. Same person — different life.
      </p>
    </div>
  );
}
