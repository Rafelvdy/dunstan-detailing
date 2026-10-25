"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { buttonClass } from "@/components/ui/ButtonLink";

const sectionIds = [...navLinks.map((link) => link.href.slice(1)), "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const lastY = useRef(0);

  // Hide while scrolling down, show again on the way back up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for whichever section crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const linkClass = (id: string) =>
    `relative py-3.5 transition-colors after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:bg-acc after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 lg:py-1 lg:after:bottom-0 ${
      active === id ? "text-ink after:scale-x-100" : "after:scale-x-0"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-80 flex animate-[bar-in_1s_1.2s_backwards] items-center justify-between border-b border-line bg-bg/85 px-pad py-4 backdrop-blur-md transition-transform duration-500 ${
        hidden && !menuOpen ? "-translate-y-full" : ""
      }`}
    >
      <a href="#home" aria-label={`${site.name} home`}>
        <Image src="/logo.svg" alt={site.name} width={172} height={26} unoptimized priority className="h-[26px] w-auto" />
      </a>

      <button
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
        className="label border border-line px-3.5 py-2 lg:hidden"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-nav"
        aria-label="Primary"
        className={`label absolute inset-x-0 top-full flex-col border-b border-line bg-bg px-pad pb-4 text-mute lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)} className={linkClass(href.slice(1))}>
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`${buttonClass("solid", "mt-3 w-fit !px-4.5 !py-2.5 lg:mt-0")}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
