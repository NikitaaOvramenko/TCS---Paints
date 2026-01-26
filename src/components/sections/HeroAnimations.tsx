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

    // ----- Video scrub (DESKTOP ONLY) -----
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const videoElem = document.querySelector(
        ".video video",
      ) as HTMLVideoElement | null;
      if (!videoElem) return;

      // Ensure it's prepared for seeking
      videoElem.preload = "auto";
      videoElem.muted = true;
      videoElem.playsInline = true;

      // This helps Safari initialize
      videoElem.load();

      // Proxy smoothing (Safari-friendly)
      const proxy = { t: 0 };

      const applyTime = () => {
        // HAVE_CURRENT_DATA (2) is a safer bar than just "truthy"
        if (videoElem.readyState >= 2) {
          // clamp to duration
          const d = Number.isFinite(videoElem.duration)
            ? videoElem.duration
            : 0;
          videoElem.currentTime = d ? Math.min(proxy.t, d) : 0;
        }
      };

      const setT = gsap.quickTo(proxy, "t", {
        duration: 0.12,
        ease: "power4.out",
        onUpdate: applyTime,
      });

      const setup = () => {
        const dur = videoElem.duration;
        if (!Number.isFinite(dur) || dur <= 0) return;

        ScrollTrigger.create({
          trigger: ".hero",
          start: "top 10%",
          end: "bottom top",
          scrub: 0.5,
          markers: isDev, // only show markers in dev
          onUpdate: (self) => {
            setT(self.progress * dur);
          },
        });
      };

      if (videoElem.readyState >= 1 && Number.isFinite(videoElem.duration)) {
        setup();
      } else {
        videoElem.addEventListener("loadedmetadata", setup, { once: true });
      }

      // Cleanup for this media query scope
      return () => {
        // ScrollTriggers created in this scope will be killed automatically by matchMedia revert,
        // but we can also be explicit:
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger && (st.trigger as Element).classList?.contains("hero"))
            st.kill();
        });
      };
    });

    // Global cleanup
    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return null;
}
