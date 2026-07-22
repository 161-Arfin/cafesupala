import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export function LocationSection() {
  return (
    <section
      className="bg-surface py-12 md:py-16"
      aria-labelledby="location-title"
    >
      <Container>
        <div className="grid overflow-hidden border border-outline/60 bg-white lg:grid-cols-[.78fr_1.22fr]">
          <div className="reveal flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-accent">
              Lokasi Supala
            </p>
            <h2
              id="location-title"
              className="font-heading text-4xl leading-none text-primary md:text-5xl"
            >
              Tempat ngopi dan ruang singgah.
            </h2>

            <div className="mt-6 border-t border-outline/60 pt-5">
              <p className="text-xs font-bold uppercase tracking-[.14em] text-primary">
                Jam operasional
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Jam buka dapat berubah. Cek status buka dan jam operasional hari
                ini langsung di Google Maps.
              </p>
            </div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-xs font-bold uppercase tracking-[.14em] text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Buka petunjuk arah <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="min-h-[420px] bg-outline/35">
            <iframe
              title="Lokasi Supala Coffee and Space"
              src="https://www.google.com/maps?q=-7.7796125,110.4148143&z=17&output=embed"
              className="h-full min-h-[420px] w-full border-0 grayscale-[.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
