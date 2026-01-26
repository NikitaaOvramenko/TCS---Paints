/**
 * Normalize URL parameters to lowercase
 */
export function normalizeParam(param: string | undefined): string {
  return (param || '').toLowerCase().trim()
}

/**
 * Validate location parameters
 */
export function validateLocationParams(
  country: string,
  region: string,
  city: string
): boolean {
  // Basic validation - all params must be non-empty
  if (!country || !region || !city) {
    return false
  }

  // Only allow alphanumeric and hyphens
  const validPattern = /^[a-z0-9-]+$/

  return (
    validPattern.test(country) &&
    validPattern.test(region) &&
    validPattern.test(city)
  )
}

/**
 * Slugify a string for URL use
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
