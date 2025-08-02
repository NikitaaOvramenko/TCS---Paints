import GapCard from "../custom-components/GapCard";
import Intro from "../Home-Page/Intro";
import SecondPart from "../Home-Page/SecondPart";
import Guide from "../Home-Page/Guide";
import Contact from "../Home-Page/Contact";

export default function Home() {
  return (
    <>
      <div className="self-center home bg-[#C9CBD3] w-full h-[2500px] lg:h-[5120px] flex flex-col items-center  ">
        <GapCard height="h-[225px] lg:h-[80px]" />
        <Intro />
        <GapCard height="h-[225px] lg:h-[400px]" />
        <SecondPart />
        <GapCard height="h-[225px] lg:h-[400px]" />
        <Guide />
        <GapCard height="h-[225px] lg:h-[400px]" />
        <Contact />
      </div>
    </>
  );
}
