import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import ScrubWords from "@/components/motion/ScrubWords";

const ABOUT_TEXT =
  "We are a professional vehicle detailing service based in Maidstone, Kent. Operating for the past 5 years, the business provides high-quality cleaning, polishing, and protection services for cars, serving private individuals and local businesses. The owner brings nearly 10 years of hands-on experience in car care and detailing, combining expert knowledge with a passion for delivering exceptional results. With a strong focus on reliability, honesty, and attention to detail, Dunstan Detailing has built a loyal customer base through word-of-mouth and consistent, top-tier service.";

export default function About() {
  return (
    <Section id="about" label="01 / About">
      <Reveal as="h2" className="disp text-[clamp(2.3rem,6.2vw,6rem)]">
        Who we are?
      </Reveal>
      <ScrubWords
        text={ABOUT_TEXT}
        className="mt-11 max-w-[62rem] text-[clamp(1.3rem,2.35vw,2.2rem)] font-light leading-[1.38] lg:ml-[25%]"
      />
    </Section>
  );
}
