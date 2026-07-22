import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const galleryImages = [
  { src: siteConfig.images.barista, alt: "Barista LYON’S meracik minuman di area bar", label: "Craft", className: "col-span-2 row-span-2 md:col-span-7 md:row-span-2", imageClassName: "object-center", captionClassName: "" },
  { src: siteConfig.images.workspace, alt: "Area coworking LYON’S dengan suasana hangat", label: "Workspace", className: "row-span-2 md:col-span-5 md:row-span-1", imageClassName: "object-[42%_center]", captionClassName: "" },
  { src: siteConfig.images.drinks, alt: "Pilihan minuman segar dari LYON’S Café", label: "Coffee", className: "md:col-span-5", imageClassName: "object-center", captionClassName: "max-md:hidden" },
  { src: siteConfig.images.hero, alt: "Suasana hangat di meja bar LYON’S Café", label: "Moments", className: "md:col-span-12", imageClassName: "object-[78%_center] md:object-center", captionClassName: "max-md:hidden" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-space overflow-hidden bg-primary text-white">
      <Container>
        <div className="reveal mb-10 flex flex-col gap-6 border-b border-white/15 pb-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-accent">Galeri LYON’S</p><h2 className="mt-4 max-w-2xl font-heading text-4xl font-medium leading-none sm:text-5xl lg:text-6xl">Lihat lebih dekat. Rasakan suasananya.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/55">Kopi, ruang kerja, dan momen yang hidup setiap hari di LYON’S.</p>
        </div>

        <div className="grid auto-rows-36 grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-12 md:gap-4 lg:auto-rows-[300px]">
          {galleryImages.map((image) => (
            <figure key={image.label} className={`group reveal relative overflow-hidden rounded-card border border-white/10 bg-primary-container ${image.className}`}>
              <Image src={image.src} alt={image.alt} fill loading="lazy" quality={100} sizes="(min-width: 768px) 60vw, (min-width: 420px) 50vw, 100vw" className={`object-cover transition-transform duration-700 group-hover:scale-[1.025] ${image.imageClassName}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
              <figcaption className={`absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[.2em] text-white md:bottom-6 md:left-6 md:text-xs ${image.captionClassName}`}><span className="mr-2 inline-block h-px w-6 align-middle bg-accent md:mr-3 md:w-8" />{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
