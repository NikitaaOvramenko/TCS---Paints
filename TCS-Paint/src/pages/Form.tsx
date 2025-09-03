import FormTemplate from "../custom-components/FormTemplate";
import GapCard from "../custom-components/GapCard";
import Footer from "../footer";
import PageScrollUp from "../miscellaneous/pageScrollUp";

export default function Form() {
  return (
    <>
      <PageScrollUp />
      <div className="gallery bg-radial-[at_50%_100%] from-[rgba(14,165,233,1)] to-[rgba(12,12,26,1)] to-75% w-full min-h-screen flex flex-col items-center justify-between gap-8  ">
        <GapCard height="h-[80px]" />
        <FormTemplate className="w-[75%] h-full bg-[rgba(3,0,0,0.72)]" />
        <Footer />
      </div>
    </>
  );
}
