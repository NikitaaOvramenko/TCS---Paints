import { Section, SectionHeader, StarIcon } from "@/components/ui";
import type { Location } from "@/data/locations";
import { getInitials } from "@/lib/utils/format";

interface ReviewsProps {
  location?: Location;
}

const reviews = [
  {
    name: "Sarah M.",
    location: "Miami, FL",
    rating: 5,
    text: "Absolutely fantastic work! They transformed our living room and kitchen. Professional, clean, and the results exceeded our expectations.",
    date: "2024-01-15",
  },
  {
    name: "Michael R.",
    location: "Orlando, FL",
    rating: 5,
    text: "Best painting company I've ever worked with. On time, on budget, and the attention to detail was impressive.",
    date: "2024-02-20",
  },
  {
    name: "Jennifer L.",
    location: "Tampa, FL",
    rating: 5,
    text: "They painted the entire exterior of our home and it looks brand new. Highly recommend!",
    date: "2024-03-10",
  },
  {
    name: "David K.",
    location: "Houston, TX",
    rating: 5,
    text: "Professional from start to finish. Great communication and amazing results.",
    date: "2024-04-05",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "text-yellow-400" : "text-neutral-300"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews({ location }: ReviewsProps) {
  const title = location
    ? `What ${location.cityName} customers say`
    : "What our customers say";

  return (
    <Section background="light" id="reviews">
      <SectionHeader
        eyebrow="— Testimonials"
        title={title}
        subtitle="Real reviews from satisfied homeowners and businesses."
      />
      <div className="grid grid-cols-1 border-t border-neutral-900/10 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col border-b border-neutral-900/10 py-8 sm:border-r sm:px-8 sm:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <StarRating rating={review.rating} />
            <p className="mt-6 flex-1 leading-relaxed opacity-70">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-neutral-900/15 text-xs text-purple-700">
                {getInitials(review.name)}
              </div>
              <div>
                <p className="text-sm">{review.name}</p>
                <p className="eyebrow mt-1 opacity-45">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
