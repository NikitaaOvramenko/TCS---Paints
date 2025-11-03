import instaIcon from "./assets/icons/instagram(1).png";
import thumbIcon from "./assets/icons/thumbtack.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex flex-col md:flex-col gap-2 text-lg md:text-base font-semibold">
          <a
            href="https://wa.me/14243464307"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            📞 424-346-4307
          </a>
          <a href="mailto:tcspaintsfl@gmail.com">tcspaintsfl@gmail.com</a>
          <div className="socials flex flex-row gap-2">
            <a
              href="https://www.instagram.com/your_local.painter.and.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="insta"
              target="_blank"
            >
              <img src={instaIcon} width={35} height={35} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.thumbtack.com/fl/north-miami-beach/construction-estimating/your-local-painter-co/service/456721325265764352?utm_medium=web&utm_source=txt&surface=sp"
              className="thumbtack"
            >
              <img src={thumbIcon} width={35} height={35} alt="" />
            </a>
          </div>
        </div>
        {/* Left section */}
        <div className="flex flex-col items-center md:items-start text-sm md:text-base gap-1">
          <p>&copy; {new Date().getFullYear()} Your Local Painter & Co</p>
          <p>All rights reserved.</p>
          <p>Miami, FL</p>
        </div>

        {/* Right section */}
      </div>
    </footer>
  );
}
