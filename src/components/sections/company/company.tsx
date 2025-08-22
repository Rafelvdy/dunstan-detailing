import styles from "./company.module.css";

const Company = () => {
    return (
        <section className={styles.CompanyContainer} id="about">
            <h2 className={styles.CompanyTitle}>Who we are?</h2>
            <p className={styles.CompanyText}>We are a professional vehicle detailing service based in Maidstone,
               Kent. Operating for the past 5 years, the business provides high-quality cleaning, 
               polishing, and protection services for cars, serving private individuals and local businesses. 
               The owner brings nearly 10 years of hands-on experience in car care and detailing, 
               combining expert knowledge with a passion for delivering exceptional results. 
               With a strong focus on reliability, honesty, and attention to detail, 
               Dunstan Detailing has built a loyal customer base through word-of-mouth and consistent, top-tier service.</p>
        </section>
    )
}

export default Company;
