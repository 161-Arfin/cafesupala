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
      <section className="relative flex min-h-[580px] items-center justify-center overflow-hidden bg-primary bg-fixed py-24 text-center text-white">
        <Image
          src={siteConfig.images.barista}
          alt="Barista Supala menyiapkan kopi"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="reveal relative z-10 max-w-2xl px-5">
          <p className="font-accent text-sm italic text-accent">
            Sebuah jeda yang berarti
          </p>
          <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-none tracking-[.04em] md:text-6xl">
            Kopi yang Dibuat
            <br />
            untuk Dinikmati
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/70">
            Tidak ada proses yang kami anggap kecil. Setiap pilihan, takaran,
            dan waktu seduh adalah cara kami menghormati rasa.
          </p>
          <span className="mx-auto mt-8 block h-px w-20 bg-accent" />
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="reveal">
                <div className="mx-auto h-20 w-20 text-accent [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.25]">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-muted">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface pb-20 md:pb-28">
        <Container>
          <div className="grid overflow-hidden bg-primary text-white md:grid-cols-2">
            <div className="reveal flex min-h-80 flex-col justify-center p-10 md:p-14">
              <p className="font-accent text-sm italic text-white/70">
                Tentang rasa yang dekat
              </p>
              <h2 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight md:text-5xl">
                Temukan Minuman
                <br />
                Favoritmu di Supala
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
                Dari espresso klasik hingga signature yang segar, semuanya
                diracik untuk menemani ritmemu sendiri.
              </p>
            </div>
            <div className="relative min-h-80">
              <Image
                src={siteConfig.images.workspace}
                alt="Suasana hangat di Supala Coffee"
                fill
                loading="lazy"
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
