import { Link } from "react-router-dom";
import tcs_icon from "./assets/icons/tcs_icon.png";

const array = ["Home", "Gallery", "About"];
const links = ["/", "/gallery", "/about"];

export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-[#16020283] text-white fixed top-0 z-50 px-2 h-[80px] lg:h-[80px]">
        <div className="flex justify-center items-center w-[1125px] h-full">
          {/* Left logo + name (clickable only on content) */}
          <div className="left flex items-center gap-2 text-1xl lg:text-3xl">
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300"
            >
              <img
                className="object-cover mb-3 inline-block w-[55px]"
                src={tcs_icon}
                alt="tcs icon"
              />
              <p className="text-center">TCS - Paints</p>
            </Link>
          </div>

          {/* Right nav links */}
          <div className="right flex-2 w-full h-full">
            <ul className="text-1xl lg:text-2xl flex justify-end gap-8 items-center h-full">
              {array.map((item, index) => (
                <Link
                  key={index}
                  to={links[index]}
                  className="hover:underline hover:scale-110 transition duration-300 active:scale-90"
                >
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
