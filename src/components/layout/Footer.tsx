import Image from "next/image";
import Reveal, { Rule } from "@/components/motion/Reveal";
import { site } from "@/data/site";

const contactLink =
  "border-b-2 border-bg pb-2 text-[clamp(1.2rem,2.3vw,2.1rem)] font-bold tracking-[-.02em] [overflow-wrap:anywhere] transition-[padding] duration-300 hover:pl-3";

export default function Footer() {
  return (
    <footer className="px-pad pb-pad pt-section">
      <Rule className="mb-9" />
      <div className="grid grid-cols-12 gap-x-6 gap-y-20">
        <div className="col-span-12 lg:col-span-6">
          <div className="label mb-4 text-acc">04 / Why us</div>
          <Reveal as="h2" className="disp mb-6 text-[clamp(1.8rem,3.4vw,3.2rem)]">
            What makes us different?
          </Reveal>
          <Reveal as="p" className="text-[clamp(1rem,1.2vw,1.15rem)] font-light leading-relaxed text-mute">
            With nearly a decade of experience in detailing, Dunstan Detailing offers a level of quality and
            consistency that many others cannot. Unlike competitors, this business provides a friendly,
            non-arrogant, and customer-first approach. Every vehicle is treated with the same care as if it
            were our own — and customers appreciate the pride and honesty that come with the service.
          </Reveal>
        </div>

        <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div id="map">
            <h3 className="mb-5 text-2xl font-semibold">Where to find us</h3>
            <Image
              src="/images/map.webp"
              alt="Map showing where Dunstan Detailing is based"
              width={1020}
              height={654}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full border border-line brightness-75 contrast-110 grayscale"
            />
          </div>
        </Reveal>

        <div
          id="contact"
          className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-8 bg-acc p-[clamp(28px,4vw,60px)] text-bg"
        >
          <div className="col-span-12 lg:col-span-6">
            <h3 className="disp text-[clamp(1.6rem,3.2vw,3rem)] !leading-none">
              Have an enquiry or want to book a service?
            </h3>
            <p className="mt-4 text-xl font-medium">Contact us today!</p>
          </div>
          <div className="col-span-12 flex flex-col gap-3.5 lg:col-span-5 lg:col-start-8">
            <a href={`mailto:${site.email}`} className={contactLink}>
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className={contactLink}>
              {site.phone}
            </a>
            <div className="label mt-1.5 flex flex-wrap gap-x-6 gap-y-2 font-medium">
              {[
                { name: "Instagram", ...site.instagram },
                { name: "TikTok", ...site.tiktok },
              ].map(({ name, handle, url }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="border-b border-bg">
                  {name} {handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
