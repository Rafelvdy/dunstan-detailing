import styles from "./serviceCard.module.css";


export default function ServiceCard() {
    return (
        <div className={styles.ServiceCard}>
            <div className={styles.ServiceCardHeader}>
                <div className={styles.ServiceCardHeaderText}>
                    <h1>Service</h1>
                </div>
            </div>
            <div className={styles.ServiceCardSeparator}></div>
            <div className={styles.ServiceCardContent}>
                <div className={styles.ServiceImage}></div>
                <div className={styles.ServiceDescription}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet fermentum nisl. 
                        Integer aliquet tortor quis eros pulvinar, a iaculis ligula rhoncus. Suspendisse non arcu non nisl tristique auctor. 
                        Sed id dapibus mi. Quisque placerat at mauris non fringilla. Donec pretium a est ut venenatis. Etiam ut eros eros.
                    </p>
                </div>
            </div>
        </div>
    )
}