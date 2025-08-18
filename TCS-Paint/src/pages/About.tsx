import FormButton from "../miscellaneous/formButton";
import Footer from "../footer";
import GapCard from "../custom-components/GapCard";

export default function About() {
  return (
    <>
      <GapCard height="h-[80px]" />
      <div className="gallery bg-radial-[at_50%_100%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-75% w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white">
        {/* Main Section */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left side - Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              At{" "}
              <span className="text-yellow-500 font-semibold">TCS Paints</span>,
              we deliver high-quality painting services that transform your
              home’s look and feel. Our team is passionate about precision,
              clean finishes, and customer satisfaction.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              From interiors to exteriors, we make the process smooth, fast, and
              stress-free. With years of experience and a commitment to
              excellence, your satisfaction is always our top priority.
            </p>
          </div>

          {/* Right side - Map */}
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="TCS Paints Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740673739!2d-118.69192057736641!3d34.02016130696543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b03f19ac37%3A0x3b0fdf75c1e4d8a7!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1679948338403!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full max-w-3xl text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-lg md:text-xl">
            Have questions or want to schedule a free estimate? Reach out to us
            today!
          </p>

          <FormButton
            text="Go to Contact Form"
            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-xl font-semibold px-6 py-3 rounded-lg"
          />

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
            <a
              href="tel:6478097778"
              className="hover:text-yellow-400 transition"
            >
              📞 647-809-7778
            </a>
            <a
              href="tel:4243464307"
              className="hover:text-yellow-400 transition"
            >
              📞 424-346-4307
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
