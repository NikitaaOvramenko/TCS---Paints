import { Section, Button } from "@/components/ui";
import { siteConfig } from "@/data/site";
import type { Location } from "@/data/locations";
import HeroAnimations from "./HeroAnimations";
import AnimationCanvas from "./AnimationCanvas";

interface HeroProps {
  location?: Location;
}

export function Hero({ location }: HeroProps) {
  const cityName = location?.cityName;
  const subheadline = cityName
    ? `Interior, exterior and commercial painting across ${cityName} — done once, done properly, and finished when we said it would be.`
    : "Interior, exterior and commercial painting — done once, done properly, and finished when we said it would be.";

  return (
    <div className="hero relative min-h-screen overflow-hidden bg-neutral-950 text-white">
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
        className="absolute inset-0 mt-22 h-full w-full lg:left-[42%] lg:w-[58%]"
      />
      {/* Keeps the headline legible where the roller passes behind it. */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent lg:via-neutral-950/40" />

      <Section
        background="transparent"
        className="relative z-10 flex min-h-screen items-center"
        containerSize="xl"
      >
        <HeroAnimations />

        <div className="max-w-4xl lg:max-w-2xl xl:max-w-3xl">
          <p className="heroEyebrow eyebrow mb-8 opacity-55">
            {cityName
              ? `${cityName}, ${location?.regionName}`
              : siteConfig.tagline}
          </p>

          <h1 className="heroHeader display-lg">
            What if your walls looked
            <br />
            like this{" "}
            <span className="text-yellow-400">every morning</span>?
          </h1>

          <p className="heroSubhead mt-10 max-w-xl text-lg leading-relaxed opacity-65 sm:text-xl">
            {subheadline}
          </p>

          <div className="heroCta mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/quote" variant="accent" size="lg">
              Get a Free Quote
            </Button>
            <Button href="#gallery" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>

          <p className="heroPhone eyebrow mt-12 opacity-50">
            Or call{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="border-b border-current pb-0.5 transition-opacity hover:opacity-70"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}
