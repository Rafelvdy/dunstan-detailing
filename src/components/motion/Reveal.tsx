"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, MOTION_OK } from "@/lib/gsap";

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  children?: ReactNode;
}

/** Fades and lifts its content into place when it scrolls into view. */
export default function Reveal({ as: Tag = "div", className, delay = 0, y = 50, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration: 1.1,
        delay,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
      });
    });
    return () => mm.revert();
  }, [y, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/** A hairline that draws itself across the page when scrolled into view. */
export function Rule({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.from(ref.current, {
        scaleX: 0,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 92%" },
      });
    });
    return () => mm.revert();
  }, []);

  return <div ref={ref} aria-hidden className={`h-px origin-left bg-line ${className}`} />;
}
