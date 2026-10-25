import Reveal from "@/components/motion/Reveal";
import { reviews } from "@/data/reviews";

const featuredFirst = [...reviews].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="px-pad pt-section">
      <h2 id="reviews-title" className="sr-only">
        Customer reviews
      </h2>
      <ul className="grid border-l border-t border-line lg:grid-cols-3">
        {featuredFirst.map((review, i) => (
          <Reveal
            key={review.customerName}
            as="li"
            delay={i * 0.08}
            y={40}
            className={`border-b border-r border-line p-[clamp(22px,2.6vw,36px)] font-light leading-normal ${
              review.featured ? "text-[clamp(1.2rem,1.9vw,1.7rem)] lg:col-span-2" : "text-[clamp(1rem,1.25vw,1.2rem)]"
            }`}
          >
            <figure>
              <blockquote>&ldquo;{review.text.trim()}&rdquo;</blockquote>
              <figcaption className="label mt-5 flex gap-2.5 text-mute">
                <span role="img" aria-label={`${review.rating} out of 5 stars`} className="tracking-[.2em] text-acc">
                  {"★".repeat(review.rating)}
                </span>
                <span>
                  {review.customerName} · {review.serviceType}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
