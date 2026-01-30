import {
  Section,
  SectionHeader,
  Card,
  CardTitle,
  CardDescription,
  Button,
  serviceIcons,
  HomeIcon,
} from "@/components/ui";
import { siteConfig } from "@/data/site";
import type { Location } from "@/data/locations";
import ServicesAnimations from "./ServicesAnimations";
import AnimationCanvas from "./AnimationCanvas";
import Image from "next/image";

interface ServicesProps {
  location?: Location;
}

export function Services({ location }: ServicesProps) {
  const title = location
    ? `Painting Services in ${location.cityName}`
    : 'Our Services';

  return (
    <div className="relative" id="services">
      <div className="absolute inset-0 bg-black w-full h-full"></div>
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="service-bg absolute"></div>
      <AnimationCanvas
        path="/videos/out"
        pads={4}
        frames={90}
        start="-60% 20%"
        end="bottom top"
        scrub={true}
        markers={false}
        rotateFlag={true}
        className="absolute inset-0 z-0 w-full h-full"
        format="webp"
      />
      <Section className="bg-transparent! text-white">
        <ServicesAnimations />
        <SectionHeader
          title={title}
          subtitle="From interior walls to exterior facades, we handle projects of all sizes."
          light
        />
        <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <Card key={service.id} hover className="group service-car">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                {serviceIcons[service.icon] || <HomeIcon />}
              </div>
              <CardTitle className="mb-2">{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
        <div className="relative z-10 mt-12 text-center">
          <Button href="/quote" size="lg">
            Get a Free Estimate
          </Button>
        </div>
      </Section>
    </div>
  );
}
