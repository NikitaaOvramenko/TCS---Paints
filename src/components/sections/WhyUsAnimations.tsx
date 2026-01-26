"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function WhyUsAnimations() {
  useGSAP(() => {
    // Set initial state
    gsap.set(".why-us-card", {
      x: -40,
      opacity: 0,
    })

    // Animate to visible on scroll
    gsap.to(".why-us-card", {
      scrollTrigger: {
        trigger: "#why-us",
        start: "top 85%",
      },
      x: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
    })
  }, [])

  return null
}
