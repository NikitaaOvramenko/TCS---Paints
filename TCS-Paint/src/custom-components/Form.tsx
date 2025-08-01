export default function Form() {
  return (
    <form className="w-full sm:w-auto h-auto flex flex-col items-center justify-center text-white bg-black p-4 rounded-2xl">
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="name" className="self-start">
          Name:
        </label>
        <input
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
          id="email"
          name="email"
          placeholder="Enter your email"
          type="email"
          className="w-[300px] h-8 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <label htmlFor="message" className="self-start">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="border-2 border-white bg-black text-white px-2 pt-1 focus:outline-none rounded resize-none"
          cols={33}
          rows={5}
          required
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button
        className="w-24 h-9 font-semibold bg-white text-black rounded active:scale-90 duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
