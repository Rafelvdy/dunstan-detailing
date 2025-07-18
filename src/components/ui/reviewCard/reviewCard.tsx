import styles from "./reviewCard.module.css";
import React from "react";

interface ReviewCardProps {
  /**
   * Customer name for the review
   */
  customerName: string;
  /**
   * The review text/quote content
   */
  reviewText: string;
  /**
   * Star rating (1-5)
   */
  rating: number;
  /**
   * Optional service type that was reviewed
   */
  serviceType?: string;
  /**
   * Optional additional CSS classes
   */
  className?: string;
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ customerName, reviewText, rating, serviceType, className }, ref) => {
    // Generate star display based on rating
    const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`${styles.Star} ${
            index < rating ? styles.StarFilled : styles.StarEmpty
          }`}
        >
          ★
        </span>
      ));
    };

    return (
      <div 
        className={`${styles.ReviewCard} ${className || ''}`} 
        ref={ref}
      >
        <div className={styles.ReviewGrid}>
          <div className={styles.ReviewHeader}>
            <div className={styles.StarRating}>
              {renderStars(rating)}
            </div>
            {serviceType && (
              <div className={styles.ServiceType}>
                {serviceType}
              </div>
            )}
          </div>
          
          <div className={styles.ReviewContent}>
            <p className={styles.ReviewText}>&ldquo;{reviewText}&rdquo;</p>
          </div>
          
          <div className={styles.ReviewFooter}>
            <p className={styles.CustomerName}>— {customerName}</p>
          </div>
        </div>
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";

export default ReviewCard; 