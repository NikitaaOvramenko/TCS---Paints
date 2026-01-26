import { siteConfig } from '@/data/site'

/**
 * Get the canonical URL for a given path
 */
export function getCanonicalUrl(path: string = ''): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Remove trailing slash except for root
  const cleanPath = normalizedPath === '/' ? '' : normalizedPath.replace(/\/$/, '')

  return `${siteConfig.url}${cleanPath}`
}

/**
 * Get the canonical URL for a location
 */
export function getLocationCanonicalUrl(
  country: string,
  region: string,
  city: string
): string {
  return getCanonicalUrl(`/${country}/${region}/${city}`)
}
