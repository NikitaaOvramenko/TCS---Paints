import TextPanel from "../custom-components/TextPanel";

export default function Guide() {
  return (
    <div className="intro h-[512px] md:h-[1024px] w-[1125px] flex flex-col items-center justify-center gap-8">
      <TextPanel
        text={[
          "STEP 1: BOOK A FREE VISIT",
          "Give us a call or message. We’ll schedule a time to check out the space and understand your needs.",
        ]}
        width="w-[35%] sm:w-[70%] lg:w-full"
        height="h-[300px]"
        color="#070000"
        font="text-2xl lg:text-4xl"
      ></TextPanel>
      <TextPanel
        text={[
          "STEP 2: GET YOUT CUSTOM ESTIMATE",
          "Give us a call or message. We’ll schedule a time to check out the space and understand your needs.",
        ]}
        width="w-[35%] sm:w-[70%] lg:w-full"
        height="h-[300px]"
        color="#070000"
        font="text-2xl lg:text-4xl"
      ></TextPanel>
      <TextPanel
        text={[
          "STEP 3: WE GET TO WORK",
          "Once approved, we handle it all — prep, paint, and cleanup. You relax and enjoy.",
        ]}
        width="w-[35%] sm:w-[70%] lg:w-full"
        height="h-[300px]"
        color="#070000"
        font="text-2xl lg:text-4xl"
      ></TextPanel>
    </div>
  );
}
