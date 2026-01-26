import type { Location } from './locations'

/**
 * Dynamic content templates with city/region placeholders
 * Use {city}, {region}, {country} for dynamic replacement
 */

export const heroContent = {
  headline: 'Professional Painting Services',
  headlineWithCity: 'Professional Painting Services in {city}',
  subheadline: 'Transform your space with expert painters who deliver stunning results, on time and on budget.',
  subheadlineWithCity: 'Transform your {city} home or business with expert painters who deliver stunning results.',
  cta: 'Get a Free Quote',
  ctaSecondary: 'View Our Work',
}

export const whyUsContent = {
  title: 'Why Choose Us?',
  subtitle: 'We combine expertise, quality materials, and exceptional service to deliver results that exceed expectations.',
  reasons: [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind. We handle everything professionally.',
      icon: 'shield',
    },
    {
      title: 'Quality Materials',
      description: 'We use only premium paints and materials that last longer and look better.',
      icon: 'sparkles',
    },
    {
      title: 'Expert Craftsmen',
      description: 'Our painters have years of experience and take pride in their attention to detail.',
      icon: 'users',
    },
    {
      title: 'Free Estimates',
      description: 'Get a detailed, no-obligation quote before any work begins. No surprises.',
      icon: 'calculator',
    },
    {
      title: 'Clean & Respectful',
      description: 'We protect your property and leave your space cleaner than we found it.',
      icon: 'sparkle',
    },
    {
      title: 'Satisfaction Guaranteed',
      description: "We're not done until you're 100% satisfied with the results.",
      icon: 'check-circle',
    },
  ],
}

export const servicesContent = {
  title: 'Our Services',
  titleWithCity: 'Painting Services in {city}',
  subtitle: 'From interior walls to exterior facades, we handle projects of all sizes.',
}

export const reviewsContent = {
  title: 'What Our Customers Say',
  titleWithCity: 'What {city} Customers Say',
  subtitle: 'Real reviews from satisfied homeowners and businesses.',
  reviews: [
    {
      name: 'Sarah M.',
      location: 'Miami, FL',
      rating: 5,
      text: 'Absolutely fantastic work! They transformed our living room and kitchen. Professional, clean, and the results exceeded our expectations.',
      date: '2024-01-15',
    },
    {
      name: 'Michael R.',
      location: 'Orlando, FL',
      rating: 5,
      text: 'Best painting company I\'ve ever worked with. On time, on budget, and the attention to detail was impressive.',
      date: '2024-02-20',
    },
    {
      name: 'Jennifer L.',
      location: 'Tampa, FL',
      rating: 5,
      text: 'They painted the entire exterior of our home and it looks brand new. Highly recommend!',
      date: '2024-03-10',
    },
    {
      name: 'David K.',
      location: 'Houston, TX',
      rating: 5,
      text: 'Professional from start to finish. Great communication and amazing results.',
      date: '2024-04-05',
    },
  ],
}

export const faqContent = {
  title: 'Frequently Asked Questions',
  titleWithCity: 'Frequently Asked Questions - {city}',
  faqs: [
    {
      question: 'How long does a typical painting project take?',
      answer: 'Project timelines vary based on scope. A single room typically takes 1-2 days, while a full interior can take 3-5 days. Exterior projects usually take 3-7 days depending on the size of the home.',
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes! We provide detailed, no-obligation estimates for all projects. We\'ll assess your space, discuss your vision, and provide transparent pricing.',
    },
    {
      question: 'What type of paint do you use?',
      answer: 'We use premium quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. We can also accommodate special requests for eco-friendly or low-VOC options.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Absolutely. We are fully licensed and carry comprehensive liability insurance to protect both our team and your property.',
    },
    {
      question: 'Do I need to move my furniture?',
      answer: 'No, our team handles all furniture moving and protection. We carefully cover and move items as needed and return everything to its place when complete.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the greater metropolitan area and surrounding communities. Contact us to confirm if we cover your location.',
      answerWithCity: 'We proudly serve {city} and the surrounding {region} communities. Contact us to confirm coverage for your specific location.',
    },
  ],
}

export const galleryContent = {
  title: 'Our Recent Work',
  titleWithCity: 'Our Work in {city}',
  subtitle: 'Browse our portfolio of completed projects.',
  categories: ['All', 'Interior', 'Exterior', 'Commercial', 'Residential'],
}

export const locationMapContent = {
  title: 'Service Area',
  titleWithCity: 'Serving {city} & Surrounding Areas',
  subtitle: 'We proudly serve the greater metropolitan area.',
}

export const ctaContent = {
  title: 'Ready to Transform Your Space?',
  titleWithCity: 'Ready to Transform Your {city} Home?',
  subtitle: 'Get a free, no-obligation quote today.',
  buttonText: 'Get Your Free Quote',
  phone: 'Or call us directly',
}

/**
 * Helper to replace placeholders in content strings
 */
export function replaceLocationPlaceholders(
  text: string,
  location?: Location
): string {
  if (!location) return text

  return text
    .replace(/{city}/g, location.cityName)
    .replace(/{region}/g, location.regionName)
    .replace(/{country}/g, location.countryName)
}

/**
 * Get content with city-specific variations
 */
export function getHeroContent(location?: Location) {
  return {
    headline: location
      ? replaceLocationPlaceholders(heroContent.headlineWithCity, location)
      : heroContent.headline,
    subheadline: location
      ? replaceLocationPlaceholders(heroContent.subheadlineWithCity, location)
      : heroContent.subheadline,
    cta: heroContent.cta,
    ctaSecondary: heroContent.ctaSecondary,
  }
}

export function getFaqContent(location?: Location) {
  return {
    title: location
      ? replaceLocationPlaceholders(faqContent.titleWithCity, location)
      : faqContent.title,
    faqs: faqContent.faqs.map((faq) => ({
      question: faq.question,
      answer: location && faq.answerWithCity
        ? replaceLocationPlaceholders(faq.answerWithCity, location)
        : faq.answer,
    })),
  }
}
