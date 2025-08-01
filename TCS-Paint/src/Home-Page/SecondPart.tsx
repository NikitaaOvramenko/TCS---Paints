import TextPanel from "../custom-components/TextPanel";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";
import DoorBefore from "../assets/before/door-before.jpg";
import DoorAfter from "../assets/after/door-after.jpg";
import GarageBefore from "../assets/before/garage-before.jpg";
import GarageAfter from "../assets/after/garage-after.jpg";

export default function SecondPart() {
  return (
    <div className="intro h-[512px] md:h-[1024px] w-[1125px] flex flex-col items-center justify-center gap-8">
      <div className="partOne flex flex-row md:flex-row gap-8">
        <TextPanel
          text={["Prep,Paint,Perfect.", "No Shortcuts Taken.", "No Mess Left."]}
          color="#070000"
          width="w-[150px] md:w-[500px] "
          height="h-[100px] md:h-[400px]"
          font="text-1xl  md:text-4xl"
        />
        <BeforeAfterCard
          beforeSrc={DoorBefore}
          afterSrc={DoorAfter}
          width="w-[150px] md:w-[500px] "
          height="h-[100px] md:h-[400px]"
        />
      </div>
      <div className="partTwo flex flex-row  md:flex-row gap-8">
        <BeforeAfterCard
          beforeSrc={GarageBefore}
          afterSrc={GarageAfter}
          width="w-[150px] md:w-[500px] "
          height="h-[100px] md:h-[400px]"
        />
        <TextPanel
          text={["We Paint Doors.", "We Paint Walls.", "We Paint It All."]}
          color="#070000"
          width="w-[150px] md:w-[500px] "
          height="h-[100px] md:h-[400px]"
          font="text-1xl  md:text-4xl"
        />
      </div>
    </div>
  );
}
