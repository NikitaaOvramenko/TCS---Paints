import { Section, SectionHeader, Button } from "@/components/ui";
import { siteConfig } from "@/data/site";
import type { Location } from "@/data/locations";
import ServicesAnimations from "./ServicesAnimations";
import AnimationCanvas from "./AnimationCanvas";

interface ServicesProps {
  location?: Location;
}

export function Services({ location }: ServicesProps) {
  const title = location
    ? `What we paint in ${location.cityName}`
    : "What we paint";

  return (
    <div className="relative bg-neutral-950 text-white" id="services">
      {/* Brush stroke paints itself across the section as you scroll. */}
      <AnimationCanvas
        path="/videos/brush-90"
        pads={4}
        frames={90}
        // Scrub across the section's own traversal: nothing until its top
        // reaches the top of the viewport (by which point the hero roller has
        // finished), complete once its bottom reaches the bottom. The old
        // "-60% 20%" start was 60% of this section's height ABOVE its top,
        // which on a tall mobile layout began before the page had scrolled at
        // all — the brush was ~44% painted while the hero was still running.
        start="top top"
        end="bottom bottom"
        scrub={true}
        markers={false}
        rotateFlag={true}
        className="absolute inset-0 z-0 h-full w-full"
        format="webp"
      />
      {/* Scrim keeps the list readable where the stroke passes under it,
          without blurring the stroke into mush. Heavier on small screens,
          where rotateFlag turns the stroke sideways and it fills far more of
          the viewport behind the text. */}
      <div className="absolute inset-0 z-0 bg-neutral-950/70 lg:bg-neutral-950/40" />

      <Section background="transparent" className="relative z-10">
        <ServicesAnimations />
        <SectionHeader
          eyebrow="01 — What we do"
          title={title}
          subtitle="From a single feature wall to a full commercial repaint, the same crew and the same standard."
        />

        <div className="border-t border-white/15">
          {siteConfig.services.map((service, index) => (
            <a
              key={service.id}
              href="/quote"
              className="service-row group grid cursor-pointer grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-white/15 py-8 transition-colors duration-300 hover:bg-white/[0.04] sm:gap-x-10 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-center lg:py-10"
            >
              {/* Purple, not yellow — the stroke is yellow and would swallow
                  the numerals as it crosses them. */}
              <span className="eyebrow text-purple-400 lg:pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="display text-[clamp(1.5rem,2.6vw,2.25rem)]">
                {service.name}
              </h3>

              <p className="col-start-2 max-w-md leading-relaxed opacity-55 lg:col-start-3">
                {service.description}
              </p>

              <svg
                className="col-start-2 h-4 w-4 opacity-40 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100 lg:col-start-4 lg:justify-self-end"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 8h13M9 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <Button href="/quote" variant="outline" size="lg">
            Get a Free Estimate
          </Button>
        </div>
      </Section>
    </div>
  );
}
