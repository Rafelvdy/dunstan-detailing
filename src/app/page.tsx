import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Reviews />
        <Services />
      </main>
      <Footer />
    </>
  );
}
