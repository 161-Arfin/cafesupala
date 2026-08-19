import Head from "next/head";
import { MainLayout } from "@/components/layout/MainLayout";
import { AboutUsSection } from "@/components/sections/about-us/AboutUsSection";
import { ExperienceSection } from "@/components/sections/cerita/ExperienceSection";
import { StorySection } from "@/components/sections/cerita/StorySection";
import { GallerySection } from "@/components/sections/galeri/GallerySection";
import { HomeSection } from "@/components/sections/home/HomeSection";
import { LocationSection } from "@/components/sections/lokasi/LocationSection";
import { MenuSection } from "@/components/sections/menu/MenuSection";
import { ReservationSection } from "@/components/sections/reservasi/ReservationSection";
import { siteConfig } from "@/config/site";
import { business } from "@/data/business";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://cafeko.vercel.app";
  const ogImageUrl = siteUrl ? `${siteUrl}${siteConfig.images.hero}` : siteConfig.images.hero;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
    image: ogImageUrl,
    url: siteUrl,
    telephone: siteConfig.contact.whatsappDisplay,
    priceRange: "Rp20.000 - Rp45.000",
    servesCuisine: ["Specialty Coffee", "Espresso", "Pastry", "Beverages"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Babarsari, Tambakbayan",
      addressLocality: "Caturtunggal, Depok",
      addressRegion: "Sleman, Daerah Istimewa Yogyakarta",
      postalCode: "55282",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.7796125,
      longitude: 110.4148143,
    },
    hasMap: siteConfig.links.maps,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "16:00",
        closes: "00:00",
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteConfig.title}</title>
        <meta name="title" content={siteConfig.title} />
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="author" content={siteConfig.name} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#121214" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/cafeko-logo.png" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={`Suasana ${siteConfig.name}`} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <MainLayout>
        <HomeSection />
        <MenuSection />
        <LocationSection />
        <StorySection />
        <ExperienceSection />
        <GallerySection />
        <AboutUsSection />
        <ReservationSection />
      </MainLayout>
    </>
  );
}
