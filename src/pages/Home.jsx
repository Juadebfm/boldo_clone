import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Connect from "../components/Connect";
import ConnectTwo from "../components/ConnectTwo";
import Enterprise from "../components/Enterprise";
import ConnectThree from "../components/ConnectThree";
import Blog from "../components/Blog";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useLocation } from "react-router-dom";
import CTA from "../components/CTA";

const Home = () => {
  const location = useLocation();
  const blogRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.fromBlog) {
      const timer = setTimeout(() => {
        if (blogRef.current) {
          blogRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <MainLayout>
      <section>
        <Hero />
        <Services />
        <Connect />
        <ConnectTwo />
        <Enterprise />
        <ConnectThree />
        <div ref={blogRef}>
          <Blog />
        </div>
        <div className="bg-white">
          <CTA />
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
