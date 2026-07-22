import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  { number: "01", title: "Buka 24 Jam", body: "Deadline tidak kenal jam. LYON’S juga tidak." },
  { number: "02", title: "Work Ready", body: "Wi-Fi, colokan, AC, dan meja yang benar-benar nyaman dipakai kerja." },
  { number: "03", title: "Meeting Room", body: "Ruang privat hingga 16 orang, lengkap dengan proyektor dan whiteboard." },
];

const meetingPlans = [
  { duration: "3 jam", price: "Min. spend Rp500K" },
  { duration: "6 jam", price: "Min. spend Rp750K" },
  { duration: "9 jam", price: "Min. spend Rp1JT" },
  { duration: "12 jam", price: "Min. spend Rp1,25JT" },
];

export function StorySection() {
  return (
    <section id="story" className="section-space overflow-hidden bg-background">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-24">
          <div className="reveal">
            <SectionHeading eyebrow="Café yang ngerti caramu bekerja" title="Duduk lebih lama. Selesaikan lebih banyak." />
            <p className="mt-7 max-w-xl text-base leading-8 text-muted">Bukan sekadar tempat numpang Wi-Fi. LYON’S menyatukan kopi yang accessible, meja kerja yang proper, dan ruang meeting yang siap dipakai—24 jam penuh.</p>
            <div className="mt-10 space-y-3">{benefits.map((item) => <article key={item.number} className="group grid grid-cols-[44px_1fr] gap-4 border-b border-outline/70 py-4"><span className="font-heading text-2xl text-accent">{item.number}</span><div><h3 className="font-heading text-2xl text-primary transition-colors group-hover:text-accent">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted">{item.body}</p></div></article>)}</div>
          </div>
          <div className="reveal relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image src={siteConfig.images.workspace} alt="Area coworking LYON’S dengan meja komunal dan pencahayaan alami" fill loading="lazy" quality={100} sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]" /></div>
            <div className="relative -mt-10 ml-5 mr-5 max-w-md border border-white/30 bg-primary/92 p-6 text-white shadow-[0_20px_60px_rgba(39,19,16,.25)] backdrop-blur-xl md:ml-auto md:mr-8 md:p-7 lg:mr-10">
              <div className="flex items-center justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.18em] text-accent">Meeting Room</p><h3 className="mt-1 font-heading text-3xl">Kerja bareng, lebih fokus.</h3></div><span className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">Max. 16</span></div>
              <div className="mt-5 grid grid-cols-2 gap-2">{meetingPlans.map((plan) => <div key={plan.duration} className="border border-white/10 p-3"><strong className="block text-sm">{plan.duration}</strong><span className="mt-1 block text-[11px] text-white/55">{plan.price}</span></div>)}</div>
              <Button href={siteConfig.links.meeting} variant="gold" className="mt-5 w-full">Cek Jadwal Meeting Room</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
