import {
  Section,
  SectionHeader,
  Card,
  CardTitle,
  CardDescription,
  whyUsIcons,
  SparklesIcon,
} from "@/components/ui";
import { whyUsContent } from "@/data/content";
import WhyUsAnimations from "./WhyUsAnimations";

export function WhyUs() {
  return (
    <Section className="relative" background="gray" id="why-us">
      <div className="absolute inset-0">
        <div className="absolute inset-0 videoWrapper w-full h-full">
          <video
            src="/videos/wall-painting2.mp4"
            className="w-full h-full object-cover"
            playsInline
            muted
            autoPlay
            loop
          />
        </div>
        <div className="blurring absolute inset-0 backdrop-blur-sm w-full h-full" />
      </div>
      <div className="relative z-10">
        <WhyUsAnimations />
        <SectionHeader
          title={whyUsContent.title}
          subtitle={whyUsContent.subtitle}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsContent.reasons.map((reason, index) => (
            <Card key={index} variant="light" hover className="text-center why-us-card">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                {whyUsIcons[reason.icon] || <SparklesIcon />}
              </div>
              <CardTitle light={false} className="mb-2 text-lg">
                {reason.title}
              </CardTitle>
              <CardDescription light={false}>
                {reason.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
