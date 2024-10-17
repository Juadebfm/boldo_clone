import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./resusable/Button";
import { Link } from "react-router-dom";

const Navbar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const currentSection = sections.find((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          return (
            currentScrollPos >= sectionTop &&
            currentScrollPos < sectionTop + sectionHeight
          );
        }
        return false;
      });
      if (currentSection) {
        setActiveItem(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleItemClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="static sm:fixed top-[35px] left-0 right-0 z-50 bg-transparent py-10 sm:py-0">
      <div className="mx-auto px-8 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Use Link to="/" for navigation to Home page */}
            <Link to="/">
              <div className="flex-shrink-0 flex items-center justify-center gap-4">
                <img className="h-8 w-auto" src="/logoBoldo.png" alt="Logo" />
                <span className="font-medium text-[35px] leading-[33px] text-white">
                  Boldo
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block px-3 sm:px-3">
            <div className="ml-0 mt-10 sm:mt-0 sm:ml-10 flex items-center space-x-4 font-open_sans font-semibold">
              {navItems.map((item) =>
                !item.isButton ? (
                  <Link
                    key={item.name}
                    to={item.href.startsWith("/") ? item.href : ""}
                    onClick={(e) => {
                      if (!item.href.startsWith("/")) {
                        e.preventDefault();
                        handleItemClick(item.href);
                      }
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeItem === item.href.slice(1)
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:text-white duration-200 transition-all"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : null
              )}

              <Button
                className="bg-white text-[#0A2640] px-4 py-2 rounded-md"
                buttonText="Login"
              />
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={{ rotate: 0 }}
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) =>
            !item.isButton ? (
              <Link
                key={item.name}
                to={item.href.startsWith("/") ? item.href : ""}
                onClick={(e) => {
                  if (!item.href.startsWith("/")) {
                    e.preventDefault();
                    handleItemClick(item.href);
                  }
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300"
              >
                {item.name}
              </Link>
            ) : null
          )}

          <Button
            className="bg-white text-[#0A2640] px-4 py-2 rounded-md hover:shadow-lg shadow-white/70"
            buttonText="Login"
          />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
