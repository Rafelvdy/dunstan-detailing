import styles from "./deskNav.module.css";
import Image from "next/image"; 

const DeskNav = () => {
    return (
        <div className={styles.DesktopNavBarContainer}>
          <div className={styles.LogoContainer}>
            <Image src="/logos/LongLogo-nobg.png" alt="logo" width={250} height={250} objectFit="contain"/>
          </div>
          <div className={styles.NavBarContainer}>
            <ul className={styles.DesktopNavBarList}>
              <li className={styles.DesktopNavBarItem}><a href="#home">Home</a></li>
              <li className={styles.DesktopNavBarItem}><a href="#about">About</a></li>
              <li className={styles.DesktopNavBarItem}><a href="#services">Services</a></li>
              <li className={styles.DesktopNavBarItem}><a href="#gallery">Gallery</a></li>
              <li className={styles.DesktopNavBarItem}><a href="#contact">Pricing</a></li>
              <li className={`${styles.DesktopNavBarItem} ${styles.DesktopNavBarItemContact}`}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
    )
}

export default DeskNav;