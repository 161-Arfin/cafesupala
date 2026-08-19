import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const highlights = [
  {
    number: "01",
    title: "Coffee",
    description:
      "Classic, flavoured, dan signature drinks untuk berbagai selera.",
  },
  {
    number: "02",
    title: "Space",
    description:
      "Ruang singgah untuk ngobrol, mengerjakan sesuatu, atau menikmati jeda.",
  },
  {
    number: "03",
    title: "Babarsari",
    description:
      "Berada di Jalan Babarsari, Caturtunggal, Sleman, Daerah Istimewa Yogyakarta.",
  },
];

export function AboutUsSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#151518] border-t border-white/5">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-accent">About Us</span>
            <h2 className="mt-2 font-serif-heading text-4xl sm:text-5xl font-bold text-white uppercase leading-tight">
              Cafeko Coffee
              <br />
              and Space
            </h2>
            <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
              Cafeko adalah coffee shop dan ruang singgah di Babarsari. Kami
              menyajikan menu yang sederhana, familiar, dan punya karakter—dari
              kopi klasik hingga racikan signature yang menyegarkan.
            </p>
            <div className="mt-8 border-t border-white/10">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-white/10 py-5"
                >
                  <span className="font-serif-heading text-xl font-bold text-accent">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif-heading text-lg font-bold uppercase text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={siteConfig.images.workspace}
              alt="Suasana Cafeko Coffee and Space"
              fill
              loading="lazy"
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151518]/60 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

