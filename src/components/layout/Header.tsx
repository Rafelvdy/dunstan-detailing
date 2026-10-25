import Image from "next/image";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <a href="#home" aria-label={`${site.name} home`}>
          <Image src="/logo.svg" alt={site.name} width={200} height={30} unoptimized priority />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm lg:flex">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="text-muted transition-colors hover:text-fg">
              {label}
            </a>
          ))}
          <ButtonLink href="#contact" className="px-4 py-2">
            Contact
          </ButtonLink>
        </nav>
        <MobileMenu />
      </Container>
    </header>
  );
}
