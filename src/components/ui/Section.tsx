import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "white" | "gray" | "dark" | "black" | "primary" | "gradient";
  id?: string;
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-neutral-50",
  dark: "bg-neutral-900 text-white",
  black: "bg-black text-white",
  primary: "bg-purple-600 text-white",
  gradient: "bg-gradient-to-br from-purple-600 to-purple-800 text-white",
};

export function Section({
  children,
  className = "",
  containerSize = "xl",
  background = "white",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-20 lg:py-24  ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 md:mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
