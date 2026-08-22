"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesAnimations() {
  useGSAP(() => {
    // `from` + immediateRender:false leaves the rows visible until the trigger
    // actually fires. The navbar anchors jump straight to a section, which can
    // land past the start point — with a `set`-then-`to` pair that would strand
    // the rows at opacity 0.
    gsap.from(".service-row", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 75%",
      },
      immediateRender: false,
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.07,
      ease: "power3.out",
    })
  }, [])

  return null
}
