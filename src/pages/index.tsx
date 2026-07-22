import Head from "next/head";
import supalaLogo from "@/docs/sumala_icon.png";
import { MainLayout } from "@/components/layout/MainLayout";
import { AboutUsSection } from "@/components/sections/about-us/AboutUsSection";
import { ExperienceSection } from "@/components/sections/cerita/ExperienceSection";
import { StorySection } from "@/components/sections/cerita/StorySection";
import { GallerySection } from "@/components/sections/galeri/GallerySection";
import { HomeSection } from "@/components/sections/home/HomeSection";
import { LocationSection } from "@/components/sections/lokasi/LocationSection";
import { MenuSection } from "@/components/sections/menu/MenuSection";
import { siteConfig } from "@/config/site";
import { business } from "@/data/business";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const socialImage = siteUrl ? `${siteUrl}${siteConfig.images.hero}` : undefined;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
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
    servesCuisine: ["Coffee", "Non-coffee beverages"],
    priceRange: "Rp21.000–Rp28.000",
    hasMap: business.mapsUrl,
    ...(siteUrl ? { url: siteUrl, image: socialImage } : {}),
  };

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#101010" />
        <link rel="icon" href={supalaLogo.src} type="image/png" />
        <link rel="apple-touch-icon" href={supalaLogo.src} />
        {siteUrl && <link rel="canonical" href={siteUrl} />}
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content={siteConfig.name} />
        {siteUrl && <meta property="og:url" content={siteUrl} />}
        {socialImage && <meta property="og:image" content={socialImage} />}
        {socialImage && <meta property="og:image:alt" content="Suasana Supala Coffee and Space" />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        {socialImage && <meta name="twitter:image" content={socialImage} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <MainLayout>
        <HomeSection />
        <StorySection />
        <ExperienceSection />
        <MenuSection />
        <GallerySection />
        <AboutUsSection />
        <LocationSection />
      </MainLayout>
    </>
  );
}
