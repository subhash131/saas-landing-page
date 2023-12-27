import React from "react";
import TechRainbow from "../icons/TechRainbow";
import "./styles.css";

const TechStack = () => {
  return (
    <div className="w-full h-full overflow-hidden justify-center items-center flex mt-10 relative">
      <TechRainbow className="rotate" />
      <div className="absolute w-[28rem] h-[28rem] top-15 flex-col gap-4 rounded-full bg-[#0A0C11] text-center flex justify-center items-center">
        <p className="font-extralight text-4xl tracking-wide">
          Seamless <span className="text-[#897DD3]">integration</span> <br />
          across your apps
        </p>
        <p className="text-gray-400 text-xs">
          Harness the power of integrations to take your <br />
          performance to new heights.
        </p>
        <button className="text-sm font-extralight py-2 px-4 border border-gray-400 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TechStack;
