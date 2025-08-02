import TextPanel from "../custom-components/TextPanel";
import House_Icon from "../assets/icons/house.png";
import Kitchen from "../assets/icons/kitchen.png";

export default function Intro() {
  return (
    <div className="intro h-[512px] lg:h-[1024px] w-[1125px] flex flex-col items-center justify-center ">
      <div className="partOne ">
        <TextPanel
          text={[
            "We Paint Home Exteriors.",
            "Fast, Clean, Professional Work.",
            "Schedule Your Free Estimate Today.",
          ]}
          color="#4b8d97ff"
          width="w-[400px] lg:w-[900px] "
          height="h-[200px] lg:h-[300px]"
          font="text-2xl sm:text-2xl lg:text-5xl"
        />
      </div>
      <div className="partTwo flex flex-row justify-center items-center gap-8 mt-8">
        <div className="left flex flex-col items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}
