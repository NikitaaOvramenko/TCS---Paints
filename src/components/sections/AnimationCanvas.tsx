"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  path: string;
  frames: number;
  className: string;
  pads: number;
  start: string;
  end: string;
  scrub: number | boolean;
  markers: boolean;
  rotated?: boolean;
  rotateFlag?: boolean;
  format: string;
}

export default function HeroCanvas({
  path,
  frames,
  className,
  pads,
  start,
  end,
  scrub,
  markers,
  rotated,
  rotateFlag,
  format,
}: Props) {
  const images = useRef<HTMLImageElement[]>([]);
  const playhead = useRef({ frame: 1 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentFrame = (index: number) =>
    `${path}/${index.toString().padStart(pads, "0")}.${format}`;

  const render = (frame: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images.current[frame - 1];
    if (!img || !img.complete) return;

    const nonRotate = () => {
      const xScale = img.width / canvas.width;
      const yScale = img.height / canvas.height;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.drawImage(img, 0, 0);
    };

    const rotate = () => {
      canvas.width = img.naturalHeight;
      canvas.height = img.naturalWidth;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.width, 0);
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(img, 0, 0);
    };

    if (rotateFlag) {
      if (window.innerWidth < 1024) {
        rotate();
      } else {
        nonRotate();
      }

      return;
    }

    if (rotated) {
      rotate();
    } else {
      nonRotate();
    }
  };

  const preload = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });

  const preloadAll = (srcs: string[]) => Promise.all(srcs.map(preload));

  const loadFirstAndRender = async () => {
    const src = currentFrame(1);

    const preloaded = await preload(src);

    images.current.push(preloaded);

    render(1);
  };

  const loadImages = async () => {
    const arr = [];

    for (let i = 1; i <= frames; i++) {
      arr.push(currentFrame(i));
    }

    const batchSize = 30;

    const loadingFrames = [];

    for (let i = 1; i < arr.length; i += batchSize) {
      console.log(i);
      const subArr = arr.slice(i, i + batchSize);
      const subFrames = await preloadAll(subArr);
      loadingFrames.push(...subFrames);
    }

    images.current.push(...loadingFrames);
  };

  useEffect(() => {
    (async () => {
      await loadFirstAndRender();
      await loadImages();
    })();
  }, []);

  useGSAP(() => {
    gsap.to(playhead.current, {
      frame: frames,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: canvasRef.current,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
      },
      onUpdate: () => {
        render(playhead.current.frame);
      },
    });
  }, []);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
    </div>
  );
}
