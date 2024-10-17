import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <MainLayout>
      <section>
        <Hero />
        <Services />
      </section>
    </MainLayout>
  );
};

export default Home;
