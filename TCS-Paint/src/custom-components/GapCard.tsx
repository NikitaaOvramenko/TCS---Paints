interface GapCardProps {
  height: string;
}

export default function GapCard({ height }: GapCardProps) {
  return <div style={{ height: `${height}px`, width: "100%" }} />;
}
