import TextPanel from "../custom-components/TextPanel";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";
import DoorBefore from "../assets/before/door-before.jpg";
import DoorAfter from "../assets/after/door-after.jpg";
import GarageBefore from "../assets/before/garage-before.jpg";
import GarageAfter from "../assets/after/garage-after.jpg";

export default function SecondPart() {
  return (
    <div className="intro h-[1024px] w-[1125px] flex flex-col items-center justify-center gap-8">
      <div className="partOne flex gap-8">
        <TextPanel
          text={["Prep,Paint,Perfect.", "No Shortcuts Taken.", "No Mess Left."]}
          color="#070000"
          width="w-[600px]"
          height="h-[400px]"
        />
        <BeforeAfterCard beforeSrc={DoorBefore} afterSrc={DoorAfter} />
      </div>
      <div className="partTwo flex gap-8">
        <BeforeAfterCard beforeSrc={GarageBefore} afterSrc={GarageAfter} />
        <TextPanel
          text={["We Paint Doors.", "We Paint Walls.", "We Paint It All."]}
          color="#070000"
          width="w-[600px]"
          height="h-[400px]"
        />
      </div>
    </div>
  );
}
