import { Link } from "react-router-dom";

interface Props {
  className?: string;
  text: string;
}

export default function FormButton({ className, text }: Props) {
  return (
    <Link
      to="/form"
      className={`flex text-black hover:text-white justify-center items-center ${className}`}
    >
      <div className=" transition text-[interit] duration-300">{text}</div>
    </Link>
  );
}
