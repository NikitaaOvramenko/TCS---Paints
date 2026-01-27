"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function NavbarAnimations() {
  useGSAP(() => {
    // Create animation that hides navbar
    const showAnim = gsap.from(".navbar", { 
      yPercent: -100,
      paused: true,
      duration: 0.2,
      ease: "power2.out"
    }).progress(1)

    // ScrollTrigger to detect scroll direction
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        // Show on scroll up, hide on scroll down
        if (self.direction === -1) {
          showAnim.play()
        } else {
          showAnim.reverse()
        }
      }
    })
  }, [])

  return null
}
