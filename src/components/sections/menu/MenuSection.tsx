import { Container } from "@/components/ui/Container";
import { menuCategories } from "@/data/menu";

function TemperatureIcon({ type }: { type: "cold" | "hot" }) {
  if (type === "cold") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6]"><path d="M12 2v20M4.2 6.5l15.6 11M19.8 6.5l-15.6 11M9 4l3 2 3-2M9 20l3-2 3 2M4.8 9.5l.2 3.6-3 .6M19.2 14.5l-.2-3.6 3-.6M19.2 9.5l-.2 3.6 3 .6M4.8 14.5l.2-3.6-3-.6" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6]"><path d="M5 10h12v4.5A4.5 4.5 0 0 1 12.5 19h-3A4.5 4.5 0 0 1 5 14.5V10Zm12 2h1.5a2.5 2.5 0 0 1 0 5H16M8 7c0-1.5 1.5-1.5 1.5-3M12 7c0-1.5 1.5-1.5 1.5-3" /></svg>;
}

export function MenuSection() {
  return (
    <section id="menu" className="section-space bg-surface">
      <Container>
        <div className="reveal text-center">
          <p className="font-accent text-sm italic text-accent">Menu Supala</p>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-[.04em] text-primary md:text-5xl">Pilih Rasa Favoritmu</h2>
          <span className="mx-auto mt-5 block h-px w-24 bg-accent" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">Dari racikan klasik sampai signature yang segar. Harga dalam ribuan rupiah dan dapat berubah mengikuti informasi terbaru di kedai.</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-outline bg-outline lg:grid-cols-2">
          {menuCategories.map((category) => {
            const hasCold = category.items.some((item) => item.coldPrice);
            const hasHot = category.items.some((item) => item.hotPrice);
            const priceColumns = hasCold && hasHot ? "grid-cols-2" : "grid-cols-1";

            return (
              <article key={category.id} className="reveal bg-white p-6 md:p-8">
                <header className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-primary pb-4">
                  <div><h3 className="font-heading text-3xl font-bold uppercase text-primary">{category.title}</h3><p className="mt-1 text-[10px] leading-5 text-muted">{category.subtitle}</p></div>
                  <div className={`grid min-w-16 ${priceColumns} gap-3 text-muted`}>
                    {hasCold && <span className="flex justify-center" aria-label="Kolom harga dingin" title="Dingin"><TemperatureIcon type="cold" /></span>}
                    {hasHot && <span className="flex justify-center" aria-label="Kolom harga panas" title="Panas"><TemperatureIcon type="hot" /></span>}
                  </div>
                </header>
                <div className="mt-5 space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div><h4 className="font-heading text-base font-bold uppercase text-primary">{item.name}{item.featured && <span className="ml-2 align-middle text-[8px] font-bold tracking-[.12em] text-accent">SUPALA PICK</span>}</h4><p className="mt-0.5 text-[10px] leading-5 text-muted">{item.description}</p></div>
                      <div className={`grid min-w-16 ${priceColumns} gap-3 text-center text-sm font-bold tabular-nums text-primary`}>
                        {hasCold && <span aria-label={item.coldPrice ? `Dingin ${item.coldPrice}` : "Tidak tersedia dingin"}>{item.coldPrice ?? "—"}</span>}
                        {hasHot && <span aria-label={item.hotPrice ? `Panas ${item.hotPrice}` : "Tidak tersedia panas"}>{item.hotPrice ?? "—"}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
