import { useState } from "react";
import { Link } from "react-router-dom";
import tcs_icon from "./assets/icons/tcs_icon.png";
import useWindowDimensions from "./helper/WindowHook";

const array = ["Home", "Gallery", "About"];
const links = ["/", "/gallery", "/about"];

export default function NavBar() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-center bg-[#160202f2] text-white fixed top-0 z-50 px-2 h-[80px] lg:h-[80px]">
        <div className="flex justify-center items-center w-[1125px] h-full">
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
              <div className="flex flex-col md:flex-row">
                {!open && (
                  <p
                    style={{ animation: "rollUp 300ms ease-out" }}
                    className="rollUp text-left text-"
                  >
                    TCS Paints - Serving Los Angeles
                  </p>
                )}

                <p className="text-left"> </p>
              </div>
            </Link>
          </div>

          {/* Right nav links */}
          <div className="right flex-2 w-full h-full relative">
            {width > 768 && (
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
            )}

            {width <= 768 && (
              <div className="flex items-center justify-end h-full">
                {open && (
                  <div
                    style={{ animation: "rollDown 300ms ease-out" }}
                    className=" rollDown top-0 left-0 right-0 w-full  text-whitebackdrop-blur-sm p-4 shadow-xl"
                  >
                    <ul className="text-xl flex justify-center flex-row gap-4">
                      {array.map((item, index) => (
                        <Link
                          key={index}
                          to={links[index]}
                          className="hover:underline hover:scale-110 transition duration-300 active:scale-90"
                          onClick={() => setOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Menu button */}
                <button
                  type="button"
                  aria-label="Toggle menu"
                  onClick={() => setOpen((v) => !v)}
                  className="p-3 rounded-xl border border-white/20 hover:border-white/40 active:scale-95 transition"
                >
                  {/* Simple hamburger icon */}
                  <div className="flex flex-col gap-1">
                    <span className="block h-[2px] w-6 bg-white rounded" />
                    <span className="block h-[2px] w-6 bg-white rounded" />
                    <span className="block h-[2px] w-6 bg-white rounded" />
                  </div>
                </button>

                {/* Dropdown */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
