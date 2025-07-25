import GapCard from "../custom-components/GapCard";
import Intro from "../Home-Page/Intro";

export default function Home() {
  return (
    <>
      <div className="self-center home bg-[#C9CBD3] w-full h-[4096px] flex flex-col items-center  ">
        <GapCard height="200" />
        <Intro />
      </div>
    </>
  );
}
