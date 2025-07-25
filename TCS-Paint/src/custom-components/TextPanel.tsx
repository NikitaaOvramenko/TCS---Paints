type TextPanelProps = {
  text: string;
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
      className={`${width} ${height} bg-[${color}] flex flex-1 items-center justify-center rounded-[30px] text-6xl shadow-lg `}
    >
      <p className="text-center text-white">{text}</p>
    </div>
  );
}
