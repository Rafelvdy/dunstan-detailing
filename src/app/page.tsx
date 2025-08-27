"use client";
import styles from "./page.module.css"; 
//Importing Pages
import Hero from "@/components/sections/hero/hero";
import Company from "@/components/sections/company/company";
import Gallery from "@/components/sections/gallery/gallery";
import Services from "@/components/sections/services/services";
import Footer from "@/components/sections/footer/footer";

import DeskNav from "@/components/ui/navBar/desktop/deskNav";
import MobileNav from "@/components/ui/navBar/mobile/mobileNav";
import ReviewsSection from "@/components/ui/reviewsSection";
import ContactPopup from "@/components/ui/contactPopup/contactPopup";

import { useState } from "react";
import { useEffect } from "react";


export default function Home() {
  
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);

  const handleOpenContactPopup = () => {
    setIsContactPopupOpen(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseContactPopup = () => {
    setIsContactPopupOpen(false);
    // Restore body scroll when popup is closed
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); }
  }, []);

  return (
    <>
      <header className={styles.MobileNavBarContainer}>
        {!isMobile && <DeskNav onOpenContactPopup={handleOpenContactPopup} />}
        {isMobile && <MobileNav onOpenContactPopup={handleOpenContactPopup} />}
      </header>

      
      <main className={styles.PageContainer} id="home">
        <ContactPopup 
          isOpen={isContactPopupOpen} 
          onClose={handleCloseContactPopup} 
        />
        <Hero onOpenContactPopup={handleOpenContactPopup} />
        <Company />
        <ReviewsSection />
        <Services />
        <div className={styles.stickyContainer}>
          <Gallery />
        </div>    
        
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
