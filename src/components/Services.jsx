import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="min-h-screen bg-white text-boldo_blue flex flex-col items-center justify-center px-[35px] sm:px-20 py-16">
      <small className="capitalize text-[20px]">Our Services</small>
      <h2 className="w-full sm:w-[45%] mx-auto text-[33px] sm:text-[40px] text-center">
        Handshake infographic mass market crowdfunding iteration.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-20 mt-16">
        <div className="px-5">
          <img src="/coolfeature.png" alt="" />
          <h3 className="font-open_sans text-black text-[20px] py-3">
            Cool feature title
          </h3>
          <p className="w-[80%] py-3 text-[#777777]">
            Learning curve network effects return on investment.
          </p>

          <Link
            to="/"
            className="hover:border transition-all duration-150 flex mt-4 items-center justify-center gap-3 w-[164px] h-[45px] font-open_sans border-b border-boldo_blue font-bold"
          >
            <span>Explore page</span> <FaArrowRight />
          </Link>
        </div>
        <div className="px-5">
          <img src="/even.png" alt="" />
          <h3 className="font-open_sans text-black text-[20px] py-3">
            Even cooler feature
          </h3>
          <p className="w-[80%] py-3 text-[#777777]">
            Learning curve network effects return on investment.
          </p>

          <Link
            to="/"
            className="hover:border transition-all duration-150 flex mt-4 items-center justify-center gap-3 w-[164px] h-[45px] font-open_sans border-b border-boldo_blue font-bold"
          >
            <span>Explore page</span> <FaArrowRight />
          </Link>
        </div>
        <div className="px-5">
          <img src="/coolfeature3.png" alt="" />
          <h3 className="font-open_sans text-black text-[20px] py-3">
            Cool feature title
          </h3>
          <p className="w-[80%] py-3 text-[#777777]">
            Learning curve network effects return on investment.
          </p>

          <Link
            to="/"
            className="hover:border transition-all duration-150 flex mt-4 items-center justify-center gap-3 w-[164px] h-[45px] font-open_sans border-b border-boldo_blue font-bold"
          >
            <span>Explore page</span> <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
