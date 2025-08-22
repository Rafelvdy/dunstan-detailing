import ImageCarousel from "@/components/ui/imageCarousel/imageCarousel";
import styles from "./gallery.module.css";

const Gallery = () => {
    return (
        <section className={styles.galleryContainer} id="gallery">
            <h2 className={styles.galleryTitle}>Our Work</h2>
            <ImageCarousel />
        </section>
    )
}

export default Gallery;