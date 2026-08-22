"use client";

import { useEffect, useRef, useState } from "react";
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

const BATCH_SIZE = 12;

/** Schedule work for an idle moment, falling back where the API is missing. */
const onIdle = (fn: () => void) => {
  if (typeof window === "undefined") return;

  const ric = window.requestIdleCallback as
    | typeof window.requestIdleCallback
    | undefined;

  if (ric) ric(fn, { timeout: 500 });
  else window.setTimeout(fn, 1);
};

export default function AnimationCanvas({
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  const currentFrame = (index: number) =>
    `${path}/${index.toString().padStart(pads, "0")}.${format}`;

  const render = (frame: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images.current[frame - 1];
    if (!img || !img.complete) return;

    const drawUpright = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };

    const drawRotated = () => {
      canvas.width = img.naturalHeight;
      canvas.height = img.naturalWidth;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.width, 0);
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(img, 0, 0);
    };

    // rotateFlag rotates only on narrow screens, where a landscape sequence
    // reads better turned; `rotated` forces it either way.
    const shouldRotate = rotateFlag ? window.innerWidth < 1024 : !!rotated;
    if (shouldRotate) drawRotated();
    else drawUpright();
  };

  const preload = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load frame: ${src}`));
      img.src = src;
    });

  useEffect(() => {
    let cancelled = false;

    const loadRest = async () => {
      // Frames 2..N in small idle-scheduled batches, so decoding never
      // competes with the first paint.
      for (let i = 2; i <= frames && !cancelled; i += BATCH_SIZE) {
        const batch = [];
        for (let j = i; j < i + BATCH_SIZE && j <= frames; j++) {
          batch.push(currentFrame(j));
        }

        const loaded = await Promise.all(batch.map(preload)).catch(() => null);
        if (!loaded || cancelled) continue;

        images.current.push(...loaded);
      }
    };

    const startLoading = async () => {
      try {
        images.current.push(await preload(currentFrame(1)));
      } catch {
        return;
      }
      if (cancelled) return;

      render(1);
      setReady(true);
      onIdle(() => void loadRest());
    };

    // Hold off until the canvas is near the viewport — a second sequence
    // further down the page shouldn't compete with the hero's.
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          void startLoading();
        }
      },
      { rootMargin: "200% 0px" }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  useGSAP(() => {
    const sT = ScrollTrigger.create({
      trigger: canvasRef.current,
      start,
      end,
      scrub,
      markers,
      onUpdate: (self) => {
        render(1 + Math.floor((frames - 1) * self.progress));
      },
    });

    return () => sT.kill();
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <canvas
        ref={canvasRef}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
