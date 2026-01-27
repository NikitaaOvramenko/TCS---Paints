import { Section, SectionHeader, Card } from "@/components/ui";
import { whyUsContent } from "@/data/content";
import WhyUsAnimations from "./WhyUsAnimations";

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  sparkles: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  users: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  calculator: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  sparkle: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  "check-circle": (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

export function WhyUs() {
  return (
    <Section className="relative" background="gray" id="why-us">
      <div className="back absolute inset-0">
        <div className=" absolute inset-0  videoWrapper w-full h-full">
          <video
            src="/videos/wall-painting.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="blurring absolute inset-0 backdrop-blur-sm w-full  h-full "></div>
      </div>
      <div className="content relative z-10">
        <WhyUsAnimations />
        <SectionHeader
          title={whyUsContent.title}
          subtitle={whyUsContent.subtitle}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 z-99">
          {whyUsContent.reasons.map((reason, index) => (
            <Card key={index} hover className="text-center why-us-card">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                {iconMap[reason.icon] || iconMap.sparkles}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                {reason.title}
              </h3>
              <p className="text-neutral-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
