'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  once?: boolean
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    // Set initial state based on direction
    const initialState: gsap.TweenVars = {
      opacity: 0,
      ...(direction === 'up' && { y: 40 }),
      ...(direction === 'down' && { y: -40 }),
      ...(direction === 'left' && { x: 40 }),
      ...(direction === 'right' && { x: -40 }),
    }

    gsap.set(element, initialState)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(element, {
              opacity: 1,
              x: 0,
              y: 0,
              duration,
              delay,
              ease: 'power2.out',
            })

            if (once) {
              observer.disconnect()
            }
          } else if (!once) {
            gsap.set(element, initialState)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [direction, delay, duration, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
