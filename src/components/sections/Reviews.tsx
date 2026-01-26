import { Section, SectionHeader, Card } from '@/components/ui'
import { reviewsContent, replaceLocationPlaceholders } from '@/data/content'
import type { Location } from '@/data/locations'
import { getInitials } from '@/lib/utils/format'

interface ReviewsProps {
  location?: Location
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= rating ? 'text-yellow-400' : 'text-neutral-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews({ location }: ReviewsProps) {
  const title = location
    ? replaceLocationPlaceholders(reviewsContent.titleWithCity, location)
    : reviewsContent.title

  return (
    <Section background="gray" id="reviews">
      <SectionHeader title={title} subtitle={reviewsContent.subtitle} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reviewsContent.reviews.map((review, index) => (
          <Card key={index} className="flex flex-col">
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
  )
}
