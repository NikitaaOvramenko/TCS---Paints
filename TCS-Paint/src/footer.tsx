export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        {/* Left - copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Technological Construction Service.
          All rights reserved.
        </p>

        {/* Right - phone numbers */}
        <div className="flex gap-6 text-sm md:text-base font-semibold">
          <a href="tel:6478097778" className="hover:text-yellow-400 transition">
            📞 647-809-7778
          </a>
          <a href="tel:4243464307" className="hover:text-yellow-400 transition">
            📞 424-346-4307
          </a>
        </div>
      </div>
    </footer>
  );
}
