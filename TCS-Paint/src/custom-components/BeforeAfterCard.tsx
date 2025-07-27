import { useState } from "react";

export default function BeforeAfterCard({
  beforeSrc,
  afterSrc,
  width,
  height,
}: {
  beforeSrc: string;
  afterSrc: string;
  width: string;
  height: string;
}) {
  const MAX = 400;
  const [value, SetValue] = useState(MAX / 2); // start centered

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    SetValue(x); // direct pixel value
  };

  return (
    <div
      className={`relative flex items-center justify-center ${width} ${height} overflow-hidden rounded-2xl border-4 border-black`}
    >
      {/* Before image */}
      <img
        src={beforeSrc}
        alt="Before"
        className="absolute z-10 top-0 left-0 w-full h-full object-cover"
      />

      <div className="w-full h-full relative z-20" onMouseMove={handleMove}>
        <img
          src={afterSrc}
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 calc(100% - ${value}px) 0 0)` }}
        />

        {/* Dragger line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-black cursor-ew-resize"
          style={{ left: `${value}px` }}
        ></div>
      </div>
    </div>
  );
}
