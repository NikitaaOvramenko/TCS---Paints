export interface Location {
  country: string
  countryName: string
  region: string
  regionName: string
  city: string
  cityName: string
  // Optional overrides
  phone?: string
  address?: string
}

/**
 * All supported service locations.
 * Adding a new city requires only adding an entry here.
 * URL format: /{country}/{region}/{city}
 */
export const locations: Location[] = [
  // United States - Florida
  {
    country: 'us',
    countryName: 'United States',
    region: 'fl',
    regionName: 'Florida',
    city: 'miami',
    cityName: 'Miami',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'fl',
    regionName: 'Florida',
    city: 'orlando',
    cityName: 'Orlando',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'fl',
    regionName: 'Florida',
    city: 'tampa',
    cityName: 'Tampa',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'fl',
    regionName: 'Florida',
    city: 'jacksonville',
    cityName: 'Jacksonville',
  },
  // United States - Texas
  {
    country: 'us',
    countryName: 'United States',
    region: 'tx',
    regionName: 'Texas',
    city: 'houston',
    cityName: 'Houston',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'tx',
    regionName: 'Texas',
    city: 'dallas',
    cityName: 'Dallas',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'tx',
    regionName: 'Texas',
    city: 'austin',
    cityName: 'Austin',
  },
  // United States - California
  {
    country: 'us',
    countryName: 'United States',
    region: 'ca',
    regionName: 'California',
    city: 'los-angeles',
    cityName: 'Los Angeles',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'ca',
    regionName: 'California',
    city: 'san-francisco',
    cityName: 'San Francisco',
  },
  {
    country: 'us',
    countryName: 'United States',
    region: 'ca',
    regionName: 'California',
    city: 'san-diego',
    cityName: 'San Diego',
  },
  // Canada - Ontario
  {
    country: 'ca',
    countryName: 'Canada',
    region: 'on',
    regionName: 'Ontario',
    city: 'toronto',
    cityName: 'Toronto',
  },
  {
    country: 'ca',
    countryName: 'Canada',
    region: 'on',
    regionName: 'Ontario',
    city: 'ottawa',
    cityName: 'Ottawa',
  },
  // Canada - British Columbia
  {
    country: 'ca',
    countryName: 'Canada',
    region: 'bc',
    regionName: 'British Columbia',
    city: 'vancouver',
    cityName: 'Vancouver',
  },
]

/**
 * Find a location by its URL parameters
 */
export function findLocation(country: string, region: string, city: string): Location | undefined {
  return locations.find(
    (loc) =>
      loc.country.toLowerCase() === country.toLowerCase() &&
      loc.region.toLowerCase() === region.toLowerCase() &&
      loc.city.toLowerCase() === city.toLowerCase()
  )
}

/**
 * Get all unique countries
 */
export function getCountries(): { code: string; name: string }[] {
  const seen = new Set<string>()
  return locations
    .filter((loc) => {
      if (seen.has(loc.country)) return false
      seen.add(loc.country)
      return true
    })
    .map((loc) => ({ code: loc.country, name: loc.countryName }))
}

/**
 * Get all regions for a country
 */
export function getRegions(country: string): { code: string; name: string }[] {
  const seen = new Set<string>()
  return locations
    .filter((loc) => loc.country.toLowerCase() === country.toLowerCase())
    .filter((loc) => {
      if (seen.has(loc.region)) return false
      seen.add(loc.region)
      return true
    })
    .map((loc) => ({ code: loc.region, name: loc.regionName }))
}

/**
 * Get all cities for a region
 */
export function getCities(country: string, region: string): Location[] {
  return locations.filter(
    (loc) =>
      loc.country.toLowerCase() === country.toLowerCase() &&
      loc.region.toLowerCase() === region.toLowerCase()
  )
}

/**
 * Build the URL path for a location
 */
export function getLocationPath(location: Location): string {
  return `/${location.country}/${location.region}/${location.city}`
}
