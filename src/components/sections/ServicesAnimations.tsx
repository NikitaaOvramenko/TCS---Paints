"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesAnimations() {
  useGSAP(() => {
    // Set initial state
    gsap.set(".service-card", {
      y: 60,
      opacity: 0,
    })

    // Animate to visible on scroll
    gsap.to(".service-card", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    })
  }, [])

  return null
}
