import Intro from "../Home-Page/Intro";
import SecondPart from "../Home-Page/SecondPart";
import Guide from "../Home-Page/Guide";
import Footer from "../footer";
import GapCard from "../custom-components/GapCard";
export default function Home() {
  return (
    <>
      <div className="self-center home bg-[rgba(12,12,26,1)] w-full h-min-screen flex flex-col items-center  ">
        <Intro />
        <SecondPart />
        <GapCard height="h-[20px] lg:h-[0px]" />
        <Guide />
        <Footer />
      </div>
    </>
  );
}
