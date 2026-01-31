import { Section, Button, PhoneIcon } from "@/components/ui";
import { siteConfig } from "@/data/site";
import type { Location } from "@/data/locations";
import HeroAnimations from "./HeroAnimations";
import AnimationCanvas from "./AnimationCanvas";

interface HeroProps {
  location?: Location;
}

export function Hero({ location }: HeroProps) {
  const cityName = location?.cityName;
  const headline = cityName
    ? "Painting Services in"
    : "Professional Painting Services";
  const subheadline = cityName
    ? `Transform your ${cityName} home or business with expert painters who deliver stunning results.`
    : "Transform your space with expert painters who deliver stunning results, on time and on budget.";

  return (
    <div className="hero relative bg-black min-h-screen overflow-hidden">
      <AnimationCanvas
        path="/videos/roller-paint-120"
        pads={4}
        frames={120}
        start="top 20%"
        end="bottom top"
        scrub={true}
        markers={false}
        rotated={false}
        format="webp"
        className="absolute inset-0 w-full h-full mt-22"
      />

      <Section
        background="black"
        className="relative z-10 flex min-h-screen items-center justify-center !bg-transparent"
        containerSize="xl"
      >
        <HeroAnimations />

        <div className="mx-auto max-w-3xl py-5 text-center">
          <h1
            className="heroHeader text-4xl  font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Lemon/Milk', sans-serif" }}
          >
            <span className="block ">{headline}</span>
            {cityName && (
              <span className="block mt-2 w-fit mx-auto bg-gradient-to-r from-white from-10% to-yellow-400 bg-clip-text text-transparent">
                {cityName}
              </span>
            )}
          </h1>

          <p className="heroSubhead mt-6 text-lg text-neutral-200 sm:text-xl">
            {subheadline}
          </p>

          <div className="heroCta mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/quote"
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30"
            >
              Get a Free Quote
            </Button>
            <Button
              href="#gallery"
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            >
              View Our Work
            </Button>
          </div>

          <div className="heroPhone mt-4 flex items-center justify-center gap-2 text-neutral-400">
            <PhoneIcon />
            <span>
              Call us:{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
