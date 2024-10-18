import React from "react";
import Button from "./resusable/Button";

const CTA = () => {
  return (
    <main className="px-[35px] sm:px-20 py-20 text-white">
      <div className="px-[35px] sm:px-20 py-20 bg-boldo_blue rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute w-[900px] h-[900px] -top-[600px] -right-[450px] lg:-right-[15%]">
          <div className="w-full h-full bg-[#1C3D5B]/40 rounded-full"></div>
        </div>

        <h2 className="text-[31px] sm:text-[36px] w-full sm:w-[45%] text-center relative z-20">
          An enterprise template to ramp up your company website
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 relative z-20 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-10 py-3 rounded-full placeholder:text-black w-full sm:w-[370px]"
          />

          <Button
            buttonText="Start Now"
            className="bg-boldo_green text-boldo_blue font-semibold capitalize w-full sm:w-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default CTA;
