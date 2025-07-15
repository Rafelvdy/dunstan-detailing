"use client";
import styles from "./page.module.css"; 
import { HamburgerMenu } from "@/components/ui/hamburgerMenu";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// import Link from "next/link";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroContactButtonRef = useRef<HTMLDivElement>(null);
  const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);
  const pfpRef = useRef<HTMLDivElement>(null);
  const aboutTextContainerRef = useRef<HTMLDivElement>(null);
  const exampleImageRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);

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

      gsap.to(heroTitleSplit.lines, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
      });

      gsap.to(heroSubtitleSplit.lines, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
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
          markers: true,
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
    };

    

  }, [isFontLoaded]); // Added empty dependency array

  return (
    <>
      <header className={styles.MobileNavBarContainer}>
        <div className={styles.MobileNavBar}>
          <div className={styles.MobileNavBarLeft}>
            <div className={styles.MobileNavLogo}>
            </div>
          </div>
          <div className={styles.MobileNavBarRight}>
          <div className={styles.HamburgerMenuContainer}>
            <HamburgerMenu 
              open={open} 
              setOpen={setOpen} 
            />
            {/* Dropdown renders as sibling to hamburger */}
            <div className={`${styles.HamburgerDropdown} ${open ? styles.HamburgerDropdownOpen : ''}`}>
              <nav className={styles.HamburgerDropdownNav}>
                <ul>
                  <li className={styles.HamburgerDropdownItem}><a href="#home">Home</a></li>
                  <li className={styles.HamburgerDropdownItem}><a href="#services">Services</a></li>
                  <li className={styles.HamburgerDropdownItem}><a href="#about">About</a></li>
                  <li className={styles.HamburgerDropdownItem}><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          </div>
        </div>
      </header>
      <main className={styles.PageContainer}>
        <div className={styles.HeroContainer}>
          <div className={styles.HeroTitleContainer}>
            <div className={styles.HeroTitle} ref={heroTitleRef}>
              {isFontLoaded && (
                <h1 className={styles.HeroTitleText}>Premium Car Detailing that <span className={styles.HeroTitleTextHighlight}>SHINES</span> above the Rest.</h1>
              )}
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
        </div>
        <div className={styles.AboutContainer} ref={aboutContainerRef}>
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
          <div className={styles.ExampleImage} ref={exampleImageRef}></div>
        </div>
      </main>
    </>
  );
}
