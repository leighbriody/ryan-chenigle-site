// Placeholder phone screenshot cards — swap src strings for real screenshots later
type Card = {
  id: number;
  rotate: string;
  height: string;
  bg: string;
  caption: string;
};

const ROW_1: Card[] = [
  { id: 1,  rotate: "rotate-[-1.4deg]", height: "h-[220px]", bg: "#d4e8c2", caption: "Well done, amazing result 🙌" },
  { id: 2,  rotate: "rotate-[0.8deg]",  height: "h-[260px]", bg: "#c2dbb8", caption: "Well done! 🔥" },
  { id: 3,  rotate: "rotate-[-0.5deg]", height: "h-[240px]", bg: "#1a1a1a",  caption: "Well done, amazing result" },
  { id: 4,  rotate: "rotate-[1.2deg]",  height: "h-[200px]", bg: "#d4e8c2", caption: "Since yesterday so good start to the week" },
  { id: 5,  rotate: "rotate-[-0.9deg]", height: "h-[250px]", bg: "#1a1a1a",  caption: "Well Done!" },
  { id: 6,  rotate: "rotate-[0.6deg]",  height: "h-[230px]", bg: "#d4e8c2", caption: "Well done, amazing result" },
  { id: 7,  rotate: "rotate-[-1.1deg]", height: "h-[260px]", bg: "#c2dbb8", caption: "Well done!" },
  { id: 8,  rotate: "rotate-[0.4deg]",  height: "h-[215px]", bg: "#d4e8c2", caption: "125 up for the day, all of signals" },
];

const ROW_2: Card[] = [
  { id: 9,  rotate: "rotate-[0.7deg]",  height: "h-[250px]", bg: "#d4e8c2", caption: "Well Done!" },
  { id: 10, rotate: "rotate-[-1.2deg]", height: "h-[220px]", bg: "#c2dbb8", caption: "Ended happy 😊" },
  { id: 11, rotate: "rotate-[1deg]",    height: "h-[265px]", bg: "#1a1a1a",  caption: "Well Done!" },
  { id: 12, rotate: "rotate-[-0.6deg]", height: "h-[235px]", bg: "#d4e8c2", caption: "Well done, amazing result" },
  { id: 13, rotate: "rotate-[1.3deg]",  height: "h-[210px]", bg: "#1a1a1a",  caption: "Well Done!" },
  { id: 14, rotate: "rotate-[-0.8deg]", height: "h-[255px]", bg: "#d4e8c2", caption: "Well done, amazing result" },
  { id: 15, rotate: "rotate-[0.5deg]",  height: "h-[240px]", bg: "#c2dbb8", caption: "Well Done! 🎉" },
  { id: 16, rotate: "rotate-[-1deg]",   height: "h-[225px]", bg: "#d4e8c2", caption: "£430 day — well done!" },
];

function ScreenshotCard({ card }: { card: Card }) {
  const isDark = card.bg === "#1a1a1a";

  return (
    <div
      className={`relative shrink-0 w-[155px] sm:w-[175px] ${card.height} ${card.rotate} overflow-hidden rounded-[14px] ring-1 ring-black/10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.32)] hover:z-10`}
      style={{ background: card.bg }}
    >
      {/* Simulated phone status bar */}
      <div className={`flex items-center justify-between px-3 pt-3 pb-1 text-[8px] font-medium ${isDark ? "text-white/60" : "text-black/40"}`}>
        <span>9:41</span>
        <span className="flex gap-1">
          <span>▲</span><span>●●●</span>
        </span>
      </div>

      {/* Simulated chat / P&L screenshot content */}
      <div className="flex h-full flex-col gap-1.5 px-2.5 pb-10 pt-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-md ${isDark ? "bg-white/8" : "bg-black/8"}`}
            style={{
              height: `${10 + (i % 3) * 4}px`,
              width: `${55 + (i % 4) * 12}%`,
              alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
            }}
          />
        ))}
      </div>

      {/* "Well done" caption strip at the bottom — mimics the green badge in the screenshots */}
      <div
        className="absolute bottom-0 inset-x-0 px-3 py-2"
        style={{ background: "rgba(80, 160, 60, 0.92)" }}
      >
        <p className="truncate text-[9.5px] font-semibold text-white leading-tight">
          {card.caption}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ cards, direction }: { cards: Card[]; direction: "left" | "right" }) {
  // Duplicate cards so the loop is seamless
  const doubled = [...cards, ...cards];

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 sm:gap-4 w-max ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((card, i) => (
          <ScreenshotCard key={`${card.id}-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}

export function ResultsGallery() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Section header */}
      <div className="mx-auto mb-12 max-w-2xl px-6 text-center sm:mb-16 sm:px-10">
        <h2 className="font-display text-[28px] font-black tracking-[-0.025em] text-foreground sm:text-[38px] md:text-[44px]">
          Wins, progress, and real results
        </h2>
        <p className="mt-3 text-balance text-[14px] leading-relaxed text-muted sm:text-[15px]">
          Screenshots from real members inside the community. The work speaks for itself.
        </p>
      </div>

      {/* Gallery rows */}
      <div className="relative flex flex-col gap-4 sm:gap-5">
        {/* Fade masks on left and right edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-36" />

        <MarqueeRow cards={ROW_1} direction="left" />
        <MarqueeRow cards={ROW_2} direction="right" />
      </div>
    </section>
  );
}
