import GapCard from "../custom-components/GapCard";
import IntroGallery from "../Gallery-Page/IntroGallery";

export default function Gallery() {
  return (
    <>
      <div className="self-center gallery bg-[#C9CBD3] w-full h-[2500px] lg:h-[2000px] flex flex-col items-center  ">
        <GapCard height="h-[80px]" />
        <IntroGallery />
      </div>
    </>
  );
}
