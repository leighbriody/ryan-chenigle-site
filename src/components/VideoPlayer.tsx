"use client";

import { useRef, useState } from "react";

const SAMPLE_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const POSTER_URL =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <div className="relative w-full">
      {/* Soft warm glow underneath the video for premium depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 -bottom-6 h-12 rounded-full opacity-70 blur-2xl sm:inset-x-16"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168, 118, 27, 0.45), transparent 70%)",
        }}
      />

      <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black ring-1 ring-black/10 shadow-[0_50px_120px_-30px_rgba(14,12,8,0.45),0_20px_50px_-20px_rgba(14,12,8,0.35)]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={SAMPLE_VIDEO_URL}
          poster={POSTER_URL}
          playsInline
          controls={playing}
          preload="metadata"
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play video"
            className="group absolute inset-0 flex h-full w-full"
          >
            {/* cinematic dark gradient — darker at top so the headline reads */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 38%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.55) 100%)",
              }}
            />

            {/* WATCH THIS VIDEO — tighter tracking, refined shadow */}
            <span className="absolute left-6 top-5 max-w-[80%] select-none font-display text-2xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:left-10 sm:top-8 sm:text-4xl md:text-5xl">
              Watch this
              <br />
              video
            </span>

            {/* tiny meta chip in the corner */}
            <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-md ring-1 ring-white/15 sm:right-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e6c771]" />
              Preview
            </span>

            {/* glassy play button with gold ring + ambient halo */}
            <span className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
              <span
                aria-hidden
                className="halo absolute h-[120px] w-[120px] rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(231, 184, 80, 0.55), rgba(231, 184, 80, 0) 70%)",
                }}
              />
              <span className="relative grid h-[88px] w-[88px] place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.5)] transition-transform duration-300 group-hover:scale-[1.04]">
                <span
                  className="grid h-[64px] w-[64px] place-items-center rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #f0dca0 0%, #c69327 55%, #8a6116 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.15)",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden
                    className="ml-[3px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
                  >
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5z" />
                  </svg>
                </span>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
