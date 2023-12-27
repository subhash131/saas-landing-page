import Lock from "@/components/icons/Lock";
import React from "react";

const Card3 = () => {
  return (
    <div className="w-80 h-80 bg-transparent overflow-hidden relative flex-col gap-4 flex items-center justify-center">
      <div className=" w-full h-[70%] bg-[#10121C] rounded-2xl grid place-content-center relative">
        <div className="w-28 h-28 glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] flex justify-center items-center">
          <Lock />
        </div>
        <Lock className="absolute -rotate-12 left-6 -top-5 " color="#55506f" />
        <Lock
          className="absolute w-20 h-20 rotate-12 top-2 right-6"
          color="#55506f"
        />
        <Lock
          className="absolute w-18 h-18 -rotate-12 bottom-12 left-6"
          color="#55506f"
        />
        <Lock
          className="absolute w-12 h-12 rotate-12 bottom-4 right-6"
          color="#55506f"
        />
        <div className="bottom-1 absolute text-left w-[80%] left-6">
          <p className="font-extralight text-lg">Secure and Reliable</p>
        </div>
      </div>
      <div className="w-full h-[25%] bg-[#10121C] rounded-2xl text-left flex flex-col gap-2 pt-2 px-4 relative overflow-hidden">
        <p className=" text-gray-400">Credit Balance</p>
        <p className=" px-2 text-2xl font-extralight">$25,214</p>
        <div className="w-1 h-1  glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] "></div>
        <div className="w-1 h-1 ml-auto glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] "></div>
      </div>
    </div>
  );
};

export default Card3;
