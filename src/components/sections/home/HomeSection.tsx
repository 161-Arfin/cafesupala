import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] lg:max-h-[920px] w-full flex items-center bg-[#121214] overflow-hidden pt-16"
    >
      {/* Background Image Container (Full Bleed) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute right-0 top-20 bottom-0 w-full lg:w-[58%] xl:w-[55%]">
          <Image
            src="/images/hero-barista.jpg"
            alt="Barista Cafeko meracik latte art dengan presisi"
            fill
            priority
            quality={95}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top hero-image"
          />
        </div>

        {/* Gradients for smooth readability and edge-to-edge blending */}
        {/* Horizontal gradient from solid dark on left to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/95 md:via-[#121214]/85 lg:via-[#121214]/65 to-transparent lg:w-3/4" />

        {/* Vertical gradient on mobile/tablet */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-[#121214]/30 lg:hidden" />

        {/* Bottom seamless blend to next section */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#121214] to-transparent" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 w-full py-8 lg:py-0">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="hero-reveal font-serif-heading text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-white uppercase tracking-tight leading-[1.08]">
            Ritual Dalam
            <br />
            Setiap Seduhan.
          </h1>

          <p
            className="hero-reveal mt-4 text-sm sm:text-base lg:text-lg text-white/75 font-normal leading-relaxed max-w-lg"
            style={{ animationDelay: "120ms" }}
          >
            Rasakan Kehangatan Ruang dan Kopi Berkualitas
          </p>

          <div
            className="hero-reveal mt-7 flex items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <Button href="#menu" variant="gold" className="px-8 py-3 text-xs font-extrabold shadow-lg">
              LIHAT MENU
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

