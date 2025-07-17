import styles from "./serviceCardThin.module.css";
import React from "react";

interface ServiceCardThinProps {
  onClick?: () => void;
  isFullScreen?: boolean;
  title: string;
  description: string;
  price: string;
}

const ServiceCardThin = React.forwardRef<HTMLDivElement, ServiceCardThinProps>((props, ref) => {
    return (
        <div 
          className={styles.ServiceCardThin} 
          ref={ref}
          onClick={props.onClick}
        >
          <div className={styles.ServiceGrid}>
            <div className={styles.ServiceGridTitle}>
              <h3>{props.title}</h3>
            </div>
            <div className={styles.ServiceGridDescription}>
              <p>{props.description}</p>
            </div>
            <div className={styles.ServiceGridPrice}>
              <p className={styles.ServiceGridPriceText}>{props.price}</p>
            </div>
          </div>
        </div>
    )
})

ServiceCardThin.displayName = "ServiceCardThin";

export default ServiceCardThin;