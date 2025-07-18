import { Marquee } from "@/components/magicui/marquee";
import ReviewCard from "@/components/ui/reviewCard";
import styles from "./reviewsSection.module.css";

// Sample review data - in a real app this would come from props or API
const reviewsData = [
  {
    id: 1,
    customerName: "Jack Sutliff",
    reviewText: "Luke did a great job on my company van couldn’t be happier with the results would recommend to anyone and everyone. Honest, friendly and all round great guy thanks again for the work will definitely be using again",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 2,
    customerName: "Lukha Singh",
    reviewText: "Best in business!!! Luke goes above and beyond for his customers and takes great pride in his work. Been using Dunstan detailing for two years now and wouldn’t work with anyone else.",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 3,
    customerName: "Mark Tristem",
    reviewText: "How refreshing to find someone as passionate in his work as Luke. My 6 year old black car had marks on it that I thought would never come out but after Luke worked his magic you could shave in the gloss reflection he produced! Both inside and out now look like it's just come off the production line with valuable advice on how to maintain it. Delighted - Thanks so much.",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 4,
    customerName: "Susan Bevan",
    reviewText: "I would give more stars if I could. Luke worked miracles on my 20 yr old dull black civic. He is a perfectionist ,taking great care and attention to detail. Hard working , friendly, and helpful. I will 100% be a regular customer from now on.",
    rating: 5,
    serviceType: "Full Detail"
  },
  {
    id: 5,
    customerName: "Peter P",
    reviewText: "I am consistently impressed with the quality of service provided by Luke. The attention to detail is remarkable, leaving no spot untouched. From the exterior wash to the interior vacuuming and polishing, the consistently exceeds my expectations. He is friendly, professional, and genuinely cares about the results he delivers. I appreciate his commitment to using high-quality products that leave my car shining and protected",
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