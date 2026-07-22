import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { footerGroups } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-white md:py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.8fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5 font-heading text-2xl font-semibold">
              <Image src={siteConfig.images.logo} alt="Logo LYON’S Café dan Co-Working Space" width={48} height={48} loading="lazy" className="h-11 w-11 object-contain" />
              LYON’S
            </a>
            <p className="mt-3 max-w-md text-xs leading-6 text-white/55">Café dan co-working space 24 jam di Sleman untuk bekerja, bertemu, dan menikmati kopi.</p>
            <div className="mt-4 flex items-center gap-2" aria-label="Media sosial LYON’S segera tersedia">
              <span title="Instagram — segera tersedia" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/55" role="img" aria-label="Instagram, tautan segera tersedia">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span title="Facebook — segera tersedia" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/55" role="img" aria-label="Facebook, tautan segera tersedia">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V10H8.2v3h2.6v8h2.9Z" />
                </svg>
              </span>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-accent">{group.title}</h2>
              <ul className="space-y-2">
                {group.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return <li key={link.label}><a className="text-xs text-white/60 transition-colors hover:text-accent" href={link.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{link.label}</a></li>;
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 border-t border-white/10 pt-5">
          <p className="text-[10px] font-medium leading-5 text-white/60">Website Concept for Demonstration Purposes. Not an official Lyon&apos;s Cafe website.</p>
          <div className="mt-2 flex flex-col gap-2 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} LYON’S Café &amp; Co-Working Space.</p>
            <p>Buka 24 jam · Monjali, Sleman</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
