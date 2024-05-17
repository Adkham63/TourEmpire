import React from "react";
import { MoveDown, MoveUpRight } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="hero flex flex-col items-center mt-6 lg:mt-20 text-white">
      <div className="container">
        <h1 className="text-5xl sm:text-5xl lg:text-7xl text-center sm:text-left w-full sm:w-5/6 text-white absolute top-[50%] translate-y-[-50%] max-w-[1200px]">
          From Dreams to Discoveries: Crafting Your Ultimate Travel Experiences
        </h1>
        <div className="block sm:flex justify-between items-center gap-2 absolute bottom-8 container">
          <div className="flex gap-5 items-start">
            <a href="#contacts" className="flex gap-2 items-center py-2 px-3 rounded-3xl bg-white text-[#222]">
              <MoveUpRight className="h-[30px] w-[30px] p-[7px] rounded-full text-white bg-[#222]" />
              Connect
            </a>
            <p className="font-extralight text-white/80 max-w-[600px] text-sm">
              Experience the world with our tours. From breathtaking wonders to
              vibrant cultural experiences, we've got your next adventure
              covered.
            </p>
          </div>
          <a href="#tours" className="flex items-center gap-2 justify-center mt-5">
            <span>Explore More</span><MoveDown size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
