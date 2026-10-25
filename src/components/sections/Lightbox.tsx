"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

const navButton =
  "label absolute border border-line bg-bg px-4 py-3 transition-colors hover:border-acc hover:text-acc";

/** Full-screen photo viewer built on the native <dialog> (focus trap and Esc come for free). */
export default function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const image = index === null ? null : images[index];

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (index !== null && !el.open) el.showModal();
    if (index === null && el.open) el.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const step = (delta: number) => onChange((index + delta + images.length) % images.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onChange]);

  const go = (delta: number) => index !== null && onChange((index + delta + images.length) % images.length);

  return (
    <dialog
      ref={dialog}
      data-lenis-prevent
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && onClose()}
      className="m-0 size-full max-h-none max-w-none items-center justify-center bg-bg/95 p-pad text-ink backdrop:bg-transparent open:flex"
    >
      {image && index !== null && (
        <>
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 900px) 900px, 92vw"
            className="max-h-[84vh] w-auto max-w-[min(92vw,900px)] border border-line object-contain"
          />
          <p className="label absolute bottom-pad left-pad max-w-[60ch] text-mute max-lg:hidden">
            Fig. {String(index + 1).padStart(2, "0")} — {image.title}
          </p>
          <button type="button" autoFocus onClick={onClose} className={`${navButton} right-pad top-pad`}>
            Close
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className={`${navButton} left-pad top-1/2 max-lg:bottom-pad max-lg:top-auto max-lg:left-auto max-lg:right-[calc(var(--spacing-pad)+90px)]`}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className={`${navButton} right-pad top-1/2 max-lg:bottom-pad max-lg:top-auto`}
          >
            →
          </button>
        </>
      )}
    </dialog>
  );
}
