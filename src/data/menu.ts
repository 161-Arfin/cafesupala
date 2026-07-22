import type { MenuCategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "classic",
    title: "Classic",
    subtitle: "Espresso classics, tersedia dingin dan panas.",
    items: [
      { name: "White", description: "Espresso dengan susu yang lembut.", price: "23K / 21K", coldPrice: "23K", hotPrice: "21K" },
      { name: "Black", description: "Espresso dan air dengan karakter tegas.", price: "23K / 21K", coldPrice: "23K", hotPrice: "21K" },
      { name: "Mocca", description: "Espresso, susu, dan cokelat.", price: "23K", coldPrice: "23K" },
    ],
  },
  {
    id: "flavoured",
    title: "Flavoured",
    subtitle: "Kopi susu dingin dengan karakter rasa pilihan.",
    items: [
      { name: "Arana", description: "Espresso, milk cream, dan aren.", price: "25K", coldPrice: "25K", featured: true },
      { name: "Cheezy", description: "Espresso, milk cream, dan cream cheese.", price: "25K", coldPrice: "25K" },
      { name: "Sacala", description: "Espresso, milk cream, dan salted caramel.", price: "25K", coldPrice: "25K" },
      { name: "Molase", description: "Espresso, milk cream, dan rhum.", price: "25K", coldPrice: "25K" },
      { name: "Scotty", description: "Espresso, milk cream, dan butterscotch.", price: "25K", coldPrice: "25K" },
      { name: "Zilla", description: "Espresso, milk cream, dan vanilla.", price: "25K", coldPrice: "25K" },
      { name: "Dreamy", description: "Espresso, milk cream, dan almond.", price: "25K", coldPrice: "25K" },
    ],
  },
  {
    id: "signature",
    title: "Signature",
    subtitle: "Racikan khas Supala yang segar dan mudah dinikmati.",
    items: [
      { name: "Paradise Punch", description: "Cold brew, orange, dan soda.", price: "28K", coldPrice: "28K", featured: true },
      { name: "Endless Love", description: "Chocolate drink dengan tekstur crunchy.", price: "28K", coldPrice: "28K", featured: true },
      { name: "Sunset Wave", description: "Perpaduan orange dan yakult yang menyegarkan.", price: "28K", coldPrice: "28K", featured: true },
    ],
  },
  {
    id: "non-coffee",
    title: "Non Coffee",
    subtitle: "Pilihan tanpa kopi, tersedia dingin dan panas.",
    items: [
      { name: "Reguler Tea", description: "Teh klasik yang ringan dan menyegarkan.", price: "23K / 21K", coldPrice: "23K", hotPrice: "21K" },
      { name: "Lychee Tea", description: "Teh dengan rasa leci yang segar.", price: "25K", coldPrice: "25K" },
      { name: "Redvelvet", description: "Minuman creamy dengan rasa red velvet.", price: "25K", coldPrice: "25K", hotPrice: "25K" },
      { name: "Macha", description: "Minuman matcha yang lembut dan creamy.", price: "25K", coldPrice: "25K", hotPrice: "25K" },
      { name: "Chocolate", description: "Minuman cokelat dengan rasa yang kaya.", price: "25K", coldPrice: "25K", hotPrice: "25K" },
    ],
  },
];
