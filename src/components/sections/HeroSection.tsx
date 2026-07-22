import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-primary">
      <Image src={siteConfig.images.hero} alt="Barista LYON’S sedang meracik kopi di meja bar" fill priority quality={100} sizes="100vw" className="hero-image object-cover object-[82%_center] md:object-[68%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,10,8,.92)_0%,rgba(24,14,10,.72)_38%,rgba(24,14,10,.12)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/70 to-transparent" />
      <Container className="relative z-10 flex min-h-screen items-center pb-24 pt-32">
        <div className="max-w-3xl text-white">
          <div className="hero-reveal mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[.16em] text-white/80 backdrop-blur-md" style={{ animationDelay: "80ms" }}><span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(216,91,50,.18)]" /> BUKA 24 JAM · SLEMAN</div>
          <h1 className="hero-reveal font-heading text-6xl font-medium leading-[.92] tracking-[-.035em] sm:text-7xl md:text-8xl lg:text-[7.5rem]" style={{ animationDelay: "180ms" }}>Ngopi enak.<br /><span className="italic text-accent">Kerja lebih fokus.</span></h1>
          <p className="hero-reveal mt-8 max-w-xl text-base leading-8 text-white/72 md:text-lg" style={{ animationDelay: "300ms" }}>Café dan co-working space 24 jam di Sleman. Kopi mulai Rp15 ribu, meja yang nyaman, dan meeting room untuk tim sampai 16 orang.</p>
          <div className="hero-reveal mt-10 flex flex-col items-start gap-3 sm:flex-row" style={{ animationDelay: "420ms" }}><Button href="#menu" variant="gold" className="w-52 max-w-full">Lihat Menu &amp; Harga</Button><Button href={siteConfig.links.meeting} variant="outline" className="w-52 max-w-full">Booking Ruangan</Button></div>
          <div className="hero-reveal mt-12 grid max-w-xl grid-cols-3 border-y border-white/12 py-5" style={{ animationDelay: "540ms" }}><div><strong className="font-heading text-2xl text-white">24/7</strong><span className="mt-1 block text-[10px] uppercase tracking-[.12em] text-white/45">Setiap hari</span></div><div className="border-x border-white/12 px-5"><strong className="font-heading text-2xl text-white">Rp15K</strong><span className="mt-1 block text-[10px] uppercase tracking-[.12em] text-white/45">Mulai dari</span></div><div className="pl-5"><strong className="font-heading text-2xl text-white">16</strong><span className="mt-1 block text-[10px] uppercase tracking-[.12em] text-white/45">Kapasitas meeting</span></div></div>
        </div>
      </Container>
      <div className="absolute bottom-8 right-5 z-10 hidden items-center gap-4 text-xs uppercase tracking-[.18em] text-white/55 md:flex md:right-8"><span className="h-px w-16 bg-white/35" /> Gulir untuk menjelajah</div>
    </section>
  );
}
