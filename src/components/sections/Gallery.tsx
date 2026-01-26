import { Section, SectionHeader } from '@/components/ui'
import { galleryContent, replaceLocationPlaceholders } from '@/data/content'
import type { Location } from '@/data/locations'
import GalleryAnimations from './GalleryAnimations'

interface GalleryProps {
  location?: Location
}

// Placeholder gallery items - in production, these would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Interior',
    image: '/gallery/living-room.jpg',
  },
  {
    id: 2,
    title: 'Victorian Home Exterior',
    category: 'Exterior',
    image: '/gallery/exterior.jpg',
  },
  {
    id: 3,
    title: 'Office Space',
    category: 'Commercial',
    image: '/gallery/office.jpg',
  },
  {
    id: 4,
    title: 'Kitchen Cabinet Refresh',
    category: 'Interior',
    image: '/gallery/kitchen.jpg',
  },
  {
    id: 5,
    title: 'Beachfront Property',
    category: 'Exterior',
    image: '/gallery/beach-house.jpg',
  },
  {
    id: 6,
    title: 'Retail Storefront',
    category: 'Commercial',
    image: '/gallery/retail.jpg',
  },
]

export function Gallery({ location }: GalleryProps) {
  const title = location
    ? replaceLocationPlaceholders(galleryContent.titleWithCity, location)
    : galleryContent.title

  return (
    <Section background="gray" id="gallery">
      <GalleryAnimations />
      <SectionHeader title={title} subtitle={galleryContent.subtitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 gallery-item"
          >
            {/* Placeholder gradient - replace with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-90" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium uppercase tracking-wide text-purple-200">
                {item.category}
              </span>
              <h3 className="mt-2 text-xl font-bold text-center">{item.title}</h3>
            </div>

            {/* Category badge */}
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
