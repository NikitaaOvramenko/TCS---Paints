import { Link } from "react-router-dom";

interface Props {
  className?: string;
  text: string;
}

export default function FormButton({ className, text }: Props) {
  return (
    <Link
      to="/form"
      className={`flex justify-center text-white items-center ${className}`}
    >
      <div className="box text-black">{text}</div>
    </Link>
  );
}
