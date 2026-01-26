'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'vertical' | 'horizontal'
}

export function Parallax({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.scrollY
      const offsetTop = rect.top + scrolled
      const elementCenter = offsetTop + rect.height / 2
      const viewportCenter = scrolled + window.innerHeight / 2
      const distance = viewportCenter - elementCenter
      const movement = distance * speed * 0.1

      if (direction === 'vertical') {
        gsap.to(element, {
          y: movement,
          duration: 0.3,
          ease: 'power1.out',
        })
      } else {
        gsap.to(element, {
          x: movement,
          duration: 0.3,
          ease: 'power1.out',
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
