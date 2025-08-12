"use client";
import styles from "./page.module.css"; 
// import ServiceCard from "@/components/ui/serviceCard/serviceCard";
import ServiceCardThin from "@/components/ui/serviceCard/serviceCardThin";
import GalleryCard from "@/components/ui/galleryCard/galleryCard";
import DeskNav from "@/components/ui/navBar/desktop/deskNav";
import MobileNav from "@/components/ui/navBar/mobile/mobileNav";
import ReviewsSection from "@/components/ui/reviewsSection";
import PageSvg from "@/components/svg/pageSVG";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroContactButtonRef = useRef<HTMLDivElement>(null);
  const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);
  const pfpRef = useRef<HTMLDivElement>(null);
  const aboutTextContainerRef = useRef<HTMLDivElement>(null);
  const exampleImageRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);
  const serviceCard3Ref = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const galleryTitleRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); }
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontLoaded(true);
    });
  }, []);


  useEffect(() => {
    //Hero page animations
    if (isFontLoaded && heroTitleRef.current && heroSubtitleRef.current) {
      const heroTitleSplit = SplitText.create(heroTitleRef.current, {
          type: "lines",
          linesClass: "line",
          autoSplits: true,   
      });

      const galleryTitleSplit = SplitText.create(galleryTitleRef.current, {
        type: "lines",
        linesClass: "line",
        autoSplits: true,
        mask: "lines",
    });

      const heroSubtitleSplit = SplitText.create(heroSubtitleRef.current, {
        type: "lines",
        linesClass: "line",
        autoSplits: true,
      });

      gsap.set(heroTitleSplit.lines, {
        y: 50,
        opacity: 0,
      });

      gsap.set(heroSubtitleSplit.lines, {
        y: 50,
        opacity: 0,
      });

      gsap.set(heroImageRef.current, {
        y: 50,
        opacity: 0,
      })

      gsap.to(heroTitleSplit.lines, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.2,
      });

      gsap.to(heroSubtitleSplit.lines, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
      });

      gsap.to(heroImageRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
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

    };
  }, [isFontLoaded]); // Added empty dependency array



  return (
    <>
      <header className={styles.MobileNavBarContainer}>
        {!isMobile && <DeskNav />}
        {isMobile && <MobileNav />}
      </header>

      
      <main className={styles.PageContainer} id="home">
        <section className={styles.HeroContainer}>
          <div className={styles.GridBackgroundContainer}></div>
          <div className={styles.HeroTitleContainer}>
            <div className={styles.HeroTitle} ref={heroTitleRef}>
              <h1 className={styles.HeroTitleText}>Premium Car Detailing that <span className={styles.HeroTitleTextHighlight}>SHINES</span> above the Rest.</h1>
            </div>
          </div>
          <div className={styles.HeroSubtitleContainer}>
            <div className={styles.HeroSubtitle} ref={heroSubtitleRef}>
              {isFontLoaded && (
                <ul>
                  <li className={styles.HeroSubtitleItem}>Prep.</li>
                  <li className={styles.HeroSubtitleItem}>Polish.</li>
                  <li className={styles.HeroSubtitleItem}>Protect.</li>
                </ul>
              )}
            </div>
            <div className={styles.HeroContactButtonContainer} ref={heroContactButtonRef}>
              {isFontLoaded && (
                <button className={styles.HeroContactButton}>Contact</button>
              )}
            </div>
          </div>
        </section>

        <section className={styles.AboutContainer} ref={aboutContainerRef} id="about">
          <div className={styles.svgContainer}>
            {/* <PageSvg /> */}
          </div>
          <div className={styles.PFPContainer} ref={pfpRef}></div>
          <div className={styles.AboutTextContainer} ref={aboutTextContainerRef}>
            <div className={styles.AboutTextName}>
              <h2>Luke Dunstan</h2>
            </div>
            <div className={styles.AboutTextExperience}>
              <h3>X+ years of experience, x amount of cars detailed</h3>
            </div>
            <div className={styles.AboutTextBrief}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
          </div>  
          <ReviewsSection />
        </section>
        
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

        <section className={styles.GalleryContainer} id="gallery">
          <div className={styles.GalleryTitleContainer}>
            <h2 className={styles.GalleryTitle} ref={galleryTitleRef}>Gallery</h2>
          </div>
          <GalleryCard index={1} isMobile={isMobile}/>
          <GalleryCard index={2} isMobile={isMobile}/>
          <GalleryCard index={3} isMobile={isMobile}/>
          <GalleryCard index={4} isMobile={isMobile}/>
          <GalleryCard index={5} isMobile={isMobile}/>
          <GalleryCard index={6} isMobile={isMobile}/>
          </section> 

          

      </main>
    </>
  );
}
