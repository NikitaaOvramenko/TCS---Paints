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
import { findLocation, locations, getLocationPath } from "@/data/locations";
import { getLocationMetadata } from "@/lib/seo/metadata";
import {
  JsonLd,
  getLocalBusinessSchema,
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/jsonld";
import { getFaqContent } from "@/data/content";
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

  const faqContent = getFaqContent(location);

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
      <JsonLd data={getFaqSchema(faqContent.faqs)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <Hero location={location} />
      <WhyUs />
      <Services location={location} />
      <Reviews location={location} />
      <FAQ location={location} />
      <Gallery location={location} />
      <LocationMap location={location} />
      <FooterCTA location={location} />
    </>
  );
}
