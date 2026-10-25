"use client";

import { useEffect, useRef, useState } from "react";

const sources = ["/videos/lambo-hero.web.mp4", "/videos/car-hero.web.mp4"];

/** Two stacked muted videos that cross-fade into each other when one ends. */
export default function HeroVideo() {
  const refs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    refs[active].current?.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleEnded = (index: number) => {
    setActive((index + 1) % sources.length);
    const finished = refs[index].current;
    if (finished) window.setTimeout(() => (finished.currentTime = 0), 600);
  };

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-surface">
      {sources.map((src, i) => (
        <video
          key={src}
          ref={refs[i]}
          src={src}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          onEnded={() => handleEnded(i)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
