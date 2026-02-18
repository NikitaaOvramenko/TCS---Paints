export const siteConfig = {
  name: 'YourLocalPaints',
  tagline: 'Professional Painting Services',
  description: 'Transform your space with our expert painting services. Professional, reliable, and delivering stunning results for residential and commercial properties.',
  url: 'https://paints.yourlocalservice.co',

  // Business contact
  phone: '(424) 346-4307',
  email: 'info@yourlocalservice.co',

  // Business address (primary location)
  address: {
    street: '123 Paint Street',
    city: 'Miami',
    region: 'FL',
    country: 'US',
    postalCode: '33101',
  },

  // Business hours
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // Social media
  socials: {
    // facebook: 'https://facebook.com/yourlocalpaints',
    instagram: 'https://www.instagram.com/your_local.painter.and.co/',
    // twitter: 'https://twitter.com/yourlocalpaints',
    // linkedin: 'https://linkedin.com/company/yourlocalpaints',
  },

  // Services offered
  services: [
    {
      id: 'interior',
      name: 'Interior Painting',
      description: 'Transform your indoor spaces with precision and care. From single rooms to entire homes.',
      icon: 'home',
    },
    {
      id: 'exterior',
      name: 'Exterior Painting',
      description: 'Boost curb appeal and protect your property with our weather-resistant exterior painting.',
      icon: 'building',
    },
    {
      id: 'commercial',
      name: 'Commercial Painting',
      description: 'Professional painting solutions for offices, retail spaces, and commercial buildings.',
      icon: 'briefcase',
    },
    {
      id: 'cabinet',
      name: 'Cabinet Refinishing',
      description: 'Give your kitchen a fresh look without the cost of full replacement.',
      icon: 'layers',
    },
    {
      id: 'deck',
      name: 'Deck & Fence Staining',
      description: 'Protect and beautify your outdoor wood surfaces with quality staining.',
      icon: 'fence',
    },
    {
      id: 'drywall',
      name: 'Drywall Repair',
      description: 'Expert drywall repair and patching before painting for flawless results.',
      icon: 'tool',
    },
  ],

  // Default OG image
  ogImage: '/og-image.jpg',

  // Copyright
  copyright: `© ${new Date().getFullYear()} YourLocalPaints. All rights reserved.`,
}

export type SiteConfig = typeof siteConfig
