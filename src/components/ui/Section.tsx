import { Container } from "./Container";

type SectionBackground =
  | "light"
  | "lightAlt"
  | "tint"
  | "ink"
  | "inkBrand"
  | "transparent"
  // Legacy names kept as aliases so existing Builder-authored entries
  // referencing the old enum keep rendering.
  | "white"
  | "gray"
  | "dark"
  | "black"
  | "primary"
  | "gradient";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: SectionBackground;
  id?: string;
}

const backgroundStyles: Record<SectionBackground, string> = {
  light: "bg-white text-neutral-900",
  lightAlt: "bg-neutral-50 text-neutral-900",
  tint: "bg-purple-50 text-neutral-900",
  ink: "bg-neutral-950 text-white",
  inkBrand: "bg-purple-950 text-white",
  transparent: "bg-transparent",

  white: "bg-white text-neutral-900",
  gray: "bg-neutral-50 text-neutral-900",
  dark: "bg-neutral-950 text-white",
  black: "bg-neutral-950 text-white",
  primary: "bg-purple-950 text-white",
  gradient: "bg-purple-950 text-white",
};

export function Section({
  children,
  className = "",
  containerSize = "xl",
  background = "light",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 lg:py-36 ${backgroundStyles[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  /** Small tracked label above the heading, e.g. "01 — What we do" */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Editorial layouts are left-aligned by default. */
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`relative z-10 mb-14 lg:mb-20 ${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-6 opacity-50">{eyebrow}</p>}
      <h2 className="display-md max-w-4xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-6 max-w-xl text-lg leading-relaxed opacity-60 ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
