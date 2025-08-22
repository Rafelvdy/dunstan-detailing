import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
  } from "@/components/ui/carousel"
  import Image from "next/image"
  import styles from "./imageCarousel.module.css"
  import { useState, useEffect, useCallback } from "react"

export default function ImageCarousel() {

    const [isDesktop, setIsDesktop] = useState(false)
    const [api, setApi] = useState<CarouselApi | null>(null)

    const imageUrls = [
        "/images/gallery-image-1.webp",
        "/images/gallery-image-2.webp",
        "/images/gallery-image-3.webp",
        "/images/gallery-image-4.webp",
        "/images/gallery-image-5.webp",
        "/images/gallery-image-6.webp",
        "/images/gallery-image-7.webp",
        "/images/gallery-image-8.webp",
        "/images/gallery-image-9a.webp",
        "/images/gallery-image-9b.webp",
        "/images/gallery-image-10.webp",
    ]

    const prefetchImageAt = useCallback((index: number) => {
        if (typeof window === "undefined") return
        const normalized = ((index % imageUrls.length) + imageUrls.length) % imageUrls.length
        const url = imageUrls[normalized]
        const img = new window.Image()
        img.src = url
    }, [imageUrls])

    const prefetchNextImages = useCallback((currentIndex: number, count: number = 2) => {
        for (let i = 1; i <= count; i++) {
            prefetchImageAt(currentIndex + i)
        }
    }, [prefetchImageAt])

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    useEffect(() => {
        if (!api) return
        const onSelect = () => {
            const idx = api.selectedScrollSnap()
            prefetchNextImages(idx, 2)
        }
        onSelect()
        api.on("select", onSelect)
        api.on("reInit", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api, prefetchNextImages])

    const sizes = isDesktop ? "(min-width: 1024px) 700px, 90vw" : "100vw"

    return (
        <Carousel className={styles.carousel} setApi={setApi}>
            <CarouselContent className={styles.carouselContent}>
                {imageUrls.map((src, i) => (
                    <CarouselItem key={src} className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}>
                        <Image
                            src={src}
                            alt="Detailed Work"
                            width={1000}
                            height={1000}
                            className={styles.carouselImage}
                            priority={i === 0}
                            sizes={sizes}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
