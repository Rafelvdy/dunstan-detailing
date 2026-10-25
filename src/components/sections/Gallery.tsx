import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import { galleryJsonLd } from "@/lib/jsonld";

const VISIBLE_COUNT = 9;
const SIZES = "(min-width: 1024px) 400px, (min-width: 640px) 33vw, 50vw";

function Tile({ image }: { image: GalleryImage }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      title={image.title}
      width={image.width}
      height={image.height}
      sizes={SIZES}
      placeholder="blur"
      blurDataURL={image.blurDataURL}
      className="mb-3 block h-auto w-full break-inside-avoid border border-line"
    />
  );
}

export default function Gallery() {
  const first = galleryImages.slice(0, VISIBLE_COUNT);
  const rest = galleryImages.slice(VISIBLE_COUNT);

  return (
    <section id="gallery" className="py-20 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <Container>
        <SectionHeading>Our Work</SectionHeading>
        <div className="mt-14 columns-2 gap-3 lg:columns-3">
          {first.map((image) => (
            <Tile key={image.src} image={image} />
          ))}
        </div>
        <details className="group">
          <summary className="mt-4 inline-flex border border-line-strong px-5 py-2.5 text-sm transition-colors hover:bg-fg hover:text-bg">
            <span className="group-open:hidden">View more</span>
            <span className="hidden group-open:inline">View less</span>
          </summary>
          <div className="mt-6 columns-2 gap-3 lg:columns-3">
            {rest.map((image) => (
              <Tile key={image.src} image={image} />
            ))}
          </div>
        </details>
      </Container>
    </section>
  );
}
