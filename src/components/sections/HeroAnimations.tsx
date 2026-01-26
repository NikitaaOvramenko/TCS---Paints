"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimations() {
  useGSAP(() => {
    // Hero header entrance animation
    gsap.from(".heroHeader", {
      y: "-20%",
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Subheadline entrance with delay
    gsap.from(".heroSubhead", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });

    // CTA buttons entrance
    gsap.from(".heroCta", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "power2.out",
    });

    // Trust badge entrance
    gsap.from(".heroTrust", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      ease: "power2.out",
    });

    // Phone CTA entrance
    gsap.from(".heroPhone", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.9,
      ease: "power2.out",
    });

    // Brush stroke "painting" animation
    const brushPath = document.querySelector(".brushPath") as SVGPathElement;
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

    // Parallax background on scroll
    gsap.to(".heroBg", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 300,
    });

    // Video scrub on scroll with responsive breakpoints
    const videoElem = document.querySelector(
      ".video video",
    ) as HTMLVideoElement;

    if (videoElem) {
      const mm = gsap.matchMedia();

      const setupVideoScrub = (isMobile: boolean) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            // Mobile: start earlier and use shorter scroll distance
            // Desktop: original behavior
            start: isMobile ? "top top" : "top 10%",
            end: isMobile ? "80% top" : "bottom top",
            scrub: isMobile ? 0.5 : true, // Smoother scrub on mobile
          },
        });

        tl.to(videoElem, {
          currentTime: videoElem.duration,
          ease: "none",
        });
      };

      const initVideoScrub = (isMobile: boolean) => {
        if (videoElem.readyState >= 1) {
          setupVideoScrub(isMobile);
        } else {
          videoElem.addEventListener(
            "loadedmetadata",
            () => setupVideoScrub(isMobile),
            { once: true },
          );
        }
      };

      // Desktop breakpoint (1024px and above)
      mm.add("(min-width: 1024px)", () => {
        initVideoScrub(false);
      });

      // Tablet breakpoint (768px to 1023px)
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        initVideoScrub(true);
      });

      // Mobile breakpoint (below 768px)
      mm.add("(max-width: 767px)", () => {
        initVideoScrub(true);
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
