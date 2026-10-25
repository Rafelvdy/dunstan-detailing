"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, MOTION_OK } from "@/lib/gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import HeroVideo from "./HeroVideo";

const FIG_LABEL = "Fig. 01 — Lamborghini Urus";
const TITLE_LINES = ["Every Car,", "Expertly", "Detailed"];
const tick = "absolute size-[22px] border-acc";

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const fig = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const q = gsap.utils.selector(scope);
      const typed = { n: 0 };
      const scrollTo = (trigger: gsap.DOMTarget, vars: gsap.TweenVars, start: string, end: string) =>
        gsap.to(trigger, { ease: "none", ...vars, scrollTrigger: { trigger: scope.current, start, end, scrub: true } });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .set(q("[data-frame]"), { clipPath: "inset(14% 10% 14% 10%)" })
        .to(q("[data-frame]"), { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" })
        .from(q("[data-poster]"), { scale: 1.3, duration: 2 }, 0)
        .from(q("[data-tick]"), { scale: 0, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.9)
        .from(q("[data-line]"), { yPercent: 112, duration: 1.2, stagger: 0.12 }, 0.85)
        .from(q("[data-fade]"), { opacity: 0, y: 16, duration: 0.9, stagger: 0.12 }, 1.5)
        .to(
          typed,
          {
            n: FIG_LABEL.length,
            duration: 1.1,
            ease: "none",
            onUpdate: () => {
              if (fig.current) fig.current.textContent = FIG_LABEL.slice(0, Math.round(typed.n));
            },
          },
          1.5,
        );

      scrollTo(q("[data-media]"), { yPercent: 10 }, "top top", "bottom top");
      scrollTo(q("[data-title]"), { yPercent: -14, opacity: 0 }, "45% top", "bottom 15%");
      scrollTo(q("[data-hint]"), { opacity: 0 }, "top -5%", "top -15%");
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={scope} id="home" className="px-pad pt-[86px]">
      <div
        data-frame
        className="relative h-[calc(100svh-112px)] min-h-[620px] overflow-hidden border border-line"
      >
        <div data-media className="absolute inset-x-0 -inset-y-[8%]">
          <div data-poster className="absolute inset-0">
            <Image
              src="/images/gallery/8a.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_58%] grayscale-[.2]"
            />
          </div>
          <HeroVideo />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-bg/20 to-bg/35" />

        <i data-tick className={`${tick} left-4 top-4 border-l-2 border-t-2`} />
        <i data-tick className={`${tick} right-4 top-4 border-r-2 border-t-2`} />
        <i data-tick className={`${tick} bottom-4 left-4 border-b-2 border-l-2`} />
        <i data-tick className={`${tick} bottom-4 right-4 border-b-2 border-r-2`} />
        <div ref={fig} className="label absolute left-[46px] top-[30px] text-ink/80">
          {FIG_LABEL}
        </div>

        <h1
          data-title
          aria-label="Every Car, Expertly Detailed"
          className="disp absolute bottom-[92px] left-[clamp(24px,3.6vw,52px)] text-[clamp(2.7rem,9.4vw,9.6rem)] lg:bottom-[clamp(30px,4.4vw,60px)]"
        >
          {TITLE_LINES.map((line) => (
            <span key={line} aria-hidden className="block overflow-hidden pb-[.04em]">
              <span data-line className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="absolute bottom-[30px] left-6 lg:bottom-[clamp(30px,4.4vw,60px)] lg:left-auto lg:right-[clamp(24px,3.6vw,52px)]">
          <div data-fade>
            <ButtonLink href="#contact">
              Contact <span aria-hidden>→</span>
            </ButtonLink>
          </div>
        </div>

        <div data-hint className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
          <div data-fade className="label flex flex-col items-center gap-2 text-ink/80">
            <span>Scroll</span>
            <i className="block h-[34px] w-px animate-[drip_2s_infinite] bg-linear-to-b from-ink to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
