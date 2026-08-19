import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "text";
};

const variants = {
  primary: "bg-[#1c1c20] text-white border border-white/10 hover:border-accent/40 hover:bg-[#24242a] shadow-lg",
  outline: "border border-[#c89b3c]/60 text-[#c89b3c] hover:bg-[#c89b3c]/10",
  gold: "bg-gradient-to-r from-[#bf8d3b] via-[#dfb658] to-[#eed07c] text-[#121214] font-extrabold shadow-[0_4px_22px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] hover:brightness-110",
  text: "border-b border-accent/80 pb-1 text-accent hover:text-white transition-colors",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const external = typeof props.href === "string" && props.href.startsWith("http");
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-[.18em] transition-all duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

