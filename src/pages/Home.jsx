import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <MainLayout>
      <section>
        <Hero />
      </section>
    </MainLayout>
  );
};

export default Home;
