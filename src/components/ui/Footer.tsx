import Link from "next/link";
import { siteConfig } from "@/data/site";
import { locations, getLocationPath } from "@/data/locations";
import type { Location } from "@/data/locations";

interface Props {
  location?: Location;
}

export function Footer({ location }: Props) {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-5 opacity-45">{siteConfig.name}</p>
            <p className="max-w-xs leading-relaxed opacity-55">
              {siteConfig.tagline}. Licensed and insured, delivering a finish
              that lasts.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5 opacity-45">Services</p>
            <ul className="space-y-2.5">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="opacity-70 transition-opacity hover:opacity-100"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 opacity-45">Service Area</p>
            <ul className="space-y-2.5">
              {locations.slice(0, 5).map((loc) => (
                <li key={getLocationPath(loc)}>
                  <Link
                    href={getLocationPath(loc)}
                    className="opacity-70 transition-opacity hover:opacity-100"
                  >
                    {loc.cityName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 opacity-45">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="opacity-55">
                {location
                  ? `${location.cityName}, ${location.regionName}`
                  : `${siteConfig.address.city}, ${siteConfig.address.region}`}
              </li>
              {siteConfig.socials.instagram && (
                <li>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 transition-opacity hover:opacity-100"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="eyebrow mt-10 opacity-35">{siteConfig.copyright}</p>
      </div>
    </footer>
  );
}
