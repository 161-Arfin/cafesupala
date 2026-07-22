import Image from "next/image";
import supalaLogo from "@/docs/sumala_icon.png";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-primary md:min-h-screen"
    >
      <Image
        src={siteConfig.images.hero}
        alt="Barista meracik kopi di balik meja Supala Coffee"
        fill
        preload
        quality={100}
        sizes="100vw"
        className="hero-image object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.15)_48%,rgba(0,0,0,.62)_100%)]" />
      <Container className="relative z-10 flex min-h-[760px] items-center justify-center pb-20 pt-32 text-center text-white md:min-h-screen">
        <div className="max-w-4xl">
          <Image
            src={supalaLogo}
            alt=""
            aria-hidden="true"
            loading="eager"
            className="hero-reveal mx-auto mb-5 h-24 w-24 rounded-full bg-background/95 p-2 md:h-28 md:w-28"
          />
          <p
            className="hero-reveal font-accent text-sm italic text-white/80"
            style={{ animationDelay: "80ms" }}
          >
            Rasa yang pulang, cerita yang tinggal
          </p>
          <h1
            className="hero-reveal mt-4 font-heading text-6xl font-bold uppercase leading-[.94] tracking-[.035em] sm:text-7xl md:text-8xl lg:text-[7rem]"
            style={{ animationDelay: "160ms" }}
          >
            Ritual Dalam
            <br />
            Setiap Seduhan
          </h1>
          <p
            className="hero-reveal mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75"
            style={{ animationDelay: "260ms" }}
          >
            Kopi Indonesia yang diracik dengan perhatian, disajikan dalam ruang
            hangat untuk percakapan, jeda, dan awal yang baru.
          </p>
          <div className="hero-reveal mt-9" style={{ animationDelay: "360ms" }}>
            <Button href="#menu" variant="gold">
              Lihat Menu
            </Button>
          </div>
        </div>
      </Container>
      {/* <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[.24em] text-white/60">
        Scroll untuk menjelajah
      </div> */}
    </section>
  );
}
