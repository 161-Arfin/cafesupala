export type NavigationItem = { label: string; href: string };
export type MenuItemData = {
  name: string;
  description: string;
  price: string;
  coldPrice?: string;
  hotPrice?: string;
  featured?: boolean;
};
export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItemData[];
};
export type GalleryItem = { src: string; alt: string; height: number };
export type BusinessHour = { days: string; hours: string };
export type FooterGroup = { title: string; links: NavigationItem[] };
export type Testimonial = { title: string; summary: string };
export type ExperienceItem = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};
