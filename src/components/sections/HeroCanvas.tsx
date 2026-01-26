"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const images = useRef<HTMLImageElement[]>([]);
  const playhead = useRef({ frame: 1 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const frames = 60;

  const currentFrame = (index: number) =>
    `/videos/video_frames_one/${index.toString().padStart(2, "0")}.png`;

  const render = (frame: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images.current[frame - 1];
    if (!img || !img.complete) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const newImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frames; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      newImages.push(img);
    }

    images.current = newImages;

    newImages[0].onload = () => render(1);
  }, []);

  useGSAP(() => {
    gsap.to(playhead.current, {
      frame: frames,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "top 20%",
        end: "bottom top",
        scrub: true,
      },
      onUpdate: () => render(playhead.current.frame),
    });
  }, []);

  return (
    <section className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="mt-30 w-full h-full object-cover" />
    </section>
  );
}
