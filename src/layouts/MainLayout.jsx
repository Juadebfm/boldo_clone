import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const navItems = [
  { name: "Product", href: "/product" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login", isButton: true },
];

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar navItems={navItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
