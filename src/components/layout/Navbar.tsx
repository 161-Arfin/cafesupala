import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { BrandLockup } from "@/components/ui/BrandLockup";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -65%", threshold: 0 },
    );

    update();
    window.addEventListener("scroll", update, { passive: true });
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#121214]/92 text-white backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.6)]" : ""}`}>
      <Container as="nav" aria-label="Navigasi utama" className="flex h-16 items-center justify-between">
        <a href="#home" aria-label="Cafeko Coffee and Space, kembali ke atas" className="relative z-10 shrink-0">
          <BrandLockup compact />
        </a>

        <ul className="mx-auto hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active = activeHref === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block py-1 text-[11px] font-semibold uppercase tracking-[.15em] transition-colors duration-200 ${
                    active ? "text-accent font-bold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#reservation"
            className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#c69a52] to-[#eed07c] text-[#121214] shadow-[0_2px_14px_rgba(212,175,55,0.35)] hover:brightness-110 hover:shadow-[0_4px_18px_rgba(212,175,55,0.55)] transition-all"
          >
            BOOKING
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center text-white lg:hidden"
        >
          <span aria-hidden="true" className="space-y-1">
            <span className="block h-0.5 w-5 bg-current rounded-full" />
            <span className="block h-0.5 w-5 bg-current rounded-full" />
            <span className="block h-0.5 w-5 bg-current rounded-full" />
          </span>
        </button>
      </Container>

      <div id="mobile-menu" className={`overflow-hidden bg-[#16161a] border-b border-white/10 transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="px-5 py-3 space-y-2">
          {navigation.map((item) => {
            const active = activeHref === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block py-1.5 text-xs font-bold uppercase tracking-[.18em] transition-colors ${
                    active ? "text-accent" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#c69a52] to-[#eed07c] text-[#121214]"
            >
              BOOKING SEKARANG
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
