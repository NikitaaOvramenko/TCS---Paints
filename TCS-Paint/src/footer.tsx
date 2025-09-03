export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex gap-6 text-lg md:text-base font-semibold">
          <a
            href="https://wa.me/14243464307"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            📞 424-346-4307
          </a>
        </div>
        {/* Left section */}
        <div className="flex flex-col items-center md:items-start text-sm md:text-base gap-1">
          <p>
            &copy; {new Date().getFullYear()} Technological Construction Service
          </p>
          <p>All rights reserved.</p>
          <p>Los Angeles, CA</p>
        </div>

        {/* Right section */}
      </div>
    </footer>
  );
}
