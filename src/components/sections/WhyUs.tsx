import { Section } from "@/components/ui";
import { whyUsContent } from "@/data/content";
import WhyUsAnimations from "./WhyUsAnimations";

export function WhyUs() {
  return (
    <Section background="lightAlt" id="why-us">
      <WhyUsAnimations />
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        {/* Sticky editorial column — the signature split. */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-6 opacity-50">02 — Why us</p>
          <h2 className="display-md">{whyUsContent.title}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed opacity-60">
            {whyUsContent.subtitle}
          </p>
        </div>

        <div className="border-t border-neutral-900/10">
          {whyUsContent.reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="why-us-row grid grid-cols-[auto_1fr] gap-x-6 border-b border-neutral-900/10 py-7 sm:gap-x-10"
            >
              <span className="eyebrow pt-1.5 text-purple-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-normal tracking-[-0.01em]">
                  {reason.title}
                </h3>
                <p className="mt-2 max-w-md leading-relaxed opacity-55">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
