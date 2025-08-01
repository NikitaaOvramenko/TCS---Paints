import { Link } from "react-router-dom";
import tcs_icon from "./assets/icons/tcs_icon.png";

const array = ["Home", "About", "Contact"];
const links = ["/", "/about", "/contact"];

export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center  bg-[#151313] text-white fixed top-0 z-50   px-2  h-[80px] lg:h-[160px]">
        <div className="flex justify-center items-center w-[1125px] h-full">
          <div className="left flex  items-center w-full h-full            text-1xl sm:text-3xl md:text-5xl lg:text-6xl">
            <img
              className="   object-cover mb-10  inline-block w-[32.5px] h-[32.5px]       md:w-[130px] md:h-[130px]"
              src={tcs_icon}
              alt="tcs icon"
            />
            <p className=" text-center">TCS - Paints</p>
          </div>
          <div className="right flex-2 w-full h-full">
            <ul className=" text-1xl sm:text-2xl md:text-4xl flex justify-end gap-8 items-center h-full ">
              {array.map((item, index) => (
                <Link key={index} to={links[index]} className="hover:underline">
                  {item}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
