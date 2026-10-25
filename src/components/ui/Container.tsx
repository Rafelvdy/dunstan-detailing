import type { ComponentProps } from "react";

export default function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`} {...props} />;
}
