import styles from "./serviceCardThin.module.css";
import React from "react";

interface ServiceCardThinProps {
  onClick?: () => void;
  isFullScreen?: boolean;
}

const ServiceCardThin = React.forwardRef<HTMLDivElement, ServiceCardThinProps>((props, ref) => {
    return (
        <div 
          className={styles.ServiceCardThin} 
          ref={ref}
          onClick={props.onClick}
        >
        </div>
    )
})

ServiceCardThin.displayName = "ServiceCardThin";

export default ServiceCardThin;