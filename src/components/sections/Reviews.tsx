import { Section, SectionHeader, Card, StarIcon } from "@/components/ui";
import type { Location } from "@/data/locations";
import { getInitials } from "@/lib/utils/format";

interface ReviewsProps {
  location?: Location;
}

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Miami, FL',
    rating: 5,
    text: 'Absolutely fantastic work! They transformed our living room and kitchen. Professional, clean, and the results exceeded our expectations.',
    date: '2024-01-15',
  },
  {
    name: 'Michael R.',
    location: 'Orlando, FL',
    rating: 5,
    text: 'Best painting company I\'ve ever worked with. On time, on budget, and the attention to detail was impressive.',
    date: '2024-02-20',
  },
  {
    name: 'Jennifer L.',
    location: 'Tampa, FL',
    rating: 5,
    text: 'They painted the entire exterior of our home and it looks brand new. Highly recommend!',
    date: '2024-03-10',
  },
  {
    name: 'David K.',
    location: 'Houston, TX',
    rating: 5,
    text: 'Professional from start to finish. Great communication and amazing results.',
    date: '2024-04-05',
  },
];

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
    ? `What ${location.cityName} Customers Say`
    : 'What Our Customers Say';

  return (
    <Section background="gray" id="reviews">
      <SectionHeader title={title} subtitle="Real reviews from satisfied homeowners and businesses." />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, index) => (
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
