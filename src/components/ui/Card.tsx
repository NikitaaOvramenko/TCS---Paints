interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "dark" | "light" | "glass";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantStyles = {
  dark: "bg-black/55 backdrop-blur-sm",
  light: "bg-white",
  glass: "bg-white/55 backdrop-blur-sm",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  variant = "dark",
}: CardProps) {
  return (
    <div
      className={`
        ${variantStyles[variant]} rounded-xl shadow-sm
        ${paddingStyles[padding]}
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1" : ""}
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
  light?: boolean;
}

export function CardTitle({
  children,
  className = "",
  light = true,
}: CardTitleProps) {
  return (
    <h3
      className={`text-xl font-semibold ${light ? "text-white" : "text-neutral-900"} ${className}`}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function CardDescription({
  children,
  className = "",
  light = true,
}: CardDescriptionProps) {
  return (
    <p
      className={`${light ? "text-neutral-300" : "text-neutral-600"} ${className}`}
    >
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
