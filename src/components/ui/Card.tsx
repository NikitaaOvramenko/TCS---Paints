interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  /** Flat editorial surfaces — hairline rules instead of shadows. */
  variant?: "outline" | "light" | "ink";
}

const paddingStyles = {
  none: "",
  sm: "p-5",
  md: "p-7",
  lg: "p-9",
};

const variantStyles = {
  outline: "border border-current/15 bg-transparent",
  light: "border border-neutral-900/10 bg-neutral-50",
  ink: "border border-white/10 bg-neutral-900",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  variant = "outline",
}: CardProps) {
  return (
    <div
      className={`
        ${variantStyles[variant]} rounded-none
        ${paddingStyles[padding]}
        ${hover ? "transition-colors duration-300 hover:bg-current/[0.04]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-normal tracking-[-0.01em] ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return <p className={`leading-relaxed opacity-60 ${className}`}>{children}</p>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
