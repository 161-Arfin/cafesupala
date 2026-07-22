import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const scrollFrame = useRef<number | null>(null);
  const scrollBehaviorBeforeAnimation = useRef("");

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    if (scrollFrame.current !== null) {
      cancelAnimationFrame(scrollFrame.current);
      document.documentElement.style.scrollBehavior = scrollBehaviorBeforeAnimation.current;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startY = window.scrollY;
    const navbarOffset = href === "#top" ? 0 : 72;
    const targetY = href === "#top" ? 0 : target.getBoundingClientRect().top + startY - navbarOffset;
    const distance = targetY - startY;

    window.history.pushState(null, "", href);
    setActiveHref(href);
    setOpen(false);

    if (reduceMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    const duration = Math.min(1300, Math.max(700, Math.abs(distance) * 0.16));
    const startedAt = performance.now();
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    scrollBehaviorBeforeAnimation.current = previousScrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        scrollFrame.current = requestAnimationFrame(animate);
      } else {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        scrollFrame.current = null;
      }
    };

    scrollFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      if (scrollFrame.current !== null) {
        cancelAnimationFrame(scrollFrame.current);
        document.documentElement.style.scrollBehavior = scrollBehaviorBeforeAnimation.current;
      }
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-primary/60 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_10px_36px_rgba(25,10,8,.16)] backdrop-blur-2xl backdrop-saturate-[175%]">
      <Container
        as="nav"
        aria-label="Primary navigation"
        className="flex h-16 items-center justify-between gap-4 lg:h-[72px]"
      >
        <a
          href="#top"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 text-white"
          aria-label={`${siteConfig.name} home`}
          onClick={(event) => scrollToSection(event, "#top")}
        >
          <Image src={siteConfig.images.logo} alt="Logo LYON’S Café dan Co-Working Space" width={44} height={44} priority className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-[-5deg] lg:h-11 lg:w-11" />
          <span className="block min-w-0"><strong className="block truncate font-heading text-base leading-none sm:text-lg md:text-xl">LYON’S</strong><small className="mt-1 block truncate text-[6px] uppercase tracking-[.16em] text-white/55 sm:text-[7px] sm:tracking-[.2em]">Café &amp; Co-Working</small></span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = activeHref === item.href;
            return (
            <li key={item.href}>
              <a
                className={`group/nav relative block px-1 py-3 text-[13px] font-medium transition-colors duration-300 ${active ? "text-accent" : "text-white/65 hover:text-white"}`}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={(event) => scrollToSection(event, item.href)}
              >
                {item.label}
                <span className={`absolute inset-x-1 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`} aria-hidden="true" />
              </a>
            </li>
          )})}
        </ul>
        <div className="hidden lg:block">
          <Button href={siteConfig.links.whatsapp} variant="gold" className="min-h-9 rounded-full px-4 py-2 text-xs">
            Hubungi kami
          </Button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-5 w-6" aria-hidden="true"><span className={`absolute left-0 top-1 h-px w-6 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`absolute left-0 top-2.5 h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} /></span>
        </button>
      </Container>
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`grid origin-top overflow-hidden bg-primary/75 backdrop-blur-2xl transition-[grid-template-rows,opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${open ? "grid-rows-[1fr] border-t border-white/10 opacity-100 scale-y-100" : "pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0 scale-y-90"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="px-5 pb-4">
            {navigation.map((item) => {
              const active = activeHref === item.href;
              return (
              <li key={item.href}>
                <a
                  className={`flex min-h-12 items-center justify-between border-b border-white/10 py-3 text-sm transition-colors ${active ? "text-accent" : "text-white/75"}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => scrollToSection(event, item.href)}
                >
                  {item.label}
                  <span className={`h-1.5 w-1.5 rounded-full bg-accent transition-opacity ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
                </a>
              </li>
            )})}
          </ul>
        </div>
      </div>
    </header>
  );
}
