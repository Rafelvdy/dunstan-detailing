"use client";

import { useEffect, useRef, useState } from "react";

const sources = ["/videos/lambo-hero.web.mp4", "/videos/car-hero.web.mp4"];

/** Two stacked muted videos that cross-fade into each other as each one ends. */
export default function HeroVideo() {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    videos.current[active]?.play().catch(() => {});
  }, [active]);

  const handleEnded = (index: number) => {
    setActive((index + 1) % sources.length);
    // Rewind the finished clip once it has faded out.
    window.setTimeout(() => {
      const finished = videos.current[index];
      if (finished) finished.currentTime = 0;
    }, 700);
  };

  return (
    <div aria-hidden className="absolute inset-0">
      {sources.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videos.current[i] = el;
          }}
          src={src}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          onPlaying={() => setPlaying(true)}
          onEnded={() => handleEnded(i)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
            playing && active === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
