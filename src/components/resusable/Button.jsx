import React from "react";

const Button = ({ className, buttonText, ...props }) => {
  return (
    <button
      className={`px-10 py-3 w-auto h-auto rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-gray-400 duration-150 ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
