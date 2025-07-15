"use client";
import styles from "./page.module.css"; 
import { HamburgerMenu } from "@/components/ui/hamburgerMenu";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
// import Link from "next/link";

gsap.registerPlugin(SplitText);

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroContactButtonRef = useRef<HTMLDivElement>(null);
  const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontLoaded(true);
    });
  }, []);

  useEffect(() => {
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
    }
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
        <div className={styles.AboutContainer}>
          
        </div>
      </main>
    </>
  );
}
