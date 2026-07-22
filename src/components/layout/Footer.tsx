import { Container } from "@/components/ui/Container";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary py-10 text-white md:py-12">
      <div className="absolute inset-0 opacity-[.035] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:12px_12px]" />
      <Container className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[.08em]">
              Jam Operasional
            </h2>
            <dl className="mt-3 space-y-2 text-xs leading-6 text-white/70">
              {business.hours.map((item) => (
                <div key={item.days} className="grid grid-cols-[1fr_auto] gap-4">
                  <dt>{item.days}</dt>
                  <dd className="font-semibold tabular-nums text-white">
                    {item.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[.08em]">
              Jelajahi
            </h2>
            <ul className="mt-3 space-y-1.5 text-xs leading-6 text-white/65">
              <li>
                <a href="#menu" className="hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-[.08em]">
              Temui Kami
            </h2>
            <div className="mt-3 text-xs leading-6 text-white/65">
              <p className="font-semibold text-white">
                Supala Coffee and Space
              </p>
              <address className="mt-1 not-italic">{business.address}</address>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <a href="#home" aria-label="Supala Coffee and Space, kembali ke atas">
              <BrandLockup inverted />
            </a>
            <p className="mt-2 max-w-[190px] text-left font-accent text-xs italic leading-5 text-white/65 lg:text-right">
              Kopi, ruang, dan jeda yang baik.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[.12em] text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Supala Coffee and Space</p>
          <p>Informasi menu dan lokasi</p>
        </div>
      </Container>
    </footer>
  );
}
