import axios from "axios";
import { useEffect, useState } from "react";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";

export default function PictureSection() {
  let [pics, setPics] = useState<any[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_PIC_URL).then((res) => {
      setPics(res.data);
    });
  }, []);

  return (
    <>
      <div className="intro h-auto bg-[#16020283] rounded-2xl p-8  w-full max-w-[80%] flex  flex-wrap justify-center gap-8 items-center  text-bottom ">
        {pics.map((pic) => (
          <BeforeAfterCard
            beforeSrc={`${pic.beforePic}`}
            afterSrc={`${pic.afterPic}`}
            width="w-[300px]"
            height="h-[300px]"
            realWidth={300}
          />
        ))}
      </div>
    </>
  );
}
