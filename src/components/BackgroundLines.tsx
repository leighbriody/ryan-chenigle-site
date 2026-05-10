export function BackgroundLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Warm radial wash from top — gives the page depth */}
      <div
        className="absolute inset-x-0 top-0 h-[820px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255, 240, 200, 0.7) 0%, rgba(247, 241, 227, 0) 70%)",
        }}
      />

      {/* Soft golden orb behind the headline area */}
      <div
        className="absolute left-1/2 top-[120px] h-[520px] w-[820px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(231, 184, 80, 0.28), rgba(231, 184, 80, 0.06) 55%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Refined, fewer flowing light streaks — quieter, more elegant */}
      <svg
        className="absolute left-1/2 top-0 h-[860px] w-[1900px] -translate-x-1/2"
        viewBox="0 0 1900 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="streak" x1="0" y1="0" x2="1900" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c69327" stopOpacity="0" />
            <stop offset="0.22" stopColor="#e6c771" stopOpacity="0.45" />
            <stop offset="0.5" stopColor="#f0dca0" stopOpacity="0.7" />
            <stop offset="0.78" stopColor="#e6c771" stopOpacity="0.45" />
            <stop offset="1" stopColor="#c69327" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="streakSoft" x1="0" y1="0" x2="1900" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c69327" stopOpacity="0" />
            <stop offset="0.5" stopColor="#d8ad44" stopOpacity="0.32" />
            <stop offset="1" stopColor="#c69327" stopOpacity="0" />
          </linearGradient>
          <filter id="soft" x="-2%" y="-50%" width="104%" height="200%">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* upper streaks */}
        <g filter="url(#soft)" stroke="url(#streak)" fill="none" strokeLinecap="round">
          <path d="M -100 240 C 380 180, 620 320, 950 290 S 1560 220, 2000 280" strokeWidth="0.9" opacity="0.85" />
          <path d="M -100 200 C 420 150, 600 270, 950 250 S 1520 180, 2000 230" strokeWidth="0.7" opacity="0.6" />
          <path d="M -100 290 C 360 240, 640 380, 950 350 S 1560 290, 2000 340" strokeWidth="0.7" opacity="0.55" />
        </g>

        {/* lower very faint streaks */}
        <g filter="url(#soft)" stroke="url(#streakSoft)" fill="none" strokeLinecap="round">
          <path d="M -100 380 C 380 360, 660 480, 950 450 S 1560 430, 2000 470" strokeWidth="0.55" opacity="0.45" />
          <path d="M -100 440 C 400 420, 680 540, 950 510 S 1560 490, 2000 530" strokeWidth="0.5" opacity="0.35" />
          <path d="M -100 150 C 420 110, 600 230, 950 210 S 1520 140, 2000 190" strokeWidth="0.5" opacity="0.35" />
        </g>
      </svg>

      {/* Film grain — adds tactile premium feel */}
      <div className="grain" />
    </div>
  );
}
