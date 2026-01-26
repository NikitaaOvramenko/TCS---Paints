import { Section, Button } from '@/components/ui'
import { siteConfig } from '@/data/site'
import { ctaContent, replaceLocationPlaceholders } from '@/data/content'
import type { Location } from '@/data/locations'

interface FooterCTAProps {
  location?: Location
}

export function FooterCTA({ location }: FooterCTAProps) {
  const title = location
    ? replaceLocationPlaceholders(ctaContent.titleWithCity, location)
    : ctaContent.title

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
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </Section>
  )
}
