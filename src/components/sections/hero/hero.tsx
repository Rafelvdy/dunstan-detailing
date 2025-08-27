import styles from "./hero.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const sources = ["/videos/lambo-hero.web.mp4", "/videos/car-hero.web.mp4"];
const posters = ["/images/gallery-image-1.webp", "/images/gallery-image-7.webp"];

const Hero = () => {
    const heroTitleRef = useRef<HTMLDivElement>(null);
    const heroContactButtonRef = useRef<HTMLDivElement>(null);
    const heroVideoContainerRef = useRef<HTMLDivElement>(null);

    const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeLayer, setActiveLayer] = useState<"A" | "B">("A");
    const videoARef = useRef<HTMLVideoElement>(null);
    const videoBRef = useRef<HTMLVideoElement>(null);
    const [nextReady, setNextReady] = useState(false);
    const isTransitioningRef = useRef(false);
    const crossfadeMs = 320;

    const getNextIndex = useCallback((i: number) => (i + 1) % sources.length, []);

    // Prepare next video source on the hidden layer
    const prepareNext = useCallback((currentIndex: number, currentLayer: "A" | "B") => {
        const nextIndex = getNextIndex(currentIndex);
        const hiddenRef = currentLayer === "A" ? videoBRef : videoARef;
        const el = hiddenRef.current;
        if (!el) return;
        setNextReady(false);
        // Set up event to mark readiness
        const onCanPlay = () => {
            setNextReady(true);
            el.removeEventListener("canplay", onCanPlay);
        };
        el.addEventListener("canplay", onCanPlay);
        // Set source and try to prime playback silently
        el.src = sources[nextIndex];
        if (posters[nextIndex]) {
            el.poster = posters[nextIndex];
        }
        el.load();
        // If already buffered enough, mark as ready immediately
        if (el.readyState >= 3 /* HAVE_FUTURE_DATA */) {
            setNextReady(true);
        }
        el.play()
            .then(() => {
                // Keep it paused until crossfade start to avoid drift (muted anyway)
                el.pause();
            })
            .catch(() => {
                // Autoplay restrictions shouldn't apply while muted; ignore
            });
    }, [getNextIndex]);

    // Start crossfade to next video
    const startCrossfade = useCallback(() => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;
        const currentRef = activeLayer === "A" ? videoARef : videoBRef;
        const nextRef = activeLayer === "A" ? videoBRef : videoARef;
        const current = currentRef.current;
        const next = nextRef.current;
        if (!current || !next) return;

        // Ensure next is ready; if not, attempt play anyway
        next.play().catch(() => {});

        // Trigger CSS opacity transition by toggling classes via style
        next.style.opacity = "1";
        current.style.opacity = "0";

        // After transition, swap active layer/index and prepare subsequent video
        window.setTimeout(() => {
            // Pause the previous layer to save resources
            current.pause();
            const newActiveIndex = getNextIndex(activeIndex);
            setActiveIndex(newActiveIndex);
            setActiveLayer(activeLayer === "A" ? "B" : "A");
            // Prepare the following one
            prepareNext(newActiveIndex, activeLayer === "A" ? "B" : "A");
            isTransitioningRef.current = false;
        }, crossfadeMs);
    }, [activeIndex, activeLayer, crossfadeMs, getNextIndex, prepareNext]);

    

    useEffect(() => {
        gsap.set(heroTitleRef.current, {
            opacity: 0,
            y: 100
        });

        gsap.set(heroContactButtonRef.current, {
            opacity: 0,
            y: 100
        });

        gsap.set(heroVideoContainerRef.current, {
            opacity: 0,
        })

        gsap.to(heroTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.to(heroContactButtonRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.to(heroVideoContainerRef.current, {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
        });
        
        return () => {
            gsap.killTweensOf(heroTitleRef.current);
            gsap.killTweensOf(heroContactButtonRef.current);
            gsap.killTweensOf(heroVideoContainerRef.current);
        }
    }, []);

    useEffect(() => {
        document.fonts.ready.then(() => {
          setIsFontLoaded(true);
        });
      }, []);

    // Initial boot: set first source on active layer and prepare the next on hidden layer
    useEffect(() => {
        const activeRef = activeLayer === "A" ? videoARef : videoBRef;
        const hiddenRef = activeLayer === "A" ? videoBRef : videoARef;
        if (activeRef.current) {
            activeRef.current.src = sources[activeIndex];
            if (posters[activeIndex]) {
                activeRef.current.poster = posters[activeIndex];
            }
            activeRef.current.play().catch(() => {});
            // Make active visible
            activeRef.current.style.opacity = "1";
        }
        if (hiddenRef.current) {
            hiddenRef.current.style.opacity = "0";
        }
        prepareNext(activeIndex, activeLayer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // On timeupdate, if we're near end and next is ready, crossfade; also ensure we crossfade on ended as fallback
    const handleTimeUpdate = useCallback(() => {
        const currentRef = activeLayer === "A" ? videoARef : videoBRef;
        const el = currentRef.current;
        if (!el) return;
        const remainingMs = (el.duration - el.currentTime) * 1000;
        if (
            !isTransitioningRef.current &&
            Number.isFinite(remainingMs) &&
            remainingMs <= 300 &&
            nextReady
        ) {
            startCrossfade();
        }
    }, [activeLayer, nextReady, startCrossfade]);

    const handleEnded = useCallback(() => {
        if (!isTransitioningRef.current) {
            startCrossfade();
        }
    }, [startCrossfade]);

    return (
        <section className={styles.HeroContainer} id="home">
            
            <div className={styles.HeroVideoContainer} ref={heroVideoContainerRef}>
                <video
                    ref={videoARef}
                    autoPlay
                    muted
                    loop={false}
                    playsInline
                    preload="auto"
                    className={styles.HeroVideoLayer}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                />
                <video
                    ref={videoBRef}
                    autoPlay
                    muted
                    loop={false}
                    playsInline
                    preload="auto"
                    className={styles.HeroVideoLayer}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
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