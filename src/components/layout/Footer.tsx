import Image from "next/image";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import { InstagramIcon, TikTokIcon } from "@/components/icons/social";

const contactLink = "border-b border-line-strong pb-1 transition-colors hover:border-fg";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-16 py-20 md:py-28 lg:grid-cols-2">
        <section className="lg:col-span-2 lg:max-w-3xl">
          <h2 className="text-3xl md:text-5xl">What makes us different?</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            With nearly a decade of experience in detailing, Dunstan Detailing offers a level of
            quality and consistency that many others cannot. Unlike competitors, this business
            provides a friendly, non-arrogant, and customer-first approach. Every vehicle is
            treated with the same care as if it were our own — and customers appreciate the
            pride and honesty that come with the service.
          </p>
        </section>

        <section id="map">
          <h3 className="text-2xl md:text-3xl">Where to find us</h3>
          <Image
            src="/images/map.webp"
            alt="Map showing where Dunstan Detailing is based"
            width={1020}
            height={654}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="mt-6 h-auto w-full border border-line"
          />
        </section>

        <section id="contact">
          <h3 className="text-2xl md:text-3xl">Have an enquiry or want to book a service?</h3>
          <p className="mt-4 text-muted">Contact us today!</p>
          <ul className="mt-8 flex flex-col items-start gap-5 text-xl md:text-2xl">
            <li>
              <a href={`mailto:${site.email}`} className={contactLink}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className={contactLink}>
                {site.phone}
              </a>
            </li>
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { ...site.instagram, label: "Instagram", Icon: InstagramIcon },
              { ...site.tiktok, label: "TikTok", Icon: TikTokIcon },
            ].map(({ url, handle, label, Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${handle}`}
                  className="inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 transition-colors hover:bg-fg hover:text-bg"
                >
                  <Icon size={18} />
                  <span>{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </footer>
  );
}
