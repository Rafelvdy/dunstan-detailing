"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, MOTION_OK } from "@/lib/gsap";

/** A paragraph whose words brighten one by one as it is scrolled through. */
export default function ScrubWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        ref.current!.querySelectorAll("span"),
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i}>{word} </span>
      ))}
    </p>
  );
}
