import Form from "../custom-components/Form";

export default function Contact() {
  // sm:w-auto h-auto
  //w-full
  return (
    <>
      <div className="intro h-[512px] md:h-[1024px] w-[1125px] flex flex-col items-center justify-center gap-8 bg-radial-[at_50%_80%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-50%">
        <Form
          background="#16020283"
          height="h-auto"
          width=" w-[auto] "
          font="text-2xl"
        />
      </div>
    </>
  );
}
