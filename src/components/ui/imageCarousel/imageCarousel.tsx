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

const BLUR_DATA_URL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect width='1' height='1' fill='%23111'/></svg>"

// Define carousel images with SEO metadata based on actual image content
const CAROUSEL_IMAGES = [
    {
        src: "/images/carousel/1a.webp",
        alt: "Red Ferrari luxury sports car interior detailing - leather seats and dashboard cleaning",
        title: "Ferrari Interior Detailing - Premium Leather Treatment and Dashboard Care"
    },
    {
        src: "/images/carousel/1b.webp",
        alt: "Red Ferrari 360 Modena exterior detailing - professional paint correction and ceramic coating",
        title: "Ferrari 360 Modena Paint Correction and Ceramic Coating Service"
    },
    {
        src: "/images/carousel/2a.webp",
        alt: "Black VW Golf professional exterior detailing - paint enhancement and protection",
        title: "VW Golf Sedan Paint Enhancement and Protection Detailing"
    },
    {
        src: "/images/carousel/2b.webp",
        alt: "Black Golf rear view showing professional paint correction results",
        title: "Golf Paint Correction Results - Mirror Finish Achievement"
    },
    {
        src: "/images/carousel/3a.webp",
        alt: "Honda Civic type R car exterior wash and detailing on driveway",
        title: "Honda Civic type R Professional Exterior Wash and Detail Service"
    },
    {
        src: "/images/carousel/4a.webp",
        alt: "Luxury supercars on driveway - Lamborghini and McLaren detailing showcase",
        title: "Supercar Collection Detailing - Lamborghini and McLaren Services"
    },
    {
        src: "/images/carousel/5a.webp",
        alt: "BMW professional detailing",
        title: "BMW Professional Detailing"
    },
    {
        src: "/images/carousel/5b.webp",
        alt: "White interior BMW detail. Care of leather seats and dashboard.",
        title: "White interior BMW detail. Care of leather seats and dashboard."
    },
    {
        src: "/images/carousel/5c.webp",
        alt: "BMW boot interior detailing",
        title: "BMW boot interior detailing"
    },
    {
        src: "/images/carousel/6a.webp",
        alt: "Classic Ford Escort professional exterior detailing and restoration",
        title: "Classic Ford Escort restoration"
    },
    {
        src: "/images/carousel/7a.webp",
        alt: "Classic green VW Volkswagen van exterior cleaning and restoration",
        title: "Volkswagen Van Classic Restoration and Exterior Detailing"
    },
    {
        src: "/images/carousel/8a.webp",
        alt: "Grey Lamborghini Urus SUV professional detailing",
        title: "Lamborghini Urus SUV Paint Correction and Professional Detailing"
    },
    {
        src: "/images/carousel/9a.webp",
        alt: "Orange Lamborghini supercar interior detailing - premium leather care",
        title: "Orange Lamborghini interior detailing - premium leather care"
    },
    {
        src: "/images/carousel/10a.webp",
        alt: "Engine bay detailing and cleaning service",
        title: "Engine bay detailing and cleaning"
    },
    {
        src: "/images/carousel/11a.webp",
        alt: "Professional bodywork restoration and polishing service before and after",
        title: "Bodywork restoration and polishing"
    },
    {
        src: "/images/carousel/12a.webp",
        alt: "Mercedes-Benz E-Class professional detailing",
        title: "Mercedes-Benz E-Class professional detailing"
    },
    {
        src: "/images/carousel/13a.webp",
        alt: "Professional headlight restoration and polishing service before and after",
        title: "Headlight Restoration Service - Crystal Clear Visibility Enhancement"
    },
    {
        src: "/images/carousel/14a.webp",
        alt: "Black Aston Martin Vantage car professional exterior detailing",
        title: "Black Aston Martin Vantage car professional exterior detailing"
    },
    {
        src: "/images/carousel/15a.webp",
        alt: "Luxury car interior leather seat and dashboard conditioning and protection treatment before",
        title: "Luxury car interior leather seat and dashboard conditioning and protection treatment before"
    },
    {
        src: "/images/carousel/15b.webp",
        alt: "High-end car interior detailing showing steering wheel and dashboard care after",
        title: "Luxury Interior Detailing - Steering Wheel and Dashboard Care after"
    }
] as const

export default function ImageCarousel() {
    const [isDesktop, setIsDesktop] = useState(false)
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Prefetch strategy: preload current + next 3 images
    const prefetchImageAt = useCallback((index: number) => {
        if (typeof window === "undefined") return
        const normalized = ((index % CAROUSEL_IMAGES.length) + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
        const imageSrc = CAROUSEL_IMAGES[normalized].src
        const img = new window.Image()
        img.src = imageSrc
    }, [])

    const prefetchNextImages = useCallback((currentIndex: number, count: number = 3) => {
        for (let i = 1; i <= count; i++) {
            prefetchImageAt(currentIndex + i)
        }
    }, [prefetchImageAt])

    // Responsive breakpoint detection
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Carousel API and prefetching
    useEffect(() => {
        if (!api) return
        
        const onSelect = () => {
            const idx = api.selectedScrollSnap()
            setCurrentIndex(idx)
            prefetchNextImages(idx, 3)
        }
        
        // Initial prefetch
        onSelect()
        
        api.on("select", onSelect)
        api.on("reInit", onSelect)
        
        return () => {
            api.off("select", onSelect)
        }
    }, [api, prefetchNextImages])

    // Optimized responsive sizes
    const sizes = isDesktop 
        ? "(min-width: 1024px) 700px, 90vw" 
        : "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"

    return (
        <div>
            {/* Schema.org structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageGallery",
                        "name": "Dunstan Detailing - Professional Car Detailing Gallery",
                        "description": "Professional automotive detailing services including paint correction, ceramic coating, interior cleaning, and more",
                        "url": "/#gallery",
                        "image": CAROUSEL_IMAGES.map(img => ({
                            "@type": "ImageObject",
                            "url": img.src,
                            "description": img.alt,
                            "name": img.title
                        }))
                    })
                }}
            />
            
            <Carousel className={styles.carousel} setApi={setApi}>
                <CarouselContent className={styles.carouselContent}>
                    {CAROUSEL_IMAGES.map((image, i) => (
                        <CarouselItem 
                            key={`${image.src}-${i}`} 
                            className={`${styles.carouselItem} ${isDesktop ? styles.DesktopCarousel : ''}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                title={image.title}
                                width={1000}
                                height={1000}
                                className={styles.carouselImage}
                                priority={i < 2} // Prioritize first 2 images
                                loading={i < 2 ? "eager" : "lazy"}
                                placeholder="blur"
                                blurDataURL={BLUR_DATA_URL}
                                unoptimized={false} // Enable Next.js optimization
                                sizes={sizes}
                                quality={85} // Optimize quality vs file size
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious aria-label="View previous detailing work example" />
                <CarouselNext aria-label="View next detailing work example" />
            </Carousel>
            
            {/* Gallery counter for better UX */}
            <div className={styles.galleryCounter} aria-live="polite">
                <span className="sr-only">Image </span>
                {currentIndex + 1} of {CAROUSEL_IMAGES.length}
            </div>
        </div>
    )
}