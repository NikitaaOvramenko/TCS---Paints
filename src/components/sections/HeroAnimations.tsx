"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimations() {
  useGSAP(() => {
    // Editorial reveal: everything rises from below a clipped baseline.
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.1 },
    });

    tl.from(".heroEyebrow", { y: 20, opacity: 0, duration: 0.8 })
      .from(".heroHeader", { y: 60, opacity: 0 }, "-=0.5")
      .from(".heroSubhead", { y: 30, opacity: 0, duration: 0.9 }, "-=0.75")
      .from(".heroCta", { y: 30, opacity: 0, duration: 0.9 }, "-=0.8")
      .from(".heroPhone", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7");
  }, []);

  return null;
}
