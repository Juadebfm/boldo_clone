import React from "react";

const Button = ({ className, buttonText, ...props }) => {
  return (
    <button
      className={`px-8 py-3 w-auto h-auto rounded-full flex items-center justify-center ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
