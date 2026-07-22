import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const stories = [
  {
    number: "01",
    title: "Ruang yang Hangat",
    body: "Tempat sederhana untuk memperlambat langkah, membuka percakapan, dan menikmati waktu.",
    image: siteConfig.images.workspace,
  },
  {
    number: "02",
    title: "Kopi yang Jujur",
    body: "Biji pilihan Indonesia, diseduh dengan presisi agar karakter alaminya tetap berbicara.",
    image: siteConfig.images.barista,
  },
  {
    number: "03",
    title: "Cerita yang Tumbuh",
    body: "Setiap cangkir menghubungkan petani, peracik, dan kamu dalam satu perjalanan rasa.",
    image: siteConfig.images.drinks,
  },
];

export function StorySection() {
  return (
    <section id="story" className="paper-edge bg-background py-20 md:py-28">
      <Container>
        <div className="reveal text-center">
          <p className="font-accent text-sm italic text-accent">
            Yang Terjadi di Supala
          </p>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-[.04em] text-primary md:text-5xl">
            Kopi Menjadi Dasar Cerita
          </h2>
          <span className="mx-auto mt-5 block h-px w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted">
            Kami percaya kopi terbaik bukan hanya tentang rasa, tetapi tentang
            pengalaman yang mengiringinya—dari asal biji hingga meja tempat kita
            bertemu.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {stories.map((story) => (
            <article key={story.number} className="reveal">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  loading="lazy"
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-6 grid grid-cols-[auto_1fr] gap-4">
                <span className="font-accent text-4xl italic text-accent">
                  {story.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-muted">
                    {story.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
