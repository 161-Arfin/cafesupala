import Image from "next/image";
import supalaLogo from "@/docs/sumala_icon.png";

type BrandLockupProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function BrandLockup({ inverted = false, compact = false }: BrandLockupProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={supalaLogo}
        alt=""
        loading={inverted ? "lazy" : "eager"}
        className={`${compact ? "h-11 w-11 md:h-12 md:w-12" : "h-16 w-16"} shrink-0 object-contain ${inverted ? "brightness-0 invert" : ""}`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-heading font-bold uppercase tracking-[.11em] ${compact ? "text-xl md:text-2xl" : "text-2xl"} ${inverted ? "text-white" : "text-primary"}`}>
          Supala
        </span>
        <span className={`mt-1 text-[8px] font-bold uppercase tracking-[.24em] ${inverted ? "text-accent" : "text-muted"}`}>
          Coffee &amp; Space
        </span>
      </span>
    </span>
  );
}
