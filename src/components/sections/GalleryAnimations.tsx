"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GalleryAnimations() {
  useGSAP(() => {
    // Set initial state
    gsap.set(".gallery-item", {
      scale: 0.9,
      opacity: 0,
    })

    // Animate to visible on scroll
    gsap.to(".gallery-item", {
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 85%",
      },
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    })
  }, [])

  return null
}
