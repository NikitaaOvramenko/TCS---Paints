import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Hero,
  WhyUs,
  Services,
  Reviews,
  FAQ,
  Gallery,
  LocationMap,
  FooterCTA,
} from "@/components/sections";
import { Footer } from "@/components/ui/Footer";
import { findLocation, locations, getLocationPath } from "@/data/locations";
import { getLocationMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  getLocalBusinessSchema,
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/jsonld";
import { siteConfig } from "@/data/site";
import { getCanonicalUrl } from "@/lib/seo/canonical";

interface LocationPageProps {
  params: Promise<{
    country: string;
    region: string;
    city: string;
  }>;
}

/**
 * Generate static params for all known locations
 */
export async function generateStaticParams() {
  return locations.map((location) => ({
    country: location.country,
    region: location.region,
    city: location.city,
  }));
}

/**
 * Generate metadata for the location page
 */
export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { country, region, city } = await params;
  const location = findLocation(country, region, city);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return getLocationMetadata(location);
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { country, region, city } = await params;
  const location = findLocation(country, region, city);

  if (!location) {
    notFound();
  }

  const faqsForSchema = [
    {
      question: "How long does a typical painting project take?",
      answer:
        "Project timelines vary based on scope. A single room typically takes 1-2 days, while a full interior can take 3-5 days. Exterior projects usually take 3-7 days depending on the size of the home.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes! We provide detailed, no-obligation estimates for all projects. We'll assess your space, discuss your vision, and provide transparent pricing.",
    },
    {
      question: "What type of paint do you use?",
      answer:
        "We use premium quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. We can also accommodate special requests for eco-friendly or low-VOC options.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. We are fully licensed and carry comprehensive liability insurance to protect both our team and your property.",
    },
    {
      question: "Do I need to move my furniture?",
      answer:
        "No, our team handles all furniture moving and protection. We carefully cover and move items as needed and return everything to its place when complete.",
    },
    {
      question: "What areas do you serve?",
      answer: `We proudly serve ${location.cityName} and the surrounding ${location.regionName} communities. Contact us to confirm coverage for your specific location.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", url: getCanonicalUrl("/") },
    {
      name: location.countryName,
      url: getCanonicalUrl(`/${location.country}`),
    },
    {
      name: location.regionName,
      url: getCanonicalUrl(`/${location.country}/${location.region}`),
    },
    {
      name: location.cityName,
      url: getCanonicalUrl(getLocationPath(location)),
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={getLocalBusinessSchema(location)} />
      <JsonLd data={getServiceSchema(location)} />
      <JsonLd data={getFaqSchema(faqsForSchema)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <Hero location={location} />
      <WhyUs />
      <Services location={location} />
      {/* <Reviews location={location} /> */}

      <Gallery location={location} />
      <LocationMap location={location} />
      <FAQ location={location} />
      <FooterCTA location={location} />
      <Footer location={location} />
    </>
  );
}
