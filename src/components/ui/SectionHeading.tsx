import type { ComponentProps } from "react";

export default function SectionHeading({ className = "", ...props }: ComponentProps<"h2">) {
  return (
    <h2 className={`text-3xl md:text-5xl ${className}`} {...props} />
  );
}
