import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.differentContent}>
                <h2 className={styles.differentContentTitle}>What makes us different?</h2>
                <p className={styles.differentContentText}>With nearly a decade of experience in detailing, Dunstan Detailing offers a level of
                    quality and consistency that many others cannot. Unlike competitors, this business
                    provides a friendly, non-arrogant, and customer-first approach. Every vehicle is
                    treated with the same care as if it were our own — and customers appreciate the
                    pride and honesty that come with the service.
                </p>
            </div>
            <div className={styles.mapContainer}>
                <h3 className={styles.mapTitle}>Where to find us</h3>
                <Image src="/images/map.png" alt="map" width={1000} height={1000} />
            </div>
            <div className={styles.contactContainer}>
                <h3 className={styles.contactTitle}>Have an inquiry or want to book a service?</h3>
                <p className={styles.contactText}>Contact us today!</p>
                <p className={styles.contactInfo}>dunstan.detailing@gmail.com</p>
                <p className={styles.contactInfo}>07712811575</p>
            </div>
        </footer>
    )
}