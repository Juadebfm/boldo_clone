import React from "react";
import MainLayout from "../layouts/MainLayout";
import NumbersSection from "../components/resusable/NumbersSection";
import StorySection from "../components/resusable/StorySection";
import Team from "../components/Team";
import Values from "../components/Values";
import CTA from "../components/CTA";

const About = () => {
  const numberData = [
    { value: 120, separator: ",", suffix: "m", title: "Cool feature title" },
    { value: 10000, separator: ".", suffix: "", title: "Cool feature title" },
    { value: 240, separator: "", suffix: "", title: "Cool feature title" },
  ];

  return (
    <MainLayout>
      <section className="relative">
        <div className="bg-boldo_blue min-h-[80vh] flex flex-col items-center relative overflow-hidden pt-5 md:pt-16 lg:pt-28 text-white">
          <small className="capitalize text-[20px] mt-32">About</small>
          <h2 className="w-full md:w-[80%] lg:w-[55%] mx-auto text-[33px] sm:text-[64px] text-center leading-tight">
            We love to make great things, things that matter.
          </h2>
          <p className="text-[19px] text-[#F1F1F1] w-full md:w-[80%] lg:w-[50%] text-center mt-7 leading-loose px-4">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>

        {/* Image grid section */}
        <div className="bg-white px-[35px] md:px-20 w-full pb-16 md:pb-0">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8  mx-auto -mt-20 md:-mt-40 relative z-10">
            {/* Left Images */}
            <div className="flex flex-col space-y-4 w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)]">
              <img
                src="/aboutImg1.png"
                alt="Image 1"
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
              <img
                src="/aboutImg2.png"
                alt="Image 2"
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Middle Image */}
            <div className="w-full md:w-[calc(33.333%-2rem)] pt-4 md:pt-16">
              <img
                src="/aboutImg3.png"
                alt="Center Image"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Images */}
            <div className="flex flex-col space-y-4 w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)]">
              <img
                src="/aboutImg4.png"
                alt="Image 4"
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
              <img
                src="/aboutImg5.png"
                alt="Image 5"
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seperate Component: Our Story */}
      <StorySection
        smallText="Our story"
        title="Handshake infographic mass market crowdfunding iteration."
        content="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer."
      />

      {/* Seperate Component: Our Numbers */}
      <NumbersSection numbers={numberData} />

      {/* Seperate Component: Our Team */}
      <Team />

      {/* Seperate Component: Our Values */}
      <Values />

      {/* Seperate Component: Our Values */}
      <div className="bg-white">
        <CTA />
      </div>
    </MainLayout>
  );
};

export default About;
