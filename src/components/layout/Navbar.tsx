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
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-outline/70 bg-white/95 text-primary backdrop-blur-md transition-shadow duration-300 ${scrolled || open ? "shadow-[0_6px_24px_rgba(0,0,0,.07)]" : "shadow-none"}`}>
      <Container as="nav" aria-label="Navigasi utama" className="flex h-16 items-center justify-between md:h-[72px]">
        <a href="#home" aria-label="Supala Coffee and Space, kembali ke atas" className="relative z-10 shrink-0">
          <BrandLockup compact />
        </a>
        <ul className="ml-auto hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active = activeHref === item.href;
            return <li key={item.href}><a href={item.href} aria-current={active ? "page" : undefined} className={`relative block py-2 text-[11px] font-bold uppercase tracking-[.18em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${active ? "text-accent after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent" : "text-primary hover:text-accent"}`}>{item.label}</a></li>;
          })}
        </ul>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center text-primary lg:hidden">
          <span aria-hidden="true" className="space-y-1.5"><span className="block h-px w-7 bg-current" /><span className="block h-px w-7 bg-current" /><span className="block h-px w-7 bg-current" /></span>
        </button>
      </Container>
      <div id="mobile-menu" className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${open ? "max-h-80" : "max-h-0"}`}>
        <ul className="border-t border-outline/70 px-5 py-2">
          {navigation.map((item) => {
            const active = activeHref === item.href;
            return <li key={item.href}><a href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)} className={`flex min-h-12 items-center border-b border-outline/60 text-xs font-bold uppercase tracking-[.18em] transition-colors ${active ? "text-accent" : "text-primary hover:text-accent"}`}>{item.label}</a></li>;
          })}
        </ul>
      </div>
    </header>
  );
}
