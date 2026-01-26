import { Section, SectionHeader } from '@/components/ui'
import { siteConfig } from '@/data/site'
import { locationMapContent, replaceLocationPlaceholders } from '@/data/content'
import type { Location } from '@/data/locations'

interface LocationMapProps {
  location?: Location
}

export function LocationMap({ location }: LocationMapProps) {
  const title = location
    ? replaceLocationPlaceholders(locationMapContent.titleWithCity, location)
    : locationMapContent.title

  const address = siteConfig.address

  return (
    <Section id="location">
      <SectionHeader title={title} subtitle={locationMapContent.subtitle} />
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Map placeholder - In production, embed Google Maps or Mapbox */}
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 lg:aspect-auto lg:h-full">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="mt-4 text-gray-500">
                Map embed placeholder
                <br />
                <span className="text-sm">
                  Replace with Google Maps or Mapbox
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
            <p className="mt-2 text-gray-600">
              {address.street}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <p className="mt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="mt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
            <div className="mt-2 space-y-1 text-gray-600">
              <p>
                <span className="font-medium">Mon-Fri:</span> {siteConfig.hours.weekdays}
              </p>
              <p>
                <span className="font-medium">Saturday:</span> {siteConfig.hours.saturday}
              </p>
              <p>
                <span className="font-medium">Sunday:</span> {siteConfig.hours.sunday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
