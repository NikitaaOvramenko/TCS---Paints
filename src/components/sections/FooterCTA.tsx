import { Button } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { ctaContent, replaceLocationPlaceholders } from "@/data/content";
import type { Location } from "@/data/locations";
import { Marquee } from "./Marquee";

interface FooterCTAProps {
  location?: Location;
}

export function FooterCTA({ location }: FooterCTAProps) {
  const title = location
    ? replaceLocationPlaceholders(ctaContent.titleWithCity, location)
    : ctaContent.title;

  return (
    <section className="bg-purple-950 text-white">
      <Marquee
        items={siteConfig.services.map((service) => service.name)}
        className="border-t-0"
      />

      <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <h2 className="display-lg max-w-[14ch]">{title}</h2>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm leading-relaxed opacity-60">
            {ctaContent.subtitle}
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/quote" variant="accent" size="lg">
              {ctaContent.buttonText}
            </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="eyebrow opacity-60 transition-opacity hover:opacity-100"
            >
              or call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
