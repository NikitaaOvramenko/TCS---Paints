import Link from 'next/link'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  fullWidth?: boolean
  /** Trailing arrow — the editorial CTA signature. Defaults to on. */
  arrow?: boolean
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-neutral-950 text-white hover:bg-neutral-800',
  accent: 'bg-yellow-400 text-neutral-950 hover:bg-yellow-300',
  // `border-current` inherits the surrounding text color, so one outline
  // variant works on both light and ink grounds.
  outline: 'border border-current bg-transparent hover:bg-current/5',
  ghost: 'bg-transparent hover:opacity-60',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-[0.6875rem]',
  md: 'px-6 py-3.5 text-xs',
  lg: 'px-8 py-4.5 text-xs',
}

function Arrow() {
  return (
    <svg
      className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      fullWidth = false,
      arrow = true,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'group inline-flex items-center justify-center gap-3 rounded-none font-medium uppercase tracking-[0.14em] transition-colors duration-300 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed'

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`

    const content = (
      <>
        <span>{children}</span>
        {arrow && <Arrow />}
      </>
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
