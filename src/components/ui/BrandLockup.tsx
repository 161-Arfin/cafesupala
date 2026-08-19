import Image from "next/image";

type BrandLockupProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function BrandLockup({
  inverted = false,
  compact = false,
}: BrandLockupProps) {
  return (
    <span className="inline-flex items-center gap-2.5 group">
      <span className="relative flex items-center justify-center p-1 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
        <Image
          src="/images/cafeko-logo.png"
          alt="Cafeko Logo"
          width={892}
          height={892}
          unoptimized
          loading={inverted ? "lazy" : "eager"}
          className={`${compact ? "h-7 w-7 md:h-8 md:w-8" : "h-10 w-10"} shrink-0 object-contain brightness-0 invert`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif-heading tracking-[.06em] font-bold ${compact ? "text-lg md:text-xl" : "text-xl"} text-white`}
        >
          cafeko
        </span>
        <span
          className="mt-0.5 text-[8px] font-semibold tracking-[.18em] uppercase text-accent"
        >
          Coffee &amp; Space
        </span>
      </span>
    </span>
  );
}


