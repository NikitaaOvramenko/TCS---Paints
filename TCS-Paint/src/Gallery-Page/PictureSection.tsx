import axios from "axios";
import { useEffect, useState } from "react";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";

export default function PictureSection() {
  const [pics, setPics] = useState<any[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_PIC_URL).then((res) => {
      setPics(res.data);
    });
  }, []);

  return (
    <>
      <div className="intro w-full max-w-6xl bg-[#16020283] rounded-2xl p-8 flex flex-wrap justify-center gap-10 items-center">
        {pics.map((pic, idx) => (
          <div key={idx} className="transition duration-300">
            <BeforeAfterCard
              beforeSrc={pic.beforePic}
              afterSrc={pic.afterPic}
              width="w-[280px] md:w-[300px]"
              height="h-[280px] md:h-[300px]"
              realWidth={300}
            />
          </div>
        ))}
      </div>
    </>
  );
}
