import React from "react";
import TechRainbow from "../icons/TechRainbow";
import "./styles.css";

const TechStack = () => {
  return (
    <div className="w-full h-full overflow-hidden justify-center items-center flex mt-10 relative max-sm:-mt-12">
      <TechRainbow className="rotate" />
      <div className="absolute max-sm:w-[15rem] max-sm:h-[15rem] w-[25rem] h-[25rem] top-15 flex-col gap-4 rounded-full bg-[#0A0C11] text-center flex justify-center items-center">
        <h1 className="font-extralight text-3xl max-sm:text-sm ">
          Seamless <span className="text-[#897DD3]">integration</span> <br />
          across your apps
        </h1>
        <p className="text-gray-400 text-xs max-sm:hidden">
          Harness the power of integrations to take your <br />
          performance to new heights.
        </p>
        <button className="text-sm font-extralight py-2 px-4 border max-sm:text-xs border-gray-400 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TechStack;
