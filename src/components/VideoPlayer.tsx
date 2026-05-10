"use client";

import { useRef, useState } from "react";

const SAMPLE_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const POSTER_URL =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80";

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
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/10">
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
            className="group absolute inset-0 flex h-full w-full items-end justify-start bg-black/25 transition hover:bg-black/30"
          >
            <span className="absolute left-6 top-5 select-none text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg sm:left-10 sm:top-8 sm:text-5xl md:text-6xl">
              Watch this video
            </span>

            <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-[#e7b748] to-[#a87813] shadow-[0_20px_40px_-10px_rgba(168,120,19,0.7)] ring-1 ring-white/30 transition group-hover:scale-105">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden
              >
                <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5z" />
              </svg>
            </span>

            <span className="absolute bottom-4 right-5 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              Sample preview
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
