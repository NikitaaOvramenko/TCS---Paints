interface FormProps {
  className?: string;
}

export default function FormTemplate({ className }: FormProps) {
  return (
    <form
      className={`${className} flex scale-110 lg:scale-110 flex-col items-center justify-center text-white p-4  rounded-2xl`}
    >
      {/* Upper Section */}
      <section className="upper flex flex-col lg:flex-row gap-12">
        <div className="left">
          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="name" className="self-start">
              Name:
            </label>
            <input
              style={{ backgroundColor: "inherit" }}
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              className="w-[300px] h-8 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="email" className="self-start">
              Email:
            </label>
            <input
              style={{ backgroundColor: "inherit" }}
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              className="w-[300px] h-8 border-b-2 px-2 border-white text-white focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="phone" className="self-start">
              Phone:
            </label>
            <input
              style={{ backgroundColor: "inherit" }}
              id="phone"
              name="phone"
              placeholder="6479169777"
              type="text"
              minLength={10}
              className="w-[300px] h-8 border-b-2 px-2 border-white text-white focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="right">
          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="name" className="self-start">
              Address:
            </label>
            <input
              style={{ backgroundColor: "inherit" }}
              id="address"
              name="address"
              placeholder="3716 Barham Blvd"
              type="text"
              className="w-[300px] h-8 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="state" className="self-start">
              State:
            </label>
            <input
              style={{ backgroundColor: "inherit" }}
              id="state"
              name="state"
              placeholder="FL"
              type="text"
              className="w-[300px] h-8 border-b-2 px-2 border-white text-white focus:outline-none"
              minLength={2}
              maxLength={2}
              required
            />
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="zip" className="self-start">
              Zip:
            </label>
            <input
              style={{ backgroundColor: "inherit" }}
              id="zip"
              name="zip"
              placeholder="90068"
              type="text"
              className="w-[300px] h-8 border-b-2 px-2 border-white text-white focus:outline-none"
              minLength={5}
              maxLength={5}
              required
            />
          </div>
        </div>
      </section>

      {/* Lower Section */}

      <section className="lower">
        <button
          className="w-24 h-9 font-semibold  text-white  rounded active:scale-90 duration-300"
          type="submit"
        >
          Submit
        </button>
      </section>

      {/* 
      <div className="flex flex-col gap-3 mb-6">
        <label htmlFor="message" className="self-start">
          Message:
        </label>
        <textarea
          style={{ backgroundColor: "inherit" }}
          id="message"
          name="message"
          className="border-2 border-white  text-white px-2 pt-1 focus:outline-none rounded resize-none"
          cols={33}
          rows={5}
          required
          placeholder="Type your message here..."
        ></textarea>
      </div> */}
    </form>
  );
}
