export default function Footer() {
  return (
    <footer className="w-full bg-[#16020283] h-[80px] text-white py-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Technological Construction Service.
          All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#privacy" className="hover:text-yellow-400 transition">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-yellow-400 transition">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
