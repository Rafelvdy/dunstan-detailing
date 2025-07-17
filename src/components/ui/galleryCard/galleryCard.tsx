import styles from "./galleryCard.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryCardProps {
    index: number;
    isMobile: boolean;
}

const GalleryCard = ({ index, isMobile }: GalleryCardProps) => {
    const galleryCardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!galleryCardRef.current) return;

        const getInitialX = (index: number, isMobile: boolean) => {
            const offset = isMobile ? "50%" : "100%";
            return index % 2 !== 0 ? offset : `-${offset}`;
        }

        const getInitialRotation = (index: number, isMobile: boolean) => {
            if (isMobile) return 0;
            return index % 2 !== 0 ? 15 : -15;
        }

        const initialX = getInitialX(index, isMobile);
        const initialRotation = getInitialRotation(index, isMobile);

        gsap.set(galleryCardRef.current, { 
            x: initialX,
            rotation: initialRotation
        });

        const animation = gsap.to(galleryCardRef.current, {
            scrollTrigger: {
                trigger: galleryCardRef.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
                markers: false,
            },
            x: 0,
            rotation: 0,
            ease: "power2.inOut",
        })

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        }
    }, [index, isMobile]);

    return (
        <div className={styles.GalleryCard} ref={galleryCardRef}>
        </div>
    )
}

export default GalleryCard;