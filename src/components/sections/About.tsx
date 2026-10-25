import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-32">
      <Container className="reveal grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <SectionHeading>Who we are?</SectionHeading>
        <p className="text-lg leading-relaxed text-muted md:text-xl">
          We are a professional vehicle detailing service based in Maidstone, Kent. Operating for
          the past 5 years, the business provides high-quality cleaning, polishing, and protection
          services for cars, serving private individuals and local businesses. The owner brings
          nearly 10 years of hands-on experience in car care and detailing, combining expert
          knowledge with a passion for delivering exceptional results. With a strong focus on
          reliability, honesty, and attention to detail, Dunstan Detailing has built a loyal
          customer base through word-of-mouth and consistent, top-tier service.
        </p>
      </Container>
    </section>
  );
}
