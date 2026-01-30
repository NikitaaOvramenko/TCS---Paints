import {
  Section,
  Card,
  CardTitle,
  CardDescription,
  whyUsIcons,
  SparklesIcon,
} from "@/components/ui";
import WhyUsAnimations from "./WhyUsAnimations";

const reasons = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind. We handle everything professionally.',
    icon: 'shield',
  },
  {
    title: 'Quality Materials',
    description: 'We use only premium paints and materials that last longer and look better.',
    icon: 'sparkles',
  },
  {
    title: 'Expert Craftsmen',
    description: 'Our painters have years of experience and take pride in their attention to detail.',
    icon: 'users',
  },
  {
    title: 'Free Estimates',
    description: 'Get a detailed, no-obligation quote before any work begins. No surprises.',
    icon: 'calculator',
  },
  {
    title: 'Clean & Respectful',
    description: 'We protect your property and leave your space cleaner than we found it.',
    icon: 'sparkle',
  },
  {
    title: 'Satisfaction Guaranteed',
    description: "We're not done until you're 100% satisfied with the results.",
    icon: 'check-circle',
  },
];

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
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left — Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 order-2 lg:order-1">
            {reasons.map((reason, index) => (
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

          {/* Right — Header */}
          <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 lg:max-w-sm lg:sticky lg:top-28 lg:self-start">
            <h2 className="section-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl w-fit mx-auto lg:mx-0">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              We combine expertise, quality materials, and exceptional service to deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
