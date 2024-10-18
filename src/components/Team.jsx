import React from "react";
import StorySection from "./resusable/StorySection";

const Team = () => {
  return (
    <section className="bg-white">
      <div className="px-[35px] md:px-20">
        <StorySection
          smallText="Our team"
          title="The leadership team"
          content="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. "
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-[85%] mx-auto pb-28">
          <div className="">
            <img src="/aboutTeam1.png" alt="" className="mb-6" />
            <h3 className="mb-4 text-[28px]">Micheal Scott</h3>
            <span className="text-[#777777]">General Manager</span>
          </div>
          <div className="">
            <img src="/aboutTeam2.png" alt="" className="mb-6" />
            <h3 className="mb-4 text-[28px]">Micheal Scott</h3>
            <span className="text-[#777777]">General Manager</span>
          </div>
          <div className="">
            <img src="/aboutImage3.png" alt="" className="mb-6" />
            <h3 className="mb-4 text-[28px]">Micheal Scott</h3>
            <span className="text-[#777777]">General Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
