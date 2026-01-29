import { Section, Button, StarIcon, PhoneIcon } from "@/components/ui";
import { getHeroContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import type { Location } from "@/data/locations";
import HeroAnimations from "./HeroAnimations";
import AnimationCanvas from "./AnimationCanvas";
import Image from "next/image";

interface HeroProps {
  location?: Location;
}

export function Hero({ location }: HeroProps) {
  const content = getHeroContent(location);

  return (
    <div className="hero relative min-h-screen overflow-hidden">
      <Image src="/herobg2.jpg" alt="" fill priority className="object-cover" />
      <div className="filter absolute inset-0 h-full w-full backdrop-blur-sm" />
      <AnimationCanvas
        path="/videos/roller-paint"
        pads={4}
        frames={60}
        start="top 20%"
        end="bottom top"
        scrub={true}
        markers={false}
        rotated={false}
        format="webp"
        className="absolute top-20 right-10 bottom-0 left-0 h-full"
      />

      <Section
        background="black"
        className="relative z-10 flex min-h-screen items-center justify-center !bg-transparent"
        containerSize="xl"
      >
        <HeroAnimations />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heroHeader text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">{content.headline.split(" in ")[0]}</span>
            {content.headline.includes(" in ") && (
              <span className="relative mt-2 block">
                <span className="text-yellow-400">
                  in {content.headline.split(" in ")[1]}
                </span>
                <svg
                  className="brushStroke absolute -bottom-2 left-1/2 h-3 w-48 -translate-x-1/2 text-yellow-400"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    className="brushPath"
                    d="M2 6c30-4 60 4 90 2s60-6 90-2c10 1 15 3 16 4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            )}
          </h1>

          <p className="heroSubhead mt-6 text-lg text-neutral-200 sm:text-xl">
            {content.subheadline}
          </p>

          <div className="heroCta mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/quote"
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30"
            >
              {content.cta}
            </Button>
            <Button
              href="#gallery"
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            >
              {content.ctaSecondary}
            </Button>
          </div>

          <div className="heroTrust mt-8 flex items-center justify-center gap-2 text-neutral-300">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="ml-2">200+ 5-Star Reviews</span>
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
