import { Link } from "react-router-dom";
import tcs_icon from "./assets/icons/tcs_icon.png";

const array = ["Home", "About", "Contact"];
const links = ["/", "/about", "/contact"];

export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[120px] bg-[#151313] text-white fixed top-0 z-50">
        <div className="flex justify-center items-center w-[1125px] h-full">
          <div className="left flex items-center w-full h-full text-6xl">
            <img src={tcs_icon} width={130} height={130} alt="tcs icon" />
            <p className=" pb-8 text-center">TCS - Paints</p>
          </div>
          <div className="right w-full h-full">
            <ul className=" text-4xl flex justify-end gap-8 items-center h-full">
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
