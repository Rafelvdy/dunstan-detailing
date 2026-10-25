import { galleryImages } from "@/data/gallery";
import { site } from "@/data/site";

const service = (name: string, description: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  "@id": `${site.url}#organization`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description:
    "Professional mobile car detailing services covering Maidstone, Kent and surrounding areas. Specializing in paint correction, ceramic coating, interior detailing, and vehicle protection services.",
  logo: `${site.url}/images/favicon/favicon.jpg`,
  priceRange: "£50-£1000",
  areaServed: ["Maidstone", "Kent", "South London"].map((name) => ({ "@type": "Place", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Car Detailing Services",
    itemListElement: [
      service("Interior Detailing", "Professional interior cleaning and detailing services at your location"),
      service("Paint Correction", "Professional paint correction and enhancement services"),
      service("Ceramic Coating", "Professional ceramic coating application and long-term protection"),
      service("Mobile Car Wash", "Professional car washing services at your location"),
    ],
  },
  sameAs: [
    "https://www.instagram.com/dunstandetailing",
    "https://www.tiktok.com/@dunstandetailing",
  ],
};

export const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Dunstan Detailing - Professional Car Detailing Gallery",
  description:
    "Professional automotive detailing services including paint correction, ceramic coating, interior cleaning, and more",
  url: `${site.url}/#gallery`,
  image: galleryImages.map((img) => ({
    "@type": "ImageObject",
    url: `${site.url}${img.src}`,
    description: img.alt,
    name: img.title,
  })),
};
