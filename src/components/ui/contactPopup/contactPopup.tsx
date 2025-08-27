import styles from "./contactPopup.module.css";


export default function ContactPopup() {
    return (
        <div className={styles.BackgroundDim}>
            <div className={styles.PopupContainer}>
                <div className={styles.CloseButton}>
                    <button>
                        <span>X</span>
                    </button>
                </div>
                <div className={styles.Title}>
                    <h1>Contact Us</h1>
                </div>
                <div className={styles.Content}>
                    <p>Email us at <a href="mailto:dunstan.detailing@gmail.com"><u>dunstan.detailing@gmail.com</u></a></p>
                    <p>Check out our instagram <a href="https://www.instagram.com/dunstans_detailing/"><u>here</u></a></p>
                </div>
            </div>
        </div>
    )
}