import React from "react";

const StorySection = ({
  bgColor = "bg-white",
  textColor = "text-[#777777]",
  bigTextColor = "text-black",
  smallText,
  title,
  content,
  pWidth,
}) => {
  return (
    <section
      className={`${bgColor} flex items-start justify-start flex-col px-[35px] md:px-16 lg:px-20`}
    >
      <div className="mt-20 md:mt-40 mb-20 w-full lg:w-[60%] mx-auto">
        <small className={`capitalize text-[20px] mt-32 ${textColor}`}>
          {smallText}
        </small>
        <h2
          className={`w-full text-[33px] sm:text-[48px] leading-tight mt-5 mb-4 ${bigTextColor}`}
        >
          {title}
        </h2>
        <p className={`text-[19px] leading-normal ${textColor} ${pWidth}`}>
          {content}
        </p>
      </div>
    </section>
  );
};

export default StorySection;
