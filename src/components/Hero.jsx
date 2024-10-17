import React from "react";
import Button from "./resusable/Button";
import Partners from "./Partners";

const Hero = () => {
  return (
    <div className="bg-boldo_blue h-max sm:h-screen flex flex-col relative overflow-hidden pt-28">
      <div className="flex-grow flex flex-col sm:flex-row items-center justify-center px-8 sm:px-6 lg:px-20">
        <div className="bg-[#1C3D5B]/40 h-[900px] w-[900px] rounded-full absolute z-10 -top-[15%] lg:-top-[30%] right-0 lg:-right-[20%]"></div>

        <div className="w-full sm:w-[55%] z-20">
          <div className="w-full sm:w-[75%]">
            <h1 className="text-[36px] sm:text-[40px] lg:text-[50px] capitalize text-white leading-tight">
              Save time by building fast with Boldo Template
            </h1>
            <p className="mt-4 text-[#F1F1F1]/70 text-[16px] sm:text-[19px] leading-[1.8]">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start mt-6 sm:mt-10 gap-4">
              <Button
                buttonText="Buy template"
                className="text-boldo_blue bg-boldo_green border border-boldo_green font-semibold hover:bg-transparent hover:text-white hover:border hover:outline-white transition-all duration-200 w-full sm:w-auto"
              />
              <Button
                buttonText="Explore"
                className="bg-transparent text-white border border-white font-semibold hover:bg-boldo_green hover:text-boldo_blue transition-all duration-200 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[45%] z-20 mt-8 sm:mt-0">
          <img
            src="/hero_graphics.svg"
            className="p-0 sm:p-8 lg:p-16 pr-0 w-full"
            alt="Hero graphics"
          />
        </div>
      </div>

      <div className="w-full mt-auto">
        <Partners />
      </div>
    </div>
  );
};

export default Hero;
