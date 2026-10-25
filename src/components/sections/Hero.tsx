import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] items-end border-b border-line"
    >
      <HeroVideo />
      <Container className="relative pb-16 md:pb-24">
        <h1 className="fade-up max-w-4xl text-display">Every Car, Expertly Detailed</h1>
        <div className="fade-up mt-8 [animation-delay:150ms]">
          <ButtonLink href="#contact" variant="solid">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
