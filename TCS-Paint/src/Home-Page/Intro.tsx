import TextPanel from "../custom-components/TextPanel";
import ThreeScene from "./ThreeScene";
import FormButton from "../miscellaneous/formButton";

export default function Intro() {
  return (
    <div className="intro h-[512px] lg:h-[1024px] w-full flex flex-col-reverse items-center justify-center bg-radial-[at_0%_50%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-72% ">
      <div className="partOne gap-8 h-[50%] flex flex-col items-center  ">
        <TextPanel
          text={[
            "We Paint Home Exteriors.",
            "Fast, Clean, Professional Work.",
            "Schedule Your Free Estimate Today.",
          ]}
          color="#16020283"
          width="w-[400px] lg:w-[900px] "
          height="h-[200px] lg:h-[300px]"
          font="text-2xl sm:text-2xl lg:text-5xl "
        />
        <FormButton
          text="Contact Us"
          className="w-[50%] text-2xl text-black h-[60px] bg-yellow-600 rounded "
        />
      </div>
      <div className="partTwo flex flex-row justify-center items-center gap-8 mt-8">
        <ThreeScene></ThreeScene>
      </div>
    </div>
  );
}
