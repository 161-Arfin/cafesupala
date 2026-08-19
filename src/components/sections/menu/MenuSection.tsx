import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { menuCategories } from "@/data/menu";

const featuredItems = [
  {
    name: "Signature Flat White",
    price: "Rp 38.000",
    description: "Warm, rich flavors & velvety smooth steamed milk.",
    image: "/images/flat-white.jpg",
    badge: "CAFEKO PICK",
  },
  {
    name: "Iced Spanish Latte",
    price: "Rp 42.000",
    description: "Sweet condensed milk with bold espresso and creamy milk.",
    image: "/images/spanish-latte.jpg",
    badge: null,
  },
  {
    name: "Almond Croissant",
    price: "Rp 35.000",
    description: "Flaky French butter pastry topped with roasted sliced almonds.",
    image: "/images/almond-croissant.jpg",
    badge: null,
  },
  {
    name: "Manual Brew (Gayo)",
    price: "Rp 45.000",
    description: "Single origin Aceh Gayo with fruity & floral notes.",
    image: "/images/manual-brew.jpg",
    badge: null,
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-[#121214]">
      <Container>
        {/* Menu Unggulan Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
              MENU UNGGULAN
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Pilihan racikan terbaik dan pastry favorit kurasi barista Cafeko.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid - Mockup Match */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <article
              key={item.name}
              className="card-luxury overflow-hidden flex flex-col p-4 group"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#141416] mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-[#c89b3c] text-[#121214] text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.badge}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {item.price}
                </p>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Slider Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="h-1.5 w-6 rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>

        {/* Full Menu Categories Accordion/Grid */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-accent">Daftar Menu Lengkap</span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white uppercase mt-2">
              Koleksi Kopi &amp; Minuman
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                className="bg-[#18181c] border border-white/5 rounded-2xl p-6 sm:p-8"
              >
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h4 className="font-serif-heading text-2xl font-bold text-white uppercase">
                    {category.title}
                  </h4>
                  <p className="text-xs text-white/50 mt-1">{category.subtitle}</p>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((menuItem) => (
                    <div
                      key={menuItem.name}
                      className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0"
                    >
                      <div>
                        <span className="text-sm font-bold text-white flex items-center gap-2">
                          {menuItem.name}
                          {menuItem.featured && (
                            <span className="text-[8px] font-extrabold uppercase px-2 py-0.5 rounded bg-accent/20 text-accent">
                              PICK
                            </span>
                          )}
                        </span>
                        <p className="text-xs text-white/50 mt-0.5">{menuItem.description}</p>
                      </div>
                      <span className="text-sm font-bold text-accent whitespace-nowrap">
                        {menuItem.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

