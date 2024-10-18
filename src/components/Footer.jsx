import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-[35px] sm:px-20 py-20 bg-white flex flex-col lg:flex-row items-start justify-between gap-11 sm:gap-24">
      <div className="w-full lg:w-[25%]">
        <img
          src="/logofooter.png"
          alt=""
          className="w-[156px] h-[41px] mb-4 sm:mb-10"
        />
        <p className="text-[#777777] leading-normal mb-4 sm:mb-20">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>

        <small className="text-[#777777]">All rights reserved.</small>
      </div>
      <div className="w-full sm:w-[75%] grid grid-cols-2 lg:grid-cols-3 place-items-start gap-8 lg:gap-0">
        <ul className="space-y-8">
          <span className="text-[20px] text-black font-bold">Landings</span>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/product">Product</Link>
          </li>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <ul className="space-y-8">
          <span className="text-[20px] text-black font-bold">Company</span>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/">Careers</Link>
          </li>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <ul className="space-y-8">
          <span className="text-[20px] text-black font-bold">Resources</span>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/">Blog</Link>
          </li>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/product">Product</Link>
          </li>
          <li className="text-[#777777] hover:text-black duration-150 transition-all ease-in-out">
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
