import GapCard from "../custom-components/GapCard";
import IntroGallery from "../Gallery-Page/IntroGallery";
import PictureSection from "../Gallery-Page/PictureSection";
import Footer from "../footer";
export default function Gallery() {
  return (
    <>
      <div className="self-center gallery bg-radial-[at_50%_100%] from-[rgba(14,165,233,1)] to-[rgba(12,12,26,1)] to-75% w-full min-h-screen flex flex-col items-center gap-8 ">
        <GapCard height="h-[80px]" />
        <IntroGallery />
        <PictureSection />
        <Footer />
      </div>
    </>
  );
}
