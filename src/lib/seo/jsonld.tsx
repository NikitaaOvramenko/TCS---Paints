import { siteConfig } from '@/data/site'
import type { Location } from '@/data/locations'
import { getCanonicalUrl } from './canonical'

/**
 * Generate LocalBusiness JSON-LD schema
 */
export function getLocalBusinessSchema(location?: Location) {
  const addressLocality = location?.cityName || siteConfig.address.city
  const addressRegion = location?.regionName || siteConfig.address.region
  const addressCountry = location?.countryName || siteConfig.address.country

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': getCanonicalUrl(),
    name: siteConfig.name,
    description: siteConfig.description,
    url: getCanonicalUrl(),
    telephone: location?.phone || siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality,
      addressRegion,
      addressCountry,
      postalCode: siteConfig.address.postalCode,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  }
}

/**
 * Generate Service JSON-LD schema
 */
export function getServiceSchema(location?: Location) {
  const areaServed = location
    ? {
        '@type': 'City',
        name: location.cityName,
        containedInPlace: {
          '@type': 'State',
          name: location.regionName,
        },
      }
    : {
        '@type': 'Country',
        name: 'United States',
      }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Painting Services',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: getCanonicalUrl(),
    },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting Services',
      itemListElement: siteConfig.services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
  }
}

/**
 * Generate FAQPage JSON-LD schema
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Render JSON-LD script tag
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
