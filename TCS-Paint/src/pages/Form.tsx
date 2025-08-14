import FormTemplate from "../custom-components/FormTemplate";
import GapCard from "../custom-components/GapCard";
import Footer from "../footer";

export default function Form() {
  return (
    <>
      <div className="self-center gallery bg-radial-[at_50%_100%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-75% w-full min-h-screen flex flex-col items-center gap-8  ">
        <GapCard height="h-[80px]" />
        <FormTemplate className="w-[75%] h-full bg-[rgba(3,0,0,0.72)]  " />
        <Footer />
      </div>
    </>
  );
}
