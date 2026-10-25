import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-20 md:py-32">
      <Container>
        <SectionHeading>What We Offer...</SectionHeading>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          We specialise in car owners who want to maintain or enhance the appearance and condition
          of their vehicles. This includes working professionals, car enthusiasts, and local
          businesses with company vehicles in Kent and South London
        </p>
        <ul className="mt-14 grid items-start border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.title} className="border-b border-r border-line">
              <details className="group p-6">
                <summary className="flex flex-col gap-3">
                  <span className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl">{service.title}</h3>
                  <span className="text-sm text-muted">{service.price}</span>
                  <span className="mt-2 text-sm underline-offset-4 group-hover:underline">
                    <span className="group-open:hidden">Show more</span>
                    <span className="hidden group-open:inline">Show less</span>
                  </span>
                </summary>
                <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
