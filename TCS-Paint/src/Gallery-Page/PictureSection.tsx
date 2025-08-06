import axios from "axios";
import { useEffect, useState } from "react";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";

export default function PictureSection() {
  let [pics, setPics] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/BeforeAfterPic/getAll  ")
      .then((res) => {
        setPics(res.data);
      });
  }, []);

  return (
    <>
      <div className="intro h-auto  w-full max-w-[1125px] flex flex-wrap justify-center gap-8 items-center  text-bottom ">
        {pics.map((pic, index) => (
          <BeforeAfterCard
            beforeSrc={`http://localhost:5000/media/beforePics/${pic.beforePic}`}
            afterSrc={`http://localhost:5000/media/afterPics/${pic.afterPic}`}
            width="w-[300px]"
            height="h-[300px]"
          />
        ))}
      </div>
    </>
  );
}
