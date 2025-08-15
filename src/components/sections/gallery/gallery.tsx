import ImageCarousel from "@/components/ui/imageCarousel/imageCarousel";
import styles from "./gallery.module.css";

const Gallery = () => {
    return (
        <section className={styles.galleyContainer}>
            <ImageCarousel />
        </section>
    )
}

export default Gallery;