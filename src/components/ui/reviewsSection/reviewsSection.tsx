import { Marquee } from "@/components/magicui/marquee";
import ReviewCard from "@/components/ui/reviewCard";
import styles from "./reviewsSection.module.css";

// Sample review data - in a real app this would come from props or API
const reviewsData = [
  {
    id: 1,
    customerName: "Jack Sutliff",
    reviewText: "Luke did a great job on my company van couldn't be happier with the results would recommend to anyone and everyone. ",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 2,
    customerName: "Lukha Singh",
    reviewText: "Luke goes above and beyond for his customers and takes great pride in his work.",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 3,
    customerName: "Mark Tristem",
    reviewText: "My 6 year old black car had marks on it that I thought would never come out but after Luke worked his magic you could shave in the gloss reflection he produced!",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 4,
    customerName: "Susan Bevan",
    reviewText: "Luke worked miracles on my 20 yr old dull black civic. He is a perfectionist ,taking great care and attention to detail.",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 5,
    customerName: "Peter P",
    reviewText: "The attention to detail is remarkable, leaving no spot untouched. He is friendly, professional, and genuinely cares about the results he delivers.",
    rating: 5,
    serviceType: "Full Detail"
  }
];

interface ReviewsSectionProps {
  className?: string;
}

const ReviewsSection = ({ className }: ReviewsSectionProps) => {
  return (
    <section className={`${styles.ReviewsSection} ${className || ''}`}>

      
      <div className={styles.MarqueeContainer}>
        <Marquee
          pauseOnHover={true}
          className={styles.ReviewsMarquee}
          repeat={2}
        >
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              customerName={review.customerName}
              reviewText={review.reviewText}
              rating={review.rating}
              serviceType={review.serviceType}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ReviewsSection; 