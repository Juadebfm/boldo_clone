import React, { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const ConnectThree = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    {
      question: "We connect our customers with the best?",
      answer:
        "Yes, we provide top-notch connections and services to ensure our customers are always linked with the best in the industry.",
    },
    {
      question: "Android research & development rockstar?",
      answer:
        "Our team includes expert Android developers who are at the forefront of mobile technology research and development.",
    },
  ];

  return (
    <section className="px-[35px] sm:px-20 py-8 sm:py-20 bg-white text-black">
      <img src="/connectLarge.png" alt="" className="w-full" />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-start py-16">
        <h3 className="text-[31px] sm:text-[36px] w-full sm:w-[70%]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <div className="space-y-8 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center justify-between w-full gap-4 duration-300 py-4 px-0 sm:px-6 cursor-pointer transition-all bg-white border-b border-[#C4C4C4]">
                <span className="text-base sm:text-[20px] font-open_sans">
                  {item.question}
                </span>
                {hoveredItem === index ? (
                  <IoIosArrowDropupCircle className="text-[26px] sm:text-[36px] transition-transform duration-300" />
                ) : (
                  <IoIosArrowDropdownCircle className="text-[26px] sm:text-[36px] transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  hoveredItem === index
                    ? "min-h-24 sm:max-h-20 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-0 sm:px-6 py-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectThree;
