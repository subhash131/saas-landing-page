import React from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";

const Hero = () => {
  return (
    <div className="w-full text-center pt-16">
      <h1 className="text-5xl tracking-wider max-sm:text-2xl">
        <span className="from-[#2D0D61] bg-gradient-to-r px-4 rounded-full">
          Revolutionize
        </span>
        your digital
        <br />
        <span className="inline-block mt-8 ">
          SaaS
          <span className="from-[#55506F] to-90% bg-gradient-to-l px-4 rounded-full">
            products
          </span>
        </span>
      </h1>
      <p className="text-xs text-gray-400 mt-14">
        Create stunning, professional-quality websites in record tine with our
        powerful UI kit
      </p>
      <div className="mt-6 gap-4 flex items-center w-full justify-center text-sm">
        <button className="px-4 p-2 rounded-full border border-white">
          Learn More
        </button>
        <button className="px-4 p-2 rounded-full border border-white">
          Get Started
        </button>
      </div>
      <div className="w-full px-10 h-full flex mt-12 flex-row justify-center gap-10 max-sm:flex-col max-sm:items-center max-md:flex-col max-md:items-center max-lg:flex-col max-lg:items-center">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default Hero;
