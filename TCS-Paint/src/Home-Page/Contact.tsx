import Form from "../custom-components/Form";

export default function Contact() {
  // sm:w-auto h-auto
  //w-full
  return (
    <>
      <div className="intro h-[512px] md:h-[1024px] w-[1125px] flex flex-col items-center justify-center gap-8">
        <Form
          background="#4b8d97ff"
          height="h-auto"
          width=" w-[auto] "
          font="text-2xl"
        />
      </div>
    </>
  );
}
