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
    <section id="about" className="section-space bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="reveal">
            <p className="font-accent text-sm italic text-accent">About Us</p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase leading-tight tracking-[.04em] text-primary md:text-5xl">
              Supala Coffee
              <br />
              and Space
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              Supala adalah coffee shop dan ruang singgah di Babarsari. Kami
              menyajikan menu yang sederhana, familiar, dan punya karakter—dari
              kopi klasik hingga racikan signature yang menyegarkan.
            </p>
            <div className="mt-8 border-t border-outline">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[36px_1fr] gap-4 border-b border-outline py-4"
                >
                  <span className="font-accent text-lg italic text-accent">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <Image
              src={siteConfig.images.workspace}
              alt="Suasana Supala Coffee and Space"
              fill
              loading="lazy"
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
