import Container from "@/components/ui/Container";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="border-b border-line py-16 md:py-24">
      <Container>
        <h2 id="reviews-title" className="sr-only">
          Customer reviews
        </h2>
        <ul className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.customerName} className="flex flex-col justify-between gap-8 bg-bg p-6">
              <div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span
                    role="img"
                    aria-label={`${review.rating} out of 5 stars`}
                    className="tracking-widest text-accent"
                  >
                    {"★".repeat(review.rating)}
                  </span>
                  <span>{review.serviceType}</span>
                </div>
                <p className="mt-5 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
              <p className="text-sm text-muted">— {review.customerName}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
