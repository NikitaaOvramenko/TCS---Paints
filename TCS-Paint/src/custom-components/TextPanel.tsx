type TextPanelProps = {
  text: string[];
  className?: string;
  width?: string;
  height?: string;
  color?: string;
};

export default function TextPanel({
  text,
  width = "w-full",
  height = "h-full",
  color = "text-black",
}: TextPanelProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${width} ${height} hover:scale-105 hover:drop-shadow-xl/45 transition-all duration-300 ease-in-out flex flex-1 items-center justify-center rounded-[30px] text-6xl shadow-lg `}
    >
      <p className="text-center text-white">
        {text.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
