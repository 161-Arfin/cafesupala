import { siteConfig } from "@/config/site";
import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "focus",
    number: "01",
    label: "Fokus",
    title: "Temukan ritme kerja yang lebih tenang.",
    description: "Pilih sudut ternyamanmu, buka laptop, lalu biarkan kopi menemani pekerjaan sampai selesai—kapan pun kamu membutuhkannya.",
    image: siteConfig.images.workspace,
    imageAlt: "Area Supala yang nyaman untuk bekerja dengan laptop",
    ctaLabel: "Lihat lokasinya",
    ctaHref: siteConfig.links.maps,
  },
  {
    id: "meet",
    number: "02",
    label: "Bertemu",
    title: "Bawa percakapan penting ke ruang yang tepat.",
    description: "Dari diskusi tim sampai presentasi, meeting room memberi ruang privat agar setiap ide mendapat perhatian penuh.",
    image: siteConfig.images.barista,
    imageAlt: "Suasana pelayanan hangat di Supala Coffee",
    ctaLabel: "Lihat lokasi",
    ctaHref: siteConfig.links.maps,
  },
  {
    id: "pause",
    number: "03",
    label: "Rehat",
    title: "Ambil jeda yang rasanya benar-benar berarti.",
    description: "Nikmati minuman pilihan dan suasana hangat—sendiri, bersama teman, atau sebelum kembali melanjutkan hari.",
    image: siteConfig.images.drinks,
    imageAlt: "Pilihan minuman segar di meja Supala Coffee",
    ctaLabel: "Jelajahi menu",
    ctaHref: "#menu",
  },
];
