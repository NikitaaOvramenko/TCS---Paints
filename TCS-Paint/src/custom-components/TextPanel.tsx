type TextPanelProps = {
  text: string[];
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  font: string;
};

export default function TextPanel({
  text,
  width = "w-full",
  height = "h-full",
  color = "text-black",
  font,
}: TextPanelProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${width} ${height} ${font} hover:scale-105 hover:drop-shadow-xl/45 transition-all duration-300 ease-in-out flex flex-1 items-center justify-center rounded-[30px]  shadow-lg `}
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
