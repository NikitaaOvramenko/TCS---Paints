import { Button } from "@/components/ui";
import { Container } from "@/components/ui";
import { getHeroContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import type { Location } from "@/data/locations";
import HeroAnimations from "./HeroAnimations";

interface HeroProps {
  location?: Location;
}

export function Hero({ location }: HeroProps) {
  const content = getHeroContent(location);

  return (
    <section className="hero relative min-h-screen overflow-hidden bg-gradient-to-br bg-black text-white">
      {/* GSAP Animations (client component) */}
      <HeroAnimations />

      {/* Parallax background layer */}
      <div className="heroBg absolute inset-0 overflow-hidden">
        {/* Purple glow effects */}
        {/* <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" /> */}
      </div>

      <div className="video absolute inset-0 ">
        <video
          src="/videos/roller_paint_down_updated.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover mt-20"
        />
      </div>

      <Container className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* Headline with animation target class */}
            <h1 className="heroHeader text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">{content.headline.split(" in ")[0]}</span>
              {content.headline.includes(" in ") && (
                <span className="relative mt-2 block">
                  <span className="text-yellow-400">
                    in {content.headline.split(" in ")[1]}
                  </span>
                  {/* Brush stroke underline - animated by GSAP */}
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

            {/* CTA Buttons */}
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

            {/* Trust Badge */}
            <div className="heroTrust mt-8 flex items-center justify-center gap-2 text-neutral-300">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2">200+ 5-Star Reviews</span>
            </div>

            {/* Phone CTA */}
            <div className="heroPhone mt-4 flex items-center justify-center gap-2 text-neutral-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
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
        </div>
      </Container>
    </section>
  );
}
