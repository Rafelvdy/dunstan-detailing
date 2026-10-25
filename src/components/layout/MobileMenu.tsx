"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="border border-line-strong px-4 py-2 text-sm"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-bg"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {navLinks.map(({ label, href }) => (
              <li key={href} className="border-b border-line last:border-b-0">
                <a href={href} onClick={() => setOpen(false)} className="block py-4 text-lg">
                  {label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex border border-line-strong px-5 py-2.5 text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
