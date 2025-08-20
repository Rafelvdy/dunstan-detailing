import styles from "./serviceCard.module.css"

interface ServiceCardProps {
    title: string;
    contents: string[];
    price: string;
}

export default function ServiceCard({ title, contents, price }: ServiceCardProps) {
    return (
        <div className={styles.ServiceCard}>
            <div className={styles.ServiceCardTitle}>
                <h3>{title}</h3>
            </div>
            <div className={styles.ServiceCardContents}>
                <ol className={styles.ServiceCardContentsList}>
                    {contents.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ol>
            </div>
            <div className={styles.ServiceCardPrice}>
                <p>{price}</p>
            </div>
        </div>
    )
}