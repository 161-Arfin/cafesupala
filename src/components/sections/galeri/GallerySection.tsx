import Image from "next/image";
import { Container } from "@/components/ui/Container";

const products = [
  { name: "Arana", type: "Flavoured Coffee · 25K", note: "Espresso, milk cream, dan aren", image: "/images/lyons-drinks-hd.png" },
  { name: "Paradise Punch", type: "Signature · 28K", note: "Cold brew, orange, dan soda", image: "/images/lyons-barista-hd.png" },
  { name: "Endless Love", type: "Signature · 28K", note: "Chocolate drink dengan tekstur crunchy", image: "/images/hero-cafe-hd.png" },
  { name: "Sunset Wave", type: "Signature · 28K", note: "Orange dan yakult yang menyegarkan", image: "/images/lyons-workspace-hd.png" },
];

const gallery = [
  { src: "/images/lyons-barista-hd.png", alt: "Barista Supala bekerja di area bar", className: "row-span-2 md:col-span-6 md:row-span-2" },
  { src: "/images/lyons-drinks-hd.png", alt: "Minuman racikan Supala", className: "md:col-span-3" },
  { src: "/images/hero-cafe-hd.png", alt: "Proses meracik kopi", className: "md:col-span-3" },
  { src: "/images/lyons-workspace-hd.png", alt: "Ruang hangat Supala Coffee", className: "md:col-span-3" },
  { src: "/images/lyons-barista-hd.png", alt: "Detail proses seduh", className: "md:col-span-3" },
];

export function GallerySection() {
  return (
    <>
      <section className="section-space bg-surface">
        <Container>
          <div className="reveal text-center">
            <p className="font-accent text-sm italic text-accent">Supala Picks</p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-[.04em] text-primary md:text-5xl">Mulai dari Favorit Ini</h2>
            <span className="mx-auto mt-5 block h-px w-24 bg-accent" />
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="reveal group">
                <div className="relative aspect-square overflow-hidden bg-background">
                  <Image src={product.image} alt={`Minuman ${product.name}`} fill loading="lazy" sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-0 top-0 bg-primary px-3 py-2 text-[8px] font-bold uppercase tracking-[.16em] text-white">Supala Pick</span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase text-primary">{product.name}</h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-accent">{product.type}</p>
                <p className="mt-2 text-xs text-muted">{product.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="gallery" className="bg-primary">
        <div className="grid auto-rows-[180px] grid-flow-row-dense grid-cols-2 md:auto-rows-[300px] md:grid-cols-12">
          {gallery.map((item, index) => (
            <figure key={`${item.src}-${index}`} className={`group reveal relative overflow-hidden ${item.className}`}>
              <Image src={item.src} alt={item.alt} fill loading="lazy" sizes="(min-width:768px) 50vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
