import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className=" text-black  border border-black rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Why choose us?
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-center">
              <div className="flex mx-auto h-10 w-10 p-2 border border-black text-black justify-center items-center rounded-full mb-4">
                {feature.icon}
              </div>
              <div className="text-center">
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
