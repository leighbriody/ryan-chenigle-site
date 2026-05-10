const ITEMS = [
  {
    label: "System over hype",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    label: "Real-time trade ideas, every trading day",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Direct support from me and my team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    label: "Gold focused",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Education and mindset included",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export function SocialProofBar() {
  return (
    <div className="relative border-y border-foreground/[0.07] bg-background-2/60">
      {/* Left + right fade masks so it feels infinite */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background-2/80 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background-2/80 to-transparent sm:w-24" />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-0 overflow-x-auto px-8 py-5 scrollbar-none sm:px-12 sm:py-6">
        {ITEMS.map((item, i) => (
          <div key={item.label} className="flex shrink-0 items-center gap-0">
            {/* Item */}
            <div className="flex items-center gap-3 px-5 sm:px-8">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-50 text-gold-500 ring-1 ring-gold-200/60">
                <span className="block h-4 w-4">{item.icon}</span>
              </span>
              <span className="max-w-[130px] text-left text-[12.5px] font-medium leading-snug text-foreground/75 sm:max-w-[160px] sm:text-[13px]">
                {item.label}
              </span>
            </div>

            {/* Divider between items — hidden after last */}
            {i < ITEMS.length - 1 && (
              <span className="h-6 w-px shrink-0 bg-foreground/10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
