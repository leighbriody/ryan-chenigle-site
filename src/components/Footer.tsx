export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-10">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-black tracking-[0.18em] text-foreground">
            RC
          </span>
          <span className="gold-underline h-[2px] w-8 rounded-full opacity-90" />
        </div>

        <p className="max-w-md text-center text-xs leading-relaxed text-muted/80 sm:text-left">
          For educational purposes and market commentary. Trading carries risk.
          Past performance is not indicative of future results.
        </p>

        <div className="flex items-center gap-5 text-xs font-medium text-muted">
          <a href="#" className="transition hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition hover:text-foreground">
            Terms
          </a>
          <a href="#" className="transition hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
