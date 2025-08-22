import styles from "./hero.module.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const sources = ["/videos/lambo-hero.web.mp4", "/videos/car-hero.web.mp4"];

const Hero = () => {
    const heroTitleRef = useRef<HTMLDivElement>(null);
    const heroSubtitleRef = useRef<HTMLDivElement>(null);
    const heroContactButtonRef = useRef<HTMLDivElement>(null);

    const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);

    const [index, setIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
          setIsFontLoaded(true);
        });
      }, []);

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, [index]);

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
            stagger: 0.2,
          });
    
          gsap.to(heroSubtitleSplit.lines, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.1,
          });    
        };
      }, [isFontLoaded]); // Added empty dependency array

    return (
        <section className={styles.HeroContainer} id="home">
            
            <div className={styles.HeroVideoContainer}>
            <video
                ref={videoRef}
                autoPlay
                muted
                loop={false}
                playsInline
                preload="metadata"
                className={styles.HeroVideo}
                src={sources[index]}
                onEnded={() => {
                    setIndex((index + 1) % sources.length);
                }}
            />
            </div>
          

            <div className={styles.HeroTitle} ref={heroTitleRef}>
              <h1 className={styles.HeroTitleText}>Every Car, Expertly Detailed</h1>
            </div>

            <div className={styles.HeroContactButtonContainer} ref={heroContactButtonRef}>
              {isFontLoaded && (
                <button className={styles.HeroContactButton}>Contact</button>
              )}
            </div>
        </section>
    )
}

export default Hero;