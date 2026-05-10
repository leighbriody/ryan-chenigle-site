export function BackgroundLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-0 h-[820px] w-[1800px] -translate-x-1/2"
        viewBox="0 0 1800 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldLine" x1="0" y1="0" x2="1800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c5921f" stopOpacity="0" />
            <stop offset="0.18" stopColor="#e7b748" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#f0c75c" stopOpacity="0.85" />
            <stop offset="0.82" stopColor="#e7b748" stopOpacity="0.55" />
            <stop offset="1" stopColor="#c5921f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldLineFaint" x1="0" y1="0" x2="1800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c5921f" stopOpacity="0" />
            <stop offset="0.5" stopColor="#d9a93a" stopOpacity="0.4" />
            <stop offset="1" stopColor="#c5921f" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fff7df" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#faf6ee" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>

        <rect width="1800" height="820" fill="url(#glow)" />

        <g filter="url(#soft)" stroke="url(#goldLine)" fill="none" strokeLinecap="round">
          <path d="M -80 240 C 320 180, 520 360, 900 320 S 1500 240, 1880 300" strokeWidth="1.1" opacity="0.85" />
          <path d="M -80 280 C 280 220, 560 400, 900 360 S 1520 300, 1880 340" strokeWidth="0.9" opacity="0.7" />
          <path d="M -80 200 C 360 140, 540 320, 900 280 S 1480 200, 1880 260" strokeWidth="0.8" opacity="0.6" />
          <path d="M -80 340 C 300 300, 580 460, 900 420 S 1500 380, 1880 420" strokeWidth="0.7" opacity="0.55" />
          <path d="M -80 160 C 380 100, 560 280, 900 240 S 1480 160, 1880 220" strokeWidth="0.6" opacity="0.45" />
        </g>

        <g filter="url(#soft)" stroke="url(#goldLineFaint)" fill="none" strokeLinecap="round">
          <path d="M -80 380 C 280 360, 580 520, 900 480 S 1520 460, 1880 500" strokeWidth="0.6" opacity="0.5" />
          <path d="M -80 440 C 320 420, 600 580, 900 540 S 1500 520, 1880 560" strokeWidth="0.5" opacity="0.4" />
          <path d="M -80 500 C 360 480, 620 640, 900 600 S 1520 580, 1880 620" strokeWidth="0.5" opacity="0.35" />
          <path d="M -80 120 C 360 80, 540 240, 900 200 S 1500 120, 1880 180" strokeWidth="0.5" opacity="0.35" />
          <path d="M -80 80 C 380 40, 540 200, 900 160 S 1500 80, 1880 140" strokeWidth="0.4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
