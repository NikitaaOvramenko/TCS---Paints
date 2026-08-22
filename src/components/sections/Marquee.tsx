/**
 * Builder stores list inputs as objects, so entries authored in the visual
 * editor arrive as `{ item: "..." }` while code call sites pass plain strings.
 */
type MarqueeItem = string | { item?: string };

interface MarqueeProps {
  items: MarqueeItem[];
  className?: string;
}

const label = (item: MarqueeItem) =>
  typeof item === "string" ? item : (item?.item ?? "");

/**
 * Continuously scrolling text band. The track is rendered twice so the
 * -100% translate loop is seamless.
 */
export function Marquee({ items, className = "" }: MarqueeProps) {
  const labels = items.map(label).filter(Boolean);

  const track = (
    <div className="marquee__track" aria-hidden="true">
      {labels.map((text, i) => (
        <span
          key={i}
          className="display flex shrink-0 items-center gap-10 text-[clamp(1.75rem,4vw,3.25rem)] whitespace-nowrap"
        >
          {text}
          <span className="text-[0.5em] leading-none text-yellow-400">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`border-y border-current/10 py-7 ${className}`}
      role="presentation"
    >
      <div className="marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
