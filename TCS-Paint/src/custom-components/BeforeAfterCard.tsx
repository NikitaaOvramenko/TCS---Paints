import { useState } from "react";

export default function BeforeAfterCard({
  beforeSrc,
  afterSrc,
  width,
  height,
  realWidth,
}: {
  beforeSrc: string;
  afterSrc: string;
  width: string;
  height: string;
  realWidth: number;
}) {
  const MAX = realWidth;
  const [value, SetValue] = useState(MAX / 2); // start centered
  const [drag, SetDrag] = useState(false);
  const [drag2, SetDrag2] = useState(false);

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!drag2) {
      return;
    }

    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();

    const x = Math.max(
      0,
      Math.min(event.changedTouches[0].clientX - rect.left, rect.width)
    );
    SetValue(x);
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!drag) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    SetValue(x); // direct pixel value
  };

  const handleMouseUp = () => {
    SetDrag(false);
  };

  const handleMouseDown = () => {
    SetDrag(true);
  };

  const handleTouchDown = () => {
    SetDrag2(true);
  };

  return (
    <div
      className={`relative flex items-center justify-center ${width} ${height} overflow-hidden rounded-2xl border-4 border-black`}
      onMouseUp={handleMouseUp}
    >
      {/* Before image */}
      <img
        src={beforeSrc}
        alt="Before"
        className="absolute select-none z-10 top-0 left-0 w-full h-full object-cover"
      />

      <div
        className="w-full h-full relative z-20 "
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
      >
        <img
          src={afterSrc}
          alt="After"
          className="select-none absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 calc(100% - ${value}px) 0 0)` }}
        />

        {/* Dragger line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-black cursor-ew-resize"
          style={{ left: `${value}px` }}
        ></div>
        <div
          className="z-100 circle-arrow absolute top-[50%] rounded-full  bg-black w-4 h-4 touch-none transition duration-300 ease active:bg-white"
          style={{ left: `calc(${value}px - 7px)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchDown}
        ></div>
      </div>
    </div>
  );
}
