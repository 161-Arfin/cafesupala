import Image from "next/image";
import { Container } from "@/components/ui/Container";

const gallery = [
  { src: "/images/hero-barista.jpg", alt: "Barista Cafeko bekerja di area bar", className: "row-span-2 md:col-span-6 md:row-span-2" },
  { src: "/images/spanish-latte.jpg", alt: "Minuman racikan Cafeko", className: "md:col-span-3" },
  { src: "/images/hero-cafe-hd.png", alt: "Proses meracik kopi", className: "md:col-span-3" },
  { src: "/images/lyons-workspace-hd.png", alt: "Ruang hangat Cafeko Coffee", className: "md:col-span-3" },
  { src: "/images/manual-brew.jpg", alt: "Detail proses seduh manual brew", className: "md:col-span-3" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#121214] border-t border-white/5">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-accent">Galeri Suasana</span>
          <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
            Setiap Detik di Cafeko
          </h2>
          <span className="mx-auto mt-4 block h-0.5 w-16 bg-accent rounded-full" />
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-12 rounded-3xl overflow-hidden p-2 bg-[#18181c] border border-white/10">
          {gallery.map((item, index) => (
            <figure key={`${item.src}-${index}`} className={`group relative overflow-hidden rounded-2xl ${item.className}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#121214]/20 transition-colors group-hover:bg-transparent" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

