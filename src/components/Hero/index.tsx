import React from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import "./cards/styles.css";
import Card3 from "./cards/Card3";

const Hero = () => {
  return (
    <div className="w-full text-center pt-16">
      <p className="text-5xl tracking-wider ">
        <span className="from-[#2D0D61] bg-gradient-to-r px-4 rounded-full">
          Revolutionize
        </span>
        your digital
        <br />
        <span className="inline-block mt-8 ">
          SaaS
          <span className="from-[#085225] to-90% bg-gradient-to-l px-4 rounded-full">
            products
          </span>
        </span>
      </p>
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
      <div className="w-full h-full flex mt-12 flex-row justify-center gap-10 ">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default Hero;
