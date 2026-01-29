import { Section, Button, PhoneIcon } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { ctaContent, replaceLocationPlaceholders } from "@/data/content";
import type { Location } from "@/data/locations";

interface FooterCTAProps {
  location?: Location;
}

export function FooterCTA({ location }: FooterCTAProps) {
  const title = location
    ? replaceLocationPlaceholders(ctaContent.titleWithCity, location)
    : ctaContent.title;

  return (
    <Section background="gradient">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/80">{ctaContent.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/quote" size="lg" variant="secondary">
            {ctaContent.buttonText}
          </Button>
          <span className="text-white/60">or</span>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-lg font-semibold text-white hover:text-white/90"
          >
            <PhoneIcon />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}
