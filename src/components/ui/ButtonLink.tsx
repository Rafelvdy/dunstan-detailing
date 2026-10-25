import type { ComponentProps } from "react";

type Variant = "outline" | "solid";

const base =
  "inline-flex items-center justify-center border px-5 py-2.5 text-sm font-medium transition-colors duration-200";
const variants: Record<Variant, string> = {
  outline: "border-line-strong text-fg hover:bg-fg hover:text-bg",
  solid: "border-fg bg-fg text-bg hover:bg-transparent hover:text-fg",
};

interface ButtonLinkProps extends ComponentProps<"a"> {
  variant?: Variant;
}

export default function ButtonLink({
  variant = "outline",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
