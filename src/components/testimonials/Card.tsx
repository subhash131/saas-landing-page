import { Quote } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div
      className={`w-[18rem] h-[22rem] transition-all border-[#1C1541] bg-[#161925] p-6 rounded-3xl relative flex items-center justify-center`}
    >
      <div className="absolute w-1 h-1 glow bg-transparent z-0"></div>
      {/* <div className="absolute w-1 h-1 glow bg-transparent bottom-0 right-4"></div> */}
      <div className="w-full h-full flex flex-col gap-8 z-10">
        <p className="text-sm">CEO CORPS, USA</p>
        <p className="text-xs text-gray-300">
          I just wanted to share a quick note and let you know that you guys do
          a really good job. I'm glad I decided to work with you. It's really
          great how easy your websites are to update and manage. I never have
          any problem at all
        </p>
        <div>
          <Quote
            className="float-right -mt-5 border-gray-400"
            strokeOpacity={0.8}
            fill="gray"
          />
        </div>
        <hr className="border-gray-600" />
        <div className="w-full h-full items-center -mt-5 flex gap-5">
          <img
            src="./assets/icons8-lightning-96.png"
            className="w-10 h-10 bg-black rounded-full object-cover"
          ></img>
          <div>
            <p>Adam Mccall</p>
            <p>31 years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
