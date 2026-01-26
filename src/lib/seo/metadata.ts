import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import type { Location } from '@/data/locations'
import { getCanonicalUrl } from './canonical'

interface MetadataOptions {
  title?: string
  description?: string
  path?: string
  location?: Location
  noIndex?: boolean
}

/**
 * Generate metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  location,
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const finalTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name

  const finalDescription = description || siteConfig.description

  const canonicalUrl = getCanonicalUrl(path)

  return {
    title: finalTitle,
    description: finalDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [siteConfig.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

/**
 * Generate metadata for the home page
 */
export function getHomeMetadata(): Metadata {
  return generatePageMetadata({
    title: `Professional Painting Services | ${siteConfig.name}`,
    description: siteConfig.description,
    path: '',
  })
}

/**
 * Generate metadata for the quote page
 */
export function getQuoteMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Get a Free Quote',
    description: `Request a free painting estimate from ${siteConfig.name}. We provide detailed, no-obligation quotes for all residential and commercial painting projects.`,
    path: '/quote',
  })
}

/**
 * Generate metadata for a location page
 */
export function getLocationMetadata(location: Location): Metadata {
  const title = `Professional Painting Services in ${location.cityName}, ${location.regionName}`
  const description = `Expert painting services in ${location.cityName}, ${location.regionName}. ${siteConfig.name} offers interior, exterior, and commercial painting with free estimates.`

  return generatePageMetadata({
    title,
    description,
    path: `/${location.country}/${location.region}/${location.city}`,
    location,
  })
}
