import type { ReactNode } from "react";
import { Rule } from "@/components/motion/Reveal";

interface SectionProps {
  id?: string;
  label?: string;
  className?: string;
  children: ReactNode;
}

/** Page section with the site's standard gutter, top spacing and drawn hairline. */
export default function Section({ id, label, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`px-pad pt-section ${className}`}>
      <Rule className="mb-9" />
      {label && <div className="label mb-4 text-acc">{label}</div>}
      {children}
    </section>
  );
}
