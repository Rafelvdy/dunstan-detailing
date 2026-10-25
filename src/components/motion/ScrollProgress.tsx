"use client";

import { useEffect, useRef } from "react";

/** Thin accent line across the top that fills as the page is scrolled. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed left-0 top-0 z-[90] h-0.5 w-full origin-left scale-x-0 bg-acc"
    />
  );
}
