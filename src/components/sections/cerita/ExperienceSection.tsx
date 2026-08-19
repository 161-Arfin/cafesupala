import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const services = [
  {
    title: "Biji Pilihan",
    body: "Kopi dari kebun-kebun Indonesia yang dipilih berdasarkan musim dan karakter terbaiknya.",
    icon: "bean",
  },
  {
    title: "Giling Presisi",
    body: "Setiap metode seduh mendapat ukuran giling yang tepat agar rasa tetap seimbang.",
    icon: "grinder",
  },
  {
    title: "Seduh Perlahan",
    body: "Diracik satu per satu, tanpa terburu-buru, untuk menjaga kejernihan setiap cangkir.",
    icon: "pour",
  },
  {
    title: "Rasa Otentik",
    body: "Profil rasa yang jujur, mudah dinikmati, dan dekat dengan keseharian.",
    icon: "cup",
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "grinder")
    return (
      <svg viewBox="0 0 64 64">
        <path d="M17 27h30v25H17zM22 19h20l4 8H18zM25 13h14M24 39h16M29 52v6m6-6v6" />
      </svg>
    );
  if (type === "pour")
    return (
      <svg viewBox="0 0 64 64">
        <path d="M16 21h20v22H16zM36 25h7c8 0 8 12 0 12h-7M13 48h34M24 12c0 4-4 4-4 8m10-8c0 4-4 4-4 8" />
      </svg>
    );
  if (type === "cup")
    return (
      <svg viewBox="0 0 64 64">
        <path d="M14 21h32l-3 27H17zM46 27h5c8 0 8 12-1 12h-6M20 14c0 4-3 4-3 7m10-7c0 4-3 4-3 7m10-7c0 4-3 4-3 7" />
      </svg>
    );
  return (
    <svg viewBox="0 0 64 64">
      <path d="M32 8c14 7 20 20 13 34S24 60 15 49 18 18 32 8Z" />
      <path d="M21 49c8-13 13-21 24-28M28 42c-3-4-5-8-5-13m11 6c4 1 7 1 10 0" />
    </svg>
  );
}

export function ExperienceSection() {
  return (
    <>
      <section className="py-20 md:py-24 bg-[#151518] border-t border-white/5">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="card-luxury p-8 text-center flex flex-col items-center">
                <div className="mx-auto h-16 w-16 text-accent p-3 rounded-2xl bg-accent/10 border border-accent/20 [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.5]">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="mt-5 font-serif-heading text-lg font-bold uppercase text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-white/60">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-[#121214]">
        <Container>
          <div className="grid rounded-3xl overflow-hidden border border-white/10 bg-[#18181c] text-white md:grid-cols-2">
            <div className="reveal flex min-h-80 flex-col justify-center p-10 md:p-14">
              <span className="text-xs font-bold uppercase tracking-[.2em] text-accent">
                Tentang rasa yang dekat
              </span>
              <h2 className="mt-3 font-serif-heading text-3xl sm:text-4xl font-bold uppercase leading-tight text-white">
                Temukan Minuman
                <br />
                Favoritmu di Cafeko
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
                Dari espresso klasik hingga signature yang segar, semuanya
                diracik untuk menemani ritmemu sendiri.
              </p>
            </div>
            <div className="relative min-h-80">
              <Image
                src={siteConfig.images.workspace}
                alt="Suasana hangat di Cafeko Coffee"
                fill
                loading="lazy"
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#18181c] via-transparent to-transparent" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

