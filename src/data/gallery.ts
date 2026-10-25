import meta from "./gallery-meta.generated.json";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  blurDataURL: string;
}

const entries: { id: keyof typeof meta; alt: string; title: string }[] = [
  {
    id: "1a",
    alt: "Red Ferrari luxury sports car interior detailing - leather seats and dashboard cleaning",
    title: "Ferrari Interior Detailing - Premium Leather Treatment and Dashboard Care",
  },
  {
    id: "1b",
    alt: "Red Ferrari 360 Modena exterior detailing - professional paint correction and ceramic coating",
    title: "Ferrari 360 Modena Paint Correction and Ceramic Coating Service",
  },
  {
    id: "2a",
    alt: "Black VW Golf professional exterior detailing - paint enhancement and protection",
    title: "VW Golf Sedan Paint Enhancement and Protection Detailing",
  },
  {
    id: "2b",
    alt: "Black Golf rear view showing professional paint correction results",
    title: "Golf Paint Correction Results - Mirror Finish Achievement",
  },
  {
    id: "3a",
    alt: "Honda Civic type R car exterior wash and detailing on driveway",
    title: "Honda Civic type R Professional Exterior Wash and Detail Service",
  },
  {
    id: "4a",
    alt: "Luxury supercars on driveway - Lamborghini and McLaren detailing showcase",
    title: "Supercar Collection Detailing - Lamborghini and McLaren Services",
  },
  {
    id: "5a",
    alt: "BMW professional detailing",
    title: "BMW Professional Detailing",
  },
  {
    id: "5b",
    alt: "White interior BMW detail. Care of leather seats and dashboard.",
    title: "White interior BMW detail. Care of leather seats and dashboard.",
  },
  {
    id: "5c",
    alt: "BMW boot interior detailing",
    title: "BMW boot interior detailing",
  },
  {
    id: "6a",
    alt: "Classic Ford Escort professional exterior detailing and restoration",
    title: "Classic Ford Escort restoration",
  },
  {
    id: "7a",
    alt: "Classic green VW Volkswagen van exterior cleaning and restoration",
    title: "Volkswagen Van Classic Restoration and Exterior Detailing",
  },
  {
    id: "8a",
    alt: "Grey Lamborghini Urus SUV professional detailing",
    title: "Lamborghini Urus SUV Paint Correction and Professional Detailing",
  },
  {
    id: "9a",
    alt: "Orange Lamborghini supercar interior detailing - premium leather care",
    title: "Orange Lamborghini interior detailing - premium leather care",
  },
  {
    id: "10a",
    alt: "Engine bay detailing and cleaning service",
    title: "Engine bay detailing and cleaning",
  },
  {
    id: "11a",
    alt: "Professional bodywork restoration and polishing service before and after",
    title: "Bodywork restoration and polishing",
  },
  {
    id: "12a",
    alt: "Mercedes-Benz E-Class professional detailing",
    title: "Mercedes-Benz E-Class professional detailing",
  },
  {
    id: "13a",
    alt: "Professional headlight restoration and polishing service before and after",
    title: "Headlight Restoration Service - Crystal Clear Visibility Enhancement",
  },
  {
    id: "14a",
    alt: "Black Aston Martin Vantage car professional exterior detailing",
    title: "Black Aston Martin Vantage car professional exterior detailing",
  },
  {
    id: "15a",
    alt: "Luxury car interior leather seat and dashboard conditioning and protection treatment before",
    title: "Luxury car interior leather seat and dashboard conditioning and protection treatment before",
  },
  {
    id: "15b",
    alt: "High-end car interior detailing showing steering wheel and dashboard care after",
    title: "Luxury Interior Detailing - Steering Wheel and Dashboard Care after",
  },
];

/** Shown first, in this order, in the bento grid. Everything else follows under "View more". */
const FEATURED = ["4a", "1a", "1b", "10a", "9a", "7a", "14a", "12a"];
const rank = (id: string) => {
  const i = FEATURED.indexOf(id);
  return i === -1 ? FEATURED.length : i;
};

export const galleryImages: GalleryImage[] = entries
  .map(({ id, alt, title }) => ({ id, src: `/images/gallery/${id}.webp`, alt, title, ...meta[id] }))
  .sort((a, b) => rank(a.id) - rank(b.id));

export const FEATURED_COUNT = FEATURED.length;
