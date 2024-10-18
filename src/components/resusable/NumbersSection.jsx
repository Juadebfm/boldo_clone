import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const NumbersSection = ({
  bgColor = "bg-boldo_blue",
  textColor = "text-white",
  numbers,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={`${bgColor} pb-20 ${textColor}`}>
      <div className="flex flex-col items-center justify-center px-[35px] md:px-20">
        <small className={`capitalize text-[20px] mt-16 lg:mt-32`}>Our numbers</small>
        <h2 className="w-full lg:w-[55%] text-[33px] md:text-[50px] lg:text-[64px] text-center leading-tight mt-7">
          Handshake infographic mass market crowdfunding iteration.
        </h2>

        <div ref={ref} className="py-16 w-[80%] mx-auto">
          <div className="container mx-auto text-center">
            {/* Numbers with CountUp effect */}
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8 mb-8">
              {numbers.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start justify-center lg:justify-start"
                >
                  <div className={`text-[50px] md:text-[90px] text-boldo_green leading-none`}>
                    {inView && (
                      <CountUp
                        end={item.value}
                        duration={3}
                        separator={item.separator}
                        suffix={item.suffix}
                      />
                    )}
                  </div>
                  <p className="mt-2 text-[24px]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
