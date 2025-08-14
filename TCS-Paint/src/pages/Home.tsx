import Intro from "../Home-Page/Intro";
import SecondPart from "../Home-Page/SecondPart";
import Guide from "../Home-Page/Guide";
import Footer from "../footer";
export default function Home() {
  return (
    <>
      <div className="self-center home bg-[rgba(12,12,26,1)] w-full h-min-screen flex flex-col items-center  ">
        <Intro />
        <SecondPart />
        <Guide />
        <Footer />
      </div>
    </>
  );
}
