import TextPanel from "../custom-components/TextPanel";

export default function Guide() {
  return (
    <div className=" h-[512px] md:h-[1024px] w-full flex flex-col items-center justify-center bg-radial-[at_35%_50%] from-[rgba(140,28,49,1)] to-[rgba(12,12,26,1)] to-50%  gap-8">
      <TextPanel
        text={[
          "STEP 1: BOOK A FREE VISIT",
          "Give us a call or message. We’ll schedule a time to check out the space and understand your needs.",
        ]}
        width="w-[400px] lg:w-[500px] "
        height="h-[200px] lg:h-[400px]"
        color="#16020283"
        font="text-1xl lg:text-4xl"
      ></TextPanel>
      <TextPanel
        text={[
          "STEP 2: GET YOUR CUSTOM ESTIMATE",
          "We’ll put together a simple, easy-to-read estimate so you know exactly what to expect.",
        ]}
        width="w-[400px] lg:w-[500px] "
        height="h-[200px] lg:h-[400px]"
        font="text-1xl lg:text-4xl"
        color="#16020283"
      ></TextPanel>
      <TextPanel
        text={[
          "STEP 3: WE GET TO WORK",
          "Once approved, we handle it all — prep, paint, and cleanup. You relax and enjoy.",
        ]}
        width="w-[400px] lg:w-[500px] "
        height="h-[200px] lg:h-[400px]"
        color="#16020283"
        font="text-1xl lg:text-4xl"
      ></TextPanel>
    </div>
  );
}
