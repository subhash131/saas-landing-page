import React from "react";
import Javascript from "@/components/icons/Javascript";
import Swift from "@/components/icons/Swift";
import VsCode from "@/components/icons/VsCode";
import Aws from "@/components/icons/Aws";

const Card2 = () => {
  return (
    <div className="w-80 h-80 bg-[#10121C] rounded-2xl overflow-hidden relative flex items-center justify-center">
      <div className="w-[22rem] h-[22rem] rounded-full border border-[#201F33] absolute" />
      <div className="w-60 h-60 rounded-full border border-[#201F33] absolute" />
      <div className="w-28 h-28 glow shadow-[#1D1E34] bg-[#201848 bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] absolute grid place-content-center">
        <img
          src="./assets/icons8-lightning-96.png"
          className="w-12 h-12 rotate-12"
        />
      </div>
      <div className="absolute top-12 left-16 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Javascript />
      </div>
      <div className="absolute top-24 right-5 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Swift />
      </div>
      <div className="absolute bottom-12 right-10 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <VsCode />
      </div>
      <div className="absolute bottom-16 left-6 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Aws />
      </div>
      <div className="bottom-1 absolute text-left w-[80%]">
        <p className="font-extralight text-xl">
          Seamlessly integrate <br /> with all your tools
        </p>
      </div>
    </div>
  );
};

export default Card2;
