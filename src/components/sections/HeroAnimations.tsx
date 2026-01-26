"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimations() {
  useGSAP(() => {
    const isDev = process.env.NODE_ENV === "development";

    // ----- Intro animations -----
    gsap.from(".heroHeader", {
      y: "-20%",
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.from(".heroSubhead", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(".heroCta", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(".heroTrust", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      ease: "power2.out",
    });

    gsap.from(".heroPhone", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.9,
      ease: "power2.out",
    });

    // Brush stroke
    const brushPath = document.querySelector(
      ".brushPath",
    ) as SVGPathElement | null;
    if (brushPath) {
      const pathLength = brushPath.getTotalLength();
      gsap.set(brushPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      gsap.to(brushPath, {
        strokeDashoffset: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "power2.inOut",
      });
    }

    // Parallax background
    gsap.to(".heroBg", {
      y: 300,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return null;
}
