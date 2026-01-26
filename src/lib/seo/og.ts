import { siteConfig } from '@/data/site'
import type { Location } from '@/data/locations'

/**
 * Generate OpenGraph metadata for a page
 */
export function getOpenGraphData(
  title: string,
  description: string,
  path: string = '',
  location?: Location
) {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    url,
    siteName: siteConfig.name,
    type: 'website' as const,
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }
}

/**
 * Generate Twitter card metadata
 */
export function getTwitterData(title: string, description: string) {
  return {
    card: 'summary_large_image' as const,
    title,
    description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  }
}
