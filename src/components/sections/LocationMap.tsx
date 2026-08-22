import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { locationMapContent, replaceLocationPlaceholders } from "@/data/content";
import { locations, getLocationPath } from "@/data/locations";
import type { Location } from "@/data/locations";

interface LocationMapProps {
  location?: Location;
}

export function LocationMap({ location }: LocationMapProps) {
  const title = location
    ? replaceLocationPlaceholders(locationMapContent.titleWithCity, location)
    : locationMapContent.title;

  return (
    <Section id="location" background="lightAlt">
      <SectionHeader
        eyebrow="04 — Service area"
        title={title}
        subtitle={locationMapContent.subtitle}
      />

      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-24">
        {/* City index — doubles as internal linking for the location pages. */}
        <div className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
          {locations.map((loc) => {
            const isCurrent = loc.city === location?.city;
            return (
              <Link
                key={getLocationPath(loc)}
                href={getLocationPath(loc)}
                className={`group flex items-center justify-between gap-2 border-b border-neutral-900/10 py-4 transition-opacity duration-300 ${
                  isCurrent ? "text-purple-700" : "hover:opacity-60"
                }`}
              >
                <span className="text-lg font-normal tracking-[-0.01em]">
                  {loc.cityName}
                </span>
                <svg
                  className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-50"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8h13M9 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* Contact block */}
        <div className="space-y-9">
          <div>
            <p className="eyebrow mb-3 opacity-45">Phone</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-xl transition-opacity hover:opacity-60"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-3 opacity-45">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xl transition-opacity hover:opacity-60"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-3 opacity-45">Hours</p>
            <div className="space-y-1 opacity-60">
              <p>Mon–Fri &nbsp; {siteConfig.hours.weekdays}</p>
              <p>Saturday &nbsp; {siteConfig.hours.saturday}</p>
              <p>Sunday &nbsp; {siteConfig.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
