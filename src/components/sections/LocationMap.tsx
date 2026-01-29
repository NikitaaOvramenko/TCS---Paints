import { Section, SectionHeader, MapPinIcon } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { locationMapContent, replaceLocationPlaceholders } from "@/data/content";
import type { Location } from "@/data/locations";

interface LocationMapProps {
  location?: Location;
}

export function LocationMap({ location }: LocationMapProps) {
  const title = location
    ? replaceLocationPlaceholders(locationMapContent.titleWithCity, location)
    : locationMapContent.title;

  const address = siteConfig.address;

  return (
    <Section id="location">
      <SectionHeader title={title} subtitle={locationMapContent.subtitle} />
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Map placeholder */}
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 lg:aspect-auto lg:h-full">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
            <div className="text-center">
              <MapPinIcon className="mx-auto h-16 w-16 text-neutral-400" />
              <p className="mt-4 text-neutral-500">
                Map embed placeholder
                <br />
                <span className="text-sm">Replace with Google Maps or Mapbox</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Address</h3>
            <p className="mt-2 text-neutral-600">
              {address.street}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Phone</h3>
            <p className="mt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-purple-600 hover:text-purple-700"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Email</h3>
            <p className="mt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-purple-600 hover:text-purple-700"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Hours</h3>
            <div className="mt-2 space-y-1 text-neutral-600">
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
  );
}
