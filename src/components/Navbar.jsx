import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./resusable/Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isBlogPostPage = location.pathname.startsWith("/blog/");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 50);

      // Only check for in-page sections if we're on the home page
      if (location.pathname === "/") {
        const sections = navItems
          .filter((item) => !item.href.startsWith("/"))
          .map((item) => document.querySelector(item.href));

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
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, location.pathname]);

  const handleItemClick = (href) => {
    setIsOpen(false);
    if (!href.startsWith("/")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getNavbarStyle = () => {
    if (isBlogPostPage) {
      return "bg-white shadow-md";
    }
    return isScrolled ? "bg-white shadow-md" : "bg-transparent";
  };

  const getTextStyle = () => {
    if (isBlogPostPage) {
      return "text-[#0A2640]";
    }
    return isScrolled ? "text-[#0A2640]" : "text-white";
  };

  return (
    <nav
      className={`fixed -top-1 left-0 right-0 z-50 transition-all duration-300 py-5 ${getNavbarStyle()}`}
    >
      <div className="mx-auto px-8 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center justify-center gap-2 sm:gap-4">
                <img
                  className="h-6 w-auto sm:h-8"
                  src="/logoBoldo.png"
                  alt="Logo"
                />
                <span
                  className={`font-medium text-2xl sm:text-[35px] leading-[33px] ${getTextStyle()}`}
                >
                  Boldo
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 font-open_sans font-semibold">
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
                        ? `${
                            isBlogPostPage || isScrolled
                              ? "bg-[#0A2640] text-white w-[128px] rounded-full"
                              : "bg-white text-[#0A2640] w-[128px] rounded-full"
                          }`
                        : `${getTextStyle()} hover:bg-opacity-20 hover:bg-gray-700`
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : null
              )}

              <Button
                className={`${
                  isBlogPostPage || isScrolled
                    ? "bg-[#0A2640] text-white w-[128px] rounded-full"
                    : "bg-white text-[#0A2640] w-[128px] rounded-full"
                } px-4 py-2`}
                buttonText="Login"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${getTextStyle()} hover:bg-opacity-20 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
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

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isBlogPostPage || isScrolled ? "bg-white" : "bg-[#0A2640]"
          }`}
        >
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeItem === item.href.slice(1)
                    ? `${
                        isBlogPostPage || isScrolled
                          ? "bg-[#0A2640] text-white"
                          : "bg-white text-[#0A2640]"
                      }`
                    : `${getTextStyle()} hover:bg-opacity-20 hover:bg-gray-700`
                }`}
              >
                {item.name}
              </Link>
            ) : null
          )}

          <div className="px-3 py-2">
            <Button
              className={`${
                isBlogPostPage || isScrolled
                  ? "bg-[#0A2640] text-white"
                  : "bg-white text-[#0A2640]"
              } px-4 py-2 rounded-md hover:shadow-lg w-full`}
              buttonText="Login"
            />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
