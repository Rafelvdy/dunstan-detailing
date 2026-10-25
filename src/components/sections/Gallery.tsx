"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, MOTION_OK } from "@/lib/gsap";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import { buttonClass } from "@/components/ui/ButtonLink";
import { FEATURED_COUNT, galleryImages, type GalleryImage } from "@/data/gallery";
import { galleryJsonLd } from "@/lib/jsonld";
import Lightbox from "./Lightbox";

/** Grid placement for each featured photo on desktop; below lg they flow into two columns. */
const SLOTS = [
  "max-lg:col-span-2 max-lg:row-span-2 lg:col-span-3 lg:col-start-1 lg:row-span-3 lg:row-start-1",
  "lg:col-start-4 lg:row-span-2 lg:row-start-1",
  "lg:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-1",
  "lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-3",
  "lg:col-start-6 lg:row-span-2 lg:row-start-3",
  "lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-4",
  "lg:col-start-3 lg:row-span-2 lg:row-start-4",
  "lg:col-span-3 lg:col-start-4 lg:row-start-5",
];

const featured = galleryImages.slice(0, FEATURED_COUNT);
const rest = galleryImages.slice(FEATURED_COUNT);

interface TileProps {
  image: GalleryImage;
  index: number;
  className?: string;
  parallax?: boolean;
  onOpen: (index: number) => void;
}

function Tile({ image, index, className = "", parallax = true, onOpen }: TileProps) {
  return (
    <button
      type="button"
      data-tile
      aria-label={`Open photo: ${image.alt}`}
      onClick={() => onOpen(index)}
      className={`group relative cursor-zoom-in overflow-hidden bg-panel text-left ${className}`}
    >
      <div data-inner className={`absolute inset-x-0 ${parallax ? "-inset-y-[7%]" : "inset-y-0"}`}>
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, 50vw"
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
        />
      </div>
      <span className="label absolute bottom-2.5 left-2.5 translate-y-1.5 bg-bg px-2 py-1 text-[11px] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        Fig. {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}

export default function Gallery() {
  const bento = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);
  // The extra photos mount on first open only, so they aren't downloaded while collapsed.
  const [hasOpened, setHasOpened] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray<HTMLElement>("[data-tile]", bento.current).forEach((tile, i) => {
        gsap.from(tile, {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.3,
          ease: "expo.out",
          delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: tile, start: "top 92%" },
        });
        gsap.fromTo(
          tile.querySelector("[data-inner]"),
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: { trigger: tile, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <Section id="gallery" label="02 / Gallery">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />
      <div className="flex items-end justify-between">
        <Reveal as="h2" className="disp text-[clamp(2.3rem,6.2vw,6rem)]">
          Our Work
        </Reveal>
        <span className="label text-mute">{galleryImages.length} photographs</span>
      </div>

      <div
        ref={bento}
        className="mt-11 grid grid-cols-2 auto-rows-[46vw] gap-2.5 lg:auto-rows-[clamp(130px,14.6vw,210px)] lg:grid-cols-6"
      >
        {featured.map((image, i) => (
          <Tile key={image.id} image={image} index={i} className={SLOTS[i]} onOpen={setOpenIndex} />
        ))}
      </div>

      <div
        inert={!showMore}
        onTransitionEnd={() => ScrollTrigger.refresh()}
        className={`grid transition-[grid-template-rows] duration-900 ease-out-expo ${
          showMore ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-2.5 pt-2.5 lg:grid-cols-4">
            {hasOpened &&
              rest.map((image, i) => (
              <Tile
                key={image.id}
                image={image}
                index={FEATURED_COUNT + i}
                parallax={false}
                className="aspect-[3/4]"
                onOpen={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9">
        <button
          type="button"
          aria-expanded={showMore}
          onClick={() => {
            setHasOpened(true);
            setShowMore((open) => !open);
          }}
          className={buttonClass("ghost")}
        >
          {showMore ? "View less" : "View more"}
        </button>
      </div>

      <Lightbox images={galleryImages} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
    </Section>
  );
}
