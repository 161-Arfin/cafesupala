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
    <section id="story" className="py-20 md:py-28 bg-[#121214] border-t border-white/5">
      <Container>
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-accent">
            Yang Terjadi di Cafeko
          </span>
          <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
            Kopi Menjadi Dasar Cerita
          </h2>
          <span className="mx-auto mt-4 block h-0.5 w-16 bg-accent rounded-full" />
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
            Kami percaya kopi terbaik bukan hanya tentang rasa, tetapi tentang
            pengalaman yang mengiringinya—dari asal biji hingga meja tempat kita
            bertemu.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.number} className="card-luxury p-4 flex flex-col group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#16161a]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  loading="lazy"
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 p-2 flex items-start gap-4">
                <span className="font-serif-heading text-3xl font-bold text-accent">
                  {story.number}
                </span>
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">
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

