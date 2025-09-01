import TextPanel from "../custom-components/TextPanel";
import ThreeScene from "./ThreeScene";
import FormButton from "../miscellaneous/formButton";

export default function Intro() {
  return (
    <div className="intro w-full flex flex-col-reverse items-center justify-evenly h-[512px] lg:h-[1024px] bg-[radial-gradient(ellipse_at_0%_50%,rgba(140,28,49,1)_0%,rgba(12,12,26,1)_72%)] transition-all duration-700">
      <div className="partOne flex flex-col items-center gap-8 h-1/2 animate-fadeIn">
        <TextPanel
          text={[
            "We Paint Home Interiors & Exteriors.",
            "Our team delivers fast, precise, and lasting results that transform your home.",
          ]}
          color="rgba(22,2,2,0.7)"
          width="w-[400px] lg:w-[900px]"
          height="h-[200px] lg:h-[300px]"
          font="text-2xl sm:text-2xl lg:text-5xl drop-shadow-lg"
        />
        <FormButton
          text="Schedule Your Free Estimate Today"
          className="w-4/5 px-8 h-[60px] text-2xl font-bold text-black bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 rounded shadow-lg hover:scale-105 hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300"
        />
      </div>
      <div className="partTwo flex flex-row justify-center items-center gap-8 mt-8 animate-fadeIn delay-200">
        <ThreeScene />
      </div>
    </div>
  );
}
