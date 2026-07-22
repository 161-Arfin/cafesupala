import { useCallback, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { googleRating, testimonials } from "@/data/testimonials";

function Stars() {
  return <span className="tracking-[.16em] text-accent" aria-label="5 dari 5 bintang">★★★★★</span>;
}

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);

  const centerCarousel = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollLeft = carousel.scrollWidth / 3;
  }, []);

  const handleLoopScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        const segmentWidth = carousel.scrollWidth / 3;

        if (carousel.scrollLeft <= segmentWidth * 0.5) {
          carousel.scrollLeft += segmentWidth;
        } else if (carousel.scrollLeft >= segmentWidth * 1.5) {
          carousel.scrollLeft -= segmentWidth;
        }
      }

      scrollFrameRef.current = null;
    });
  }, []);

  useEffect(() => {
    centerCarousel();
    window.addEventListener("resize", centerCarousel);

    return () => {
      window.removeEventListener("resize", centerCarousel);
      if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [centerCarousel]);

  return (
    <section className="overflow-hidden bg-surface py-20 md:py-28 lg:py-32" aria-labelledby="testimonial-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-accent">Ulasan Google</p>
            <h2 id="testimonial-heading" className="mt-4 max-w-lg font-heading text-4xl font-semibold leading-[.98] text-primary sm:text-5xl lg:text-6xl">Tempat nyaman untuk tetap produktif.</h2>
            <div className="mt-8 flex items-end gap-4">
              <strong className="font-heading text-7xl leading-none text-primary">{googleRating.score}</strong>
              <div className="pb-1"><Stars /><p className="mt-1 text-sm text-muted">{googleRating.reviewCount} {googleRating.sourceLabel}</p></div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.16em] text-muted lg:hidden"><span className="h-px w-8 bg-accent" /> Geser terus untuk melihat lainnya</div>
            <div ref={carouselRef} onScroll={handleLoopScroll} className="-mr-5 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-3 pr-5 [scrollbar-width:none] md:-mr-8 md:pr-8 lg:mr-0 lg:pr-0 [&::-webkit-scrollbar]:hidden" aria-label="Carousel ringkasan ulasan Google yang dapat digeser tanpa batas">
              {[0, 1, 2].flatMap((copyIndex) =>
                testimonials.map((item, index) => (
                  <article key={`${copyIndex}-${item.title}`} aria-hidden={copyIndex !== 1} className="reveal min-h-60 min-w-[84%] snap-start border-t border-outline bg-background p-6 sm:min-w-[47%] lg:min-w-[31%]" style={{ transitionDelay: `${index * 70}ms` }}>
                    <Stars />
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                    <p className="mt-6 text-[9px] font-semibold uppercase tracking-[.16em] text-accent">Ringkasan ulasan publik</p>
                  </article>
                )),
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-outline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-muted">Geser kartu dengan jari untuk membaca highlight lainnya. Rating dapat berubah mengikuti Google Maps.</p>
          <a href={siteConfig.links.maps} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border-b border-primary text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent">Lihat semua ulasan di Google Maps ↗</a>
        </div>
      </Container>
    </section>
  );
}
