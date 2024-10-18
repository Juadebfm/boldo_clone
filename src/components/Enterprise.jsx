import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Dummy data for testimonials
const testimonials = [
  {
    id: 1,
    image: "/testimonial1.png",
    name: "Albus Dumbledore",
    company: "Hogwarts",
    position: "Manager",
    testimonial:
      "Buyer buzz partner network disruptive non-disclosure agreement business",
  },
  {
    id: 2,
    image: "/testimonial2Snape.png",
    name: "Severus Snape",
    company: "Slytherin",
    position: "Manager",
    testimonial:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
  },
  {
    id: 3,
    image: "/testimonialPorter.png",
    name: "Harry Porter",
    company: "Gryffindor",
    position: "Team Leader",
    testimonial:
      "Release facebook responsive web design business model canvas seed money monetization.",
  },
  {
    id: 4,
    image: "/testimonial1.png",
    name: "Hermione Granger",
    company: "Ministry of Magic",
    position: "Minister",
    testimonial:
      "Implementing Boldo in our department has improved our productivity tenfold. It's almost like magic!",
  },
  {
    id: 5,
    image: "/testimonial2Snape.png",
    name: "Bruce Wayne",
    company: "Wayne Enterprises",
    position: "Chairman",
    testimonial:
      "Boldo provides the security and efficiency that even Gotham City's finest would approve of.",
  },
  {
    id: 6,
    image: "/testimonialPorter.png",
    name: "Daenerys Targaryen",
    company: "House Targaryen",
    position: "Queen",
    testimonial:
      "Boldo's enterprise solution has helped us manage our resources across the Seven Kingdoms with unprecedented ease.",
  },
  {
    id: 7,
    image: "/testimonial1.png",
    name: "Peter Parker",
    company: "Daily Bugle",
    position: "Photographer",
    testimonial:
      "As a freelancer, Boldo has given me the structure I need to manage my work efficiently. It's simply amazing!",
  },
  {
    id: 8,
    image: "/testimonial2Snape.png",
    name: "Katniss Everdeen",
    company: "District 12",
    position: "Victor",
    testimonial:
      "Boldo's intuitive interface has made resource management in our district smoother than ever.",
  },
  {
    id: 9,
    image: "/testimonialPorter.png",
    name: "Luke Skywalker",
    company: "Jedi Order",
    position: "Jedi Master",
    testimonial:
      "Boldo brings balance to our operations, much like the Force brings balance to the galaxy.",
  },
];

const Enterprise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? prevIndex : prevIndex + 3
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? 0 : prevIndex - 3));
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="px-[35px] sm:px-20 py-10 sm:py-20 bg-boldo_blue text-white h-max">
      <div className="flex flex-col items-start justify-between mb-10 sm:flex-row sm:items-end">
        <h2 className="text-3xl sm:text-[48px] font-normal sm:w-[60%] mb-6 sm:mb-0 leading-normal">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex items-center gap-5">
          <button
            onClick={prevTestimonials}
            disabled={currentIndex === 0}
            className={`text-[40px] text-boldo_blue bg-white p-2 rounded-full ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <IoIosArrowRoundBack />
          </button>
          <button
            onClick={nextTestimonials}
            disabled={currentIndex + 3 >= testimonials.length}
            className={`text-[40px] text-boldo_blue bg-white p-2 rounded-full ${
              currentIndex + 3 >= testimonials.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>

      <div className="testimonial_cards">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {currentTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white text-boldo_blue p-10 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg mb-4 w-[90%]">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm">
                      {testimonial.position} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Enterprise;
