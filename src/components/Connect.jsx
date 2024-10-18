import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./resusable/Button";

const Connect = () => {
  return (
    <section className="px-[35px] sm:px-20 py-20 bg-white text-black grid grid-cols-1 sm:grid-cols-2 place-items-start gap-10 sm:gap-24">
      <div>
        <img src="/connect.png" alt="" />
      </div>
      <div className="pt-14 sm:pt-28">
        <h3 className="text-[31px] sm:text-[36px] w-full sm:w-[75%]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[26px] sm:text-[36px]" />
            <span className="text-base sm:text-[20px] font-open_sans">
              We connect our customers with the best.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[26px] sm:text-[36px]" />
            <span className="text-base sm:text-[20px] font-open_sans">
              Advisor success customer launch party.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[26px] sm:text-[36px]" />
            <span className="text-base sm:text-[20px] font-open_sans">
              Business-to-consumer long tail.
            </span>
          </div>
        </div>

        <Button
          buttonText="Start Now"
          className="mt-14 bg-boldo_blue text-white w-full sm:w-auto"
        />
      </div>
    </section>
  );
};

export default Connect;
