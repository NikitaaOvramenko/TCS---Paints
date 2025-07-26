import TextPanel from "../custom-components/TextPanel";
import GapCard from "../custom-components/GapCard";
import Door_Icon from "../assets/icons/door.png";
import House_Icon from "../assets/icons/house.png";
import Kitchen from "../assets/icons/kitchen.png";

export default function Intro() {
  return (
    <div className="intro h-[1024px] w-[1125px] flex flex-col items-center justify-center ">
      <div className="partOne">
        <TextPanel
          text={[
            "We paint home interiors.",
            "Fast, clean, professional work.",
            "Schedule your free estimate today.",
          ]}
          color="#6F974B"
          width="w-[900px]"
          height="h-[296px]"
        />
      </div>
      <div className="partTwo flex flex-row justify-center items-center gap-8 mt-8">
        <div className="left flex flex-col items-center justify-center">
          <img src={Kitchen} width={460} alt="kitchen icon" />
        </div>
        <div className="right flex flex-col items-center justify-center">
          <img src={House_Icon} width={460} alt="house icon" />
        </div>
      </div>
    </div>
  );
}
