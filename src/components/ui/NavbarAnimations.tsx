"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  /** Fires when the page scrolls past the hero, so the bar can go solid. */
  onScrolledChange?: (scrolled: boolean) => void
}

export default function NavbarAnimations({ onScrolledChange }: Props) {
  useGSAP(() => {
    // Hide on scroll down, reveal on scroll up.
    const showAnim = gsap
      .from(".navbar", {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.out",
      })
      .progress(1)

    // Tracked locally so we only push a React state update when the boolean
    // actually flips — onUpdate fires on every scroll tick.
    let past = false

    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play()
        } else {
          showAnim.reverse()
        }

        const next = self.scroll() > window.innerHeight * 0.85
        if (next !== past) {
          past = next
          onScrolledChange?.(next)
        }
      },
    })

    return () => st.kill()
  }, [])

  return null
}
