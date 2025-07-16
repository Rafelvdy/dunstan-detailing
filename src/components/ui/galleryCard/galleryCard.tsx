import styles from "./galleryCard.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryCardProps {
    index: number;
}

const GalleryCard = ({ index }: GalleryCardProps) => {
    const galleryCardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!galleryCardRef.current) return;

        const initialX = index % 2 !== 0 ? "50%" : "-50%";
        gsap.set(galleryCardRef.current, { x: initialX });

        const animation = gsap.to(galleryCardRef.current, {
            scrollTrigger: {
                trigger: galleryCardRef.current,
                start: "top 90%",
                end: "top 60%",
                scrub: true,
                markers: false,
            },
            x: 0,
            ease: "power2.inOut",
        })

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        }
    }, [index]);

    return (
        <div className={styles.GalleryCard} ref={galleryCardRef}>
        </div>
    )
}

export default GalleryCard;