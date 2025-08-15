import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from "next/image"
  import styles from "./imageCarousel.module.css"
  import { useState, useEffect } from "react"

export default function ImageCarousel() {

    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <Carousel className={styles.carousel}>
            <CarouselContent className={styles.carouselContent}>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-1.jpg" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-2.jpg" alt="image 2" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-3.jpg" alt="image 3" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-4.jpg" alt="image 4" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-5.jpg" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-6.jpg" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-7.jpg" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-8.png" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-9a.jpg" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-9b.jpg" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-10.png" alt="image 1" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
