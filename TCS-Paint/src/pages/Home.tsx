import Intro from "../Home-Page/Intro";
import SecondPart from "../Home-Page/SecondPart";
import Guide from "../Home-Page/Guide";
import Contact from "../Home-Page/Contact";

export default function Home() {
  return (
    <>
      <div className="self-center home bg-[rgba(12,12,26,1)] w-full h-[2000px] sm:h-[4000px] lg:h-[4096px] flex flex-col items-center  ">
        {/* <ThreeScene /> */}
        <Intro />
        <SecondPart />
        <Guide />
        <Contact />
      </div>
    </>
  );
}
