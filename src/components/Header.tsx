export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
      <div className="w-10" aria-hidden />

      <a
        href="/"
        className="flex flex-col items-center"
        aria-label="Ryan Chenigle home"
      >
        <span className="font-display text-2xl font-black tracking-[0.18em] text-foreground">
          RC
        </span>
        <span
          className="gold-underline mt-1 h-[3px] w-12 rounded-full opacity-90"
          aria-hidden
        />
      </a>

      <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:bg-black/5 hover:text-foreground"
        aria-label="Open menu"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>
    </header>
  );
}
