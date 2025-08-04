import TextPanel from "../custom-components/TextPanel";
import ThreeScene from "./ThreeScene";

export default function Intro() {
  return (
    <div className="intro h-[512px] lg:h-[1024px] w-full flex flex-col-reverse items-center justify-center bg-radial-[at_0%_50%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-75% ">
      <div className="partOne ">
        <TextPanel
          text={[
            "We Paint Home Exteriors.",
            "Fast, Clean, Professional Work.",
            "Schedule Your Free Estimate Today.",
          ]}
          color="#16020283"
          width="w-[400px] lg:w-[900px] "
          height="h-[200px] lg:h-[300px]"
          font="text-2xl sm:text-2xl lg:text-5xl"
        />
      </div>
      <div className="partTwo flex flex-row justify-center items-center gap-8 mt-8">
        <ThreeScene></ThreeScene>

        {/* <div className="left flex flex-col items-center justify-center">
          <img
            className="w-[200px] lg:w-[460px]"
            src={Kitchen}
            alt="kitchen icon"
          />
        </div>
        <div className="right flex flex-col items-center justify-center">
          <img
            className="w-[200px] lg:w-[460px] "
            src={House_Icon}
            alt="house icon"
          />
        </div> */}
      </div>
    </div>
  );
}
