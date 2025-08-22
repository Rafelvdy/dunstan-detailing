"use client";
import styles from "./footer.module.css";
import Image from "next/image";
import { useState } from "react";
import { copyToClipboard } from "@/lib/utils";

export default function Footer() {
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    const handleCopy = async (key: string, value: string) => {
        const success = await copyToClipboard(value);
        if (success) {
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey(null), 2000);
        }
    };

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
                <Image src="/images/map.png" alt="map" width={1000} height={1000} className={styles.mapImage}/>
            </div>
            <div className={styles.contactContainer}>
                <h3 className={styles.contactTitle}>Have an inquiry or want to book a service?</h3>
                <p className={styles.contactText}>Contact us today!</p>
                <div className={styles.contactRow}>
                    <button
                        type="button"
                        className={styles.contactInfoButton}
                        aria-label="Copy email to clipboard"
                        onClick={() => handleCopy("email", "dunstan.detailing@gmail.com")}
                    >
                        <span className={styles.contactInfo}>dunstan.detailing@gmail.com</span>
                    </button>
                    {copiedKey === "email" && (
                        <span className={styles.copiedPill} role="status" aria-live="polite">Copied</span>
                    )}
                </div>
                <div className={styles.contactRow}>
                    <button
                        type="button"
                        className={styles.contactInfoButton}
                        aria-label="Copy phone number to clipboard"
                        onClick={() => handleCopy("phone", "07712811575")}
                    >
                        <span className={styles.contactInfo}>07712811575</span>
                    </button>
                    {copiedKey === "phone" && (
                        <span className={styles.copiedPill} role="status" aria-live="polite">Copied</span>
                    )}
                </div>
            </div>
        </footer>
    )
}