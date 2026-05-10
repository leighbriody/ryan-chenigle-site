export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
      <div className="hidden items-center gap-2 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-2">
          Est. 2024
        </span>
      </div>

      <a
        href="/"
        className="group flex flex-col items-center"
        aria-label="Ryan Chenigle home"
      >
        <span className="font-display text-[22px] font-black tracking-[0.22em] text-foreground transition group-hover:text-gold-600">
          RC
        </span>
        <svg
          aria-hidden
          width="56"
          height="6"
          viewBox="0 0 56 6"
          fill="none"
          className="mt-1.5"
        >
          <path
            d="M1 4.2 C 14 1.8, 28 1.2, 55 3.6"
            stroke="url(#hdr-stroke)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="hdr-stroke" x1="0" y1="0" x2="56" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#b53122" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#d44b32" />
              <stop offset="1" stopColor="#b53122" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </a>

      <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full text-foreground/60 transition hover:bg-black/5 hover:text-foreground"
        aria-label="Open menu"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </button>
    </header>
  );
}
