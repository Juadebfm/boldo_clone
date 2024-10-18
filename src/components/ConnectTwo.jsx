import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiQuill } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const ConnectTwo = () => {
  return (
    <section className="px-[35px] md:px-20 py-8 sm:py-20 bg-white text-black grid grid-cols-1 lg:grid-cols-2 place-items-start gap-10 sm:gap-24">
      <div className="pt-14 sm:pt-28">
        <h3 className="text-[31px] sm:text-[36px] w-full sm:w-[75%]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-4 hover:bg-boldo_blue hover:text-white duration-150 py-4 px-6 cursor-pointer transition-all bg-white shadow-md rounded-md">
            <GiQuill className="text-[26px] sm:text-[36px]" />
            <span className="text-base sm:text-[20px] font-open_sans">
              We connect our customers with the best.
            </span>
          </div>
          <div className="flex items-center gap-4 hover:bg-boldo_blue hover:text-white duration-150 py-4 px-6 cursor-pointer transition-all bg-white shadow-md rounded-md">
            <FaRegEye className="text-[26px] sm:text-[36px]" />
            <span className="text-base sm:text-[20px] font-open_sans">
              Advisor success customer launch party.
            </span>
          </div>
          <div className="flex items-center gap-4 hover:bg-boldo_blue hover:text-white duration-150 py-4 px-6 cursor-pointer transition-all bg-white shadow-md rounded-md">
            <IoSunnyOutline className="text-[26px] sm:text-[36px]" />
            <span className="text-base sm:text-[20px] font-open_sans">
              Business-to-consumer long tail.
            </span>
          </div>
        </div>
      </div>
      <div>
        <img src="/connect2.png" alt="" />
      </div>
    </section>
  );
};

export default ConnectTwo;
