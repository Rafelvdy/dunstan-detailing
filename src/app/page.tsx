"use client";
import styles from "./page.module.css"; 
//Importing Pages
import Hero from "@/components/sections/hero/hero";
import Company from "@/components/sections/company/company";
import Gallery from "@/components/sections/gallery/gallery";

import ServiceCardThin from "@/components/ui/serviceCard/serviceCardThin";
import DeskNav from "@/components/ui/navBar/desktop/deskNav";
import MobileNav from "@/components/ui/navBar/mobile/mobileNav";
import ReviewsSection from "@/components/ui/reviewsSection";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);
  
  
  const pfpRef = useRef<HTMLDivElement>(null);
  const aboutTextContainerRef = useRef<HTMLDivElement>(null);
  const exampleImageRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);
  const serviceCard3Ref = useRef<HTMLDivElement>(null);
  const galleryTitleRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); }
  }, []);

  


  useEffect(() => {
    //Hero page animations
      const galleryTitleSplit = SplitText.create(galleryTitleRef.current, {
        type: "lines",
        linesClass: "line",
        autoSplits: true,
        mask: "lines",
      });

      //About page animations
      gsap.set(pfpRef.current, {
        x: 50,
        opacity: 0,
      });
      gsap.set(aboutTextContainerRef.current, {
        x: 50,
        opacity: 0,
      });
      gsap.set(exampleImageRef.current, {
        x: 50,
        opacity: 0,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "top center",
          end: "bottom bottom", 
          markers: false,
        }
      })
      .to(pfpRef.current, { 
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 0)
      .to(aboutTextContainerRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 0.1)
      .to(exampleImageRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 0.2)

      gsap.set(galleryTitleSplit.lines, {
        y: 100,
      })

      gsap.to(galleryTitleSplit.lines, {
        scrollTrigger: {
          trigger: galleryTitleRef.current,
          start: "top 90%",
        },
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })

    
  }, []); 



  return (
    <>
      <header className={styles.MobileNavBarContainer}>
        {!isMobile && <DeskNav />}
        {isMobile && <MobileNav />}
      </header>

      
      <main className={styles.PageContainer} id="home">
        <Hero />
        <Company />
        <ReviewsSection />
        <Gallery />
        
        <section className={styles.ServicesContainer} id="services">
          {/* <div className={styles.svgContainer}>
            <PageSvg />
          </div> */}
          <div className={styles.ServiceTitleContainer}>
            <h2 className={styles.ServiceTitle}>Services</h2>
          </div>
          <div className={styles.ServiceCardThinContainer}>
            <ServiceCardThin ref={serviceCard1Ref} 
              title="Service 1" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mollis turpis. 
              Fusce tempus velit at magna."   
              price="Price" 
            />
            <ServiceCardThin ref={serviceCard2Ref} 
              title="Service 2" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mollis turpis. 
              Fusce tempus velit at magna."  
              price="Price" 
            />
            <ServiceCardThin ref={serviceCard3Ref} 
              title="Service 3" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mollis turpis. 
              Fusce tempus velit at magna."   
              price="Price" 
            />
          </div>
        </section>
      </main>
    </>
  );
}
