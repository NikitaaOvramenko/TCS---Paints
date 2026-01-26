import { siteConfig } from '@/data/site'
import type { Location } from '@/data/locations'

/**
 * Route paths
 */
export const paths = {
  home: '/',
  quote: '/quote',
  location: (country: string, region: string, city: string) =>
    `/${country}/${region}/${city}`,
}

/**
 * Build absolute URL for a path
 */
export function absoluteUrl(path: string = ''): string {
  return `${siteConfig.url}${path}`
}

/**
 * Build location URL from Location object
 */
export function locationUrl(location: Location): string {
  return paths.location(location.country, location.region, location.city)
}

/**
 * Get quote page URL with optional location reference
 */
export function quoteUrl(location?: Location): string {
  if (location) {
    return `${paths.quote}?location=${location.city}`
  }
  return paths.quote
}
