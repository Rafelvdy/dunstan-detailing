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
                    <Image src="/images/gallery-image-1.webp" alt="Detailed Car" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-2.webp" alt="Detailed Ferrari" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-3.webp" alt="Detailed Ford Escort" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-4.webp" alt="Detailed Lamborghini Urus" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-5.webp" alt="Detailed Mercedes" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-6.webp" alt="Urus Interior Detail" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-7.webp" alt="Detailed Aston Martin" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-8.webp" alt="Headlight Glass Clean" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-9a.webp" alt="Interior Before Image" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-9b.webp" alt="Interior After Image" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
                <CarouselItem className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                    <Image src="/images/gallery-image-10.webp" alt="Buffing before and after image" width={1000} height={1000} className={styles.carouselImage} />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
