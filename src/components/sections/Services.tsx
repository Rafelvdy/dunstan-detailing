"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import { ScrollTrigger } from "@/lib/gsap";
import { services, type Service } from "@/data/services";

const stepLabel = (service: Service) => service.stepLabel ?? `${service.items.length} steps`;

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="services" label="03 / Services">
      <div className="grid grid-cols-12 items-end gap-x-6">
        <Reveal as="h2" className="disp col-span-12 text-[clamp(2.3rem,6.2vw,6rem)] lg:col-span-7">
          What We Offer...
        </Reveal>
        <Reveal
          as="p"
          className="col-span-12 mt-7 text-[clamp(1rem,1.2vw,1.15rem)] font-light leading-relaxed text-mute lg:col-span-5 lg:col-start-8 lg:mt-0"
        >
          We specialise in car owners who want to maintain or enhance the appearance and condition of their
          vehicles. This includes working professionals, car enthusiasts, and local businesses with company
          vehicles in Kent and South London
        </Reveal>
      </div>

      <div className="label mt-14 hidden grid-cols-[70px_1fr_140px_290px] border-b border-ink py-3 text-mute lg:grid">
        <span>No.</span>
        <span>Service</span>
        <span>Steps</span>
        <span className="text-right">Price</span>
      </div>

      <div className="max-lg:mt-12">
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal
              key={service.title}
              delay={i * 0.04}
              y={30}
              className={`group/row relative isolate border-b border-line before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-acc before:transition-transform before:duration-500 before:ease-out-expo hover:before:scale-y-100 ${isOpen ? "bg-panel" : ""}`}
            >
              <h3>
                <button
                  type="button"
                  id={`service-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="grid w-full grid-cols-[44px_1fr] items-baseline gap-y-1.5 py-[clamp(18px,2.2vw,28px)] text-left transition-[padding,color] duration-500 ease-out-expo group-hover/row:px-3.5 group-hover/row:text-bg lg:grid-cols-[70px_1fr_140px_290px]"
                >
                  <span
                    className={`label transition-colors group-hover/row:text-bg ${isOpen ? "text-acc" : "text-mute"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1.3rem,2.7vw,2.5rem)] font-bold tracking-[-.02em] [font-stretch:112%]">
                    {service.title}
                  </span>
                  <span className="label hidden text-mute transition-colors group-hover/row:text-bg lg:block">
                    {stepLabel(service)}
                  </span>
                  <span className="label col-start-2 text-mute transition-colors group-hover/row:text-bg lg:col-start-auto lg:text-right lg:text-ink">
                    {service.price}
                  </span>
                </button>
              </h3>
              <div
                id={`service-panel-${i}`}
                role="region"
                aria-labelledby={`service-${i}`}
                inert={!isOpen}
                onTransitionEnd={() => ScrollTrigger.refresh()}
                className={`grid transition-[grid-template-rows] duration-700 ease-out-expo ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden px-2 transition-[padding] duration-500 ease-out-expo group-hover/row:px-3.5">
                  <ol className="list-inside list-decimal pb-8 text-[15px] font-light leading-[1.7] text-ink/80 transition-colors duration-300 group-hover/row:text-bg lg:columns-3 lg:gap-x-10 lg:pl-[100px] [&>li]:break-inside-avoid">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
