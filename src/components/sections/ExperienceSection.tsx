import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const activeItem =
    experiences.find((item) => item.id === activeId) ?? experiences[0];

  return (
    <section
      className="overflow-hidden bg-primary py-20 text-white md:py-28 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <Container>
        <div className="reveal mb-10 flex flex-col gap-5 border-b border-white/15 pb-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-accent">
              Satu tempat, banyak cerita
            </p>
            <h2
              id="experience-heading"
              className="mt-4 max-w-2xl font-heading text-4xl font-medium leading-none sm:text-5xl lg:text-6xl"
            >
              Datang sesuai kebutuhanmu.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/60">
            LYON’S dirancang untuk mengikuti ritmemu—ketika ingin produktif,
            bertukar ide, atau sekadar berhenti sejenak.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div className="order-2 flex flex-col justify-between lg:order-1">
            <div
              role="tablist"
              aria-label="Pilih pengalaman di LYON’S"
              className="border-t border-white/15"
            >
              {experiences.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    id={`experience-tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="experience-panel"
                    onClick={() => setActiveId(item.id)}
                    className={`group flex w-full items-center gap-5 border-b border-white/15 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${active ? "text-white" : "text-white/45 hover:text-white/80"}`}
                  >
                    <span
                      className={`text-xs transition-colors ${active ? "text-accent" : "text-white/30"}`}
                    >
                      {item.number}
                    </span>
                    <span className="font-heading text-3xl md:text-4xl">
                      {item.label}
                    </span>
                    <span
                      className={`ml-auto text-xl transition-all ${active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
            <div
              id="experience-panel"
              role="tabpanel"
              aria-live="polite"
              aria-labelledby={`experience-tab-${activeItem.id}`}
              className="menu-enter mt-10"
              key={activeItem.id}
            >
              <h3 className="max-w-lg font-heading text-3xl leading-tight text-white md:text-4xl">
                {activeItem.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">
                {activeItem.description}
              </p>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-primary-container md:aspect-[16/10]">
              <Image
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                loading="lazy"
                quality={100}
                sizes="(min-width:1024px) 58vw, 100vw"
                className="menu-enter object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 border border-white/20 bg-primary/65 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-white/80 backdrop-blur-md md:bottom-7 md:left-7">
                Buka 24 jam · setiap hari
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
