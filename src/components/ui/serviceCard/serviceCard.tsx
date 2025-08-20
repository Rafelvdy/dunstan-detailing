"use client"

import styles from "./serviceCard.module.css"
import { useId, useState } from "react"

interface ServiceCardProps {
    title: string;
    contents: string[];
    price: string;
}

export default function ServiceCard({ title, contents, price }: ServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const contentId = useId()

    const handleToggle = () => setIsExpanded((prev) => !prev)

    return (
        <div className={styles.ServiceCard}>
            <div className={styles.ServiceCardHeader}>
                <div className={styles.ServiceCardTitle}>
                    <h3>{title}</h3>
                    <button
                    type="button"
                    onClick={handleToggle}
                    className={styles.ServiceCardToggle}
                    >
                        {isExpanded ? "Show less" : "Show more"}
                    </button>
                </div>   
            </div>
            <div
                className={styles.ServiceCardContents}
                id={`service-contents-${contentId}`}
                data-expanded={isExpanded}
                aria-hidden={!isExpanded}
            >
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