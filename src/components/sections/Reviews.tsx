import { Section, SectionHeader, Card, StarIcon } from "@/components/ui";
import { reviewsContent, replaceLocationPlaceholders } from "@/data/content";
import type { Location } from "@/data/locations";
import { getInitials } from "@/lib/utils/format";

interface ReviewsProps {
  location?: Location;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`h-5 w-5 ${star <= rating ? "text-yellow-400" : "text-neutral-300"}`}
        />
      ))}
    </div>
  );
}

export function Reviews({ location }: ReviewsProps) {
  const title = location
    ? replaceLocationPlaceholders(reviewsContent.titleWithCity, location)
    : reviewsContent.title;

  return (
    <Section background="gray" id="reviews">
      <SectionHeader title={title} subtitle={reviewsContent.subtitle} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reviewsContent.reviews.map((review, index) => (
          <Card key={index} variant="glass" className="flex flex-col">
            <StarRating rating={review.rating} />
            <p className="mt-4 flex-1 text-neutral-600 italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
                {getInitials(review.name)}
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{review.name}</p>
                <p className="text-sm text-neutral-500">{review.location}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
