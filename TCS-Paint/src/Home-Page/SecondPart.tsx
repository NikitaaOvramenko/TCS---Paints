import TextPanel from "../custom-components/TextPanel";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";
import DoorBefore from "../assets/before/door-before.jpg";
import DoorAfter from "../assets/after/door-after.jpg";
import GarageBefore from "../assets/before/garage-before.jpg";
import GarageAfter from "../assets/after/garage-after.jpg";
import { useEffect, useState } from "react";

export default function SecondPart() {
  const [width, SetWidth] = useState(window.innerWidth >= 1024 ? 500 : 350);

  useEffect(() => {
    const handleResize = () => {
      SetWidth(window.innerWidth >= 1024 ? 500 : 350);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="intro min-h-[1024px] md:min-h-[1024px] w-full flex flex-col items-center justify-center gap-8 bg-radial-[at_75%_50%] from-[rgba(14,165,233,1)] to-[rgba(12,12,26,1)] to-50%">
      {/* Top section */}
      <div className="partOne flex flex-col lg:flex-row gap-8 w-full max-w-5xl grow  lg:grow-0 items-center">
        <TextPanel
          text={["Prep,Paint,Perfect.", "No Shortcuts Taken.", "No Mess Left."]}
          color="#16020283"
          width="w-[400px] lg:w-[500px] "
          height="h-[200px] lg:h-[400px]"
          font="text-2xl sm:text-3xl lg:text-4xl"
        />
        <BeforeAfterCard
          beforeSrc={DoorBefore}
          afterSrc={DoorAfter}
          width="w-[400px] lg:w-[500px] "
          height="h-[250px] lg:h-[400px]"
          realWidth={width}
        />
      </div>

      {/* Bottom section */}
      <div className="partTwo flex flex-col-reverse lg:flex-row h-full grow  lg:grow-0 gap-8 w-full max-w-5xl items-center">
        <BeforeAfterCard
          beforeSrc={GarageBefore}
          afterSrc={GarageAfter}
          width="w-[400px] lg:w-[500px] "
          height="h-[250px] lg:h-[400px]"
          realWidth={width}
        />
        <TextPanel
          text={["We Paint Doors.", "We Paint Walls.", "We Paint It All."]}
          color="#16020283"
          width="w-[400px] lg:w-[500px] "
          height="h-[200px] lg:h-[400px]"
          font="text-2xl sm:text-3xl lg:text-4xl"
        />
      </div>
    </div>
  );
}
