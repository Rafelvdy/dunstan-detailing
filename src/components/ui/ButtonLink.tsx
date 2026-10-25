import type { ComponentProps } from "react";

export type ButtonVariant = "solid" | "ghost";

const base =
  "label inline-flex items-center gap-3 px-6 py-3.5 font-medium transition-colors duration-300";
const variants: Record<ButtonVariant, string> = {
  solid: "bg-acc text-bg hover:bg-ink",
  ghost: "border border-ink text-ink hover:bg-ink hover:text-bg",
};

/** Class string shared by the anchor and <button> versions of the site's button. */
export const buttonClass = (variant: ButtonVariant = "solid", extra = "") =>
  `${base} ${variants[variant]} ${extra}`;

interface ButtonLinkProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
}

export default function ButtonLink({ variant = "solid", className = "", ...props }: ButtonLinkProps) {
  return <a className={buttonClass(variant, className)} {...props} />;
}
