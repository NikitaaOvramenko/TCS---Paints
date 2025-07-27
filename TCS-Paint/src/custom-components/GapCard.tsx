interface GapCardProps {
  height: string;
}

export default function GapCard({ height }: GapCardProps) {
  return <div className={height} style={{ width: "100%" }} />;
}
