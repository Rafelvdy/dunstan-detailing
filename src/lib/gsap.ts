import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** Media query passed to gsap.matchMedia so animations are skipped for reduced-motion users. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
