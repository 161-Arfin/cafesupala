import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "text";
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary-container",
  outline: "border border-white text-white hover:bg-white hover:text-primary",
  gold: "bg-white text-primary hover:bg-accent hover:text-white",
  text: "border-b border-current pb-1 text-primary hover:text-accent",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const external = typeof props.href === "string" && props.href.startsWith("http");
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-button px-7 py-3 text-[11px] font-bold uppercase tracking-[.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
