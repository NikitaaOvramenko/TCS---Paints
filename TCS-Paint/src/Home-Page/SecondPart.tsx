import TextPanel from "../custom-components/TextPanel";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";
import DoorBefore from "../assets/before/door-before.jpg";
import DoorAfter from "../assets/after/door-after.jpg";
import GarageBefore from "../assets/before/garage-before.jpg";
import GarageAfter from "../assets/after/garage-after.jpg";
import { useEffect, useState } from "react";

export default function SecondPart() {
  const [width, SetWidth] = useState(window.innerWidth >= 1024 ? 500 : 180);

  useEffect(() => {
    const handleResize = () => {
      SetWidth(window.innerWidth >= 1024 ? 500 : 180);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="intro h-[512px] md:h-[1024px] w-full flex flex-col items-center justify-center gap-8 bg-radial-[at_75%_50%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-50%">
      <div className="partOne flex flex-row md:flex-row gap-8">
        <TextPanel
          text={["Prep,Paint,Perfect.", "No Shortcuts Taken.", "No Mess Left."]}
          color="#16020283"
          width="w-[180px] lg:w-[500px] "
          height="h-[180px] lg:h-[400px]"
          font="text-1xl  lg:text-4xl"
        />
        <BeforeAfterCard
          beforeSrc={DoorBefore}
          afterSrc={DoorAfter}
          width="w-[180px] lg:w-[500px] "
          height="h-[180px] lg:h-[400px]"
          realWidth={width}
        />
      </div>
      <div className="partTwo flex flex-row md:flex-row gap-8">
        <BeforeAfterCard
          beforeSrc={GarageBefore}
          afterSrc={GarageAfter}
          width="w-[180px] lg:w-[500px] "
          height="h-[180px] lg:h-[400px]"
          realWidth={width}
        />
        <TextPanel
          text={["We Paint Doors.", "We Paint Walls.", "We Paint It All."]}
          color="#16020283"
          width="w-[180px] lg:w-[500px] "
          height="h-[180px] lg:h-[400px]"
          font="text-1xl  lg:text-4xl"
        />
      </div>
    </div>
  );
}
