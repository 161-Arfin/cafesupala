import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

const galleryThumbnails = [
  { src: "/images/hero-barista.jpg", alt: "Barista Cafeko sedang menyeduh" },
  { src: "/images/lyons-workspace-hd.png", alt: "Suasana ruang kerja dan santai" },
  { src: "/images/lyons-barista-hd.png", alt: "Detail bar kopi Cafeko" },
  { src: "/images/lyons-drinks-hd.png", alt: "Minuman kopi pilihan" },
];

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-16 md:py-24 bg-[#121214] border-t border-white/5"
      aria-labelledby="location-title"
    >
      <Container>
        <div className="reveal mb-10">
          <h2
            id="location-title"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight"
          >
            RUANG DAN LOKASI
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Temukan kenyamanan berkumpul, bekerja, dan menikmati kopi di sudut Babarsari.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Dark Themed Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-[#16161a] min-h-[380px] lg:min-h-[440px] relative">
            <iframe
              title="Lokasi Cafeko Coffee and Space"
              src="https://www.google.com/maps?q=-7.7796125,110.4148143&z=17&output=embed"
              className="absolute inset-0 h-full w-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%] contrast-[110%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Info Panel & Gallery */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#18181c] border border-white/10 space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[.18em] text-accent">
                  Alamat
                </h3>
                <p className="mt-1.5 text-sm text-white/80 leading-relaxed">
                  {business.address}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-[.18em] text-accent">
                  Jam Buka
                </h3>
                <div className="mt-1.5 space-y-1 text-sm text-white/80">
                  {business.hours.map((h) => (
                    <div key={h.days} className="flex justify-between">
                      <span className="text-white/60">{h.days}</span>
                      <span className="font-semibold text-white">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-[.18em] text-accent">
                  Kontak
                </h3>
                <p className="mt-1.5 text-sm text-white/80">
                  0812-3456-7890 • info@cafeko.id
                </p>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-[.18em] text-accent mb-3">
                Gallery
              </h3>
              <div className="grid grid-cols-4 gap-2.5">
                {galleryThumbnails.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden border border-white/10 bg-[#121214] group"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="100px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider rounded-full bg-white/5 border border-white/15 text-white hover:border-accent hover:text-accent transition-colors"
            >
              Buka Petunjuk Arah ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

