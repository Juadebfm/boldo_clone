import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Partners = () => {
  const logos = [
    "/presto.png",
    "/boldo.png",
    "/presto.png",
    "/boldo.png",
    "/presto.png",
    "/boldo.png",
  ];

  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const updateWidth = () => {
      const logoWidth = 146.51; // Width of each logo
      const gap = 40; // Gap between logos
      const totalWidth = (logoWidth + gap) * logos.length;
      setContainerWidth(totalWidth);
      controls.start({
        x: [-totalWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [logos, controls]);

  return (
    <div className="static sm:relative overflow-hidden h-max sm:h-[100px] flex items-center bg-boldo_blue z-20 pb-16 mt-16 sm:mt-0">
      <div className="absolute inset-0 bg-gradient-to-r from-boldo_blue via-transparent to-boldo_blue z-10" />
      <motion.div
        className="flex gap-10 absolute whitespace-nowrap"
        animate={controls}
        style={{ width: `${containerWidth * 2}px` }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-[146.51px] h-auto inline-block transition-all duration-300"
            style={{
              filter: "brightness(0.7) grayscale(0.5)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
