import { useEffect, useState } from "react";
import styles from "./contactPopup.module.css";
import { InstagramIcon, TikTokIcon } from "../../svg/socialIcons";

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
    const [shouldRender, setShouldRender] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Small delay to ensure DOM is ready for animation
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            // Wait for animation to complete before unmounting
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen]);

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!shouldRender) return null;

    return (
        <div 
            className={`${styles.BackgroundDim} ${isAnimating ? styles.BackgroundDimVisible : ''}`}
            onClick={handleBackgroundClick}
        >
            <div className={styles.PopupContainer}>
                <div className={styles.CloseButton}>
                    <button onClick={onClose}>
                        <span>X</span>
                    </button>
                </div>
                <div className={styles.Title}>
                    <h1>Contact Us</h1>
                </div>
                <div className={styles.Content}>
                    <p>Email us at <a href="mailto:dunstan.detailing@gmail.com"><u>dunstan.detailing@gmail.com</u></a></p>
                </div>
                <div className={styles.SocialMediaSection}>
                    <div className={styles.SocialMediaItem}>
                        <a 
                            href="https://www.instagram.com/dunstandetailing?igsh=MTNqeWVyaGVjZzRpNw==" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.SocialMediaLink}
                        >
                            <InstagramIcon size={20} className={styles.SocialIcon} />
                            <span>@dunstandetailing</span>
                        </a>
                    </div>
                    <div className={styles.SocialMediaItem}>
                        <a 
                            href="https://www.tiktok.com/@dunstandetailing?_t=ZN-8zFucBVUTpe&_r=1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.SocialMediaLink}
                        >
                            <TikTokIcon size={20} className={styles.SocialIcon} />
                            <span>@dunstandetailing</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}