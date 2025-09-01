import Intro from "../Home-Page/Intro";
import SecondPart from "../Home-Page/SecondPart";
import Guide from "../Home-Page/Guide";
import Footer from "../footer";
import GapCard from "../custom-components/GapCard";
export default function Home() {
  return (
    <>
      <div className="self-center home bg-[rgba(12,12,26,1)] w-full h-min-screen flex flex-col items-center  ">
        <GapCard height="h-[50px] lg:h-[0px]" />
        <Intro />
        <GapCard height="h-[80px] lg:h-[0px]" />
        <SecondPart />
        <GapCard height="h-[100px] lg:h-[0px]" />
        <Guide />
        <Footer />
      </div>
    </>
  );
}
