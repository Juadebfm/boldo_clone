import React from "react";
import StorySection from "./resusable/StorySection";

const Values = () => {
  return (
    <section className="bg-boldo_blue">
      <StorySection
        smallText="Our values"
        title="The leadership team"
        content="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus."
        bgColor="bg-transparent"
        bigTextColor="text-white"
        textColor="text-white"
        pWidth="w-[85%] text-gray-400"
      />

      <div className=" px-[35px] md:px-20 w-full lg:w-[60%] mx-auto space-y-10 text-white">
        <div className="flex flex-col md:flex-row items-start justify-center gap-16">
          <img src="/valuesImg1.png" alt="" className="w-[150px] h-[151px]" />
          <div>
            <h3 className="text-[28px] mb-4">We are commited.</h3>
            <p className="text-gray-400 leading-normal">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-14">
          <img src="/valuesImg2.png" alt="" className="w-[150px] h-[151px]" />
          <div>
            <h3 className="text-[28px] mb-4">We are responsible.</h3>
            <p className="text-gray-400 leading-normal">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-14 pb-28">
          <img src="/valuesImg2.png" alt="" className="w-[150px] h-[151px]" />
          <div>
            <h3 className="text-[28px] mb-4">We aim for progress.</h3>
            <p className="text-gray-400 leading-normal">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
