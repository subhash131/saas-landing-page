import { Quote } from "lucide-react";
import React from "react";

const Card = ({
  title,
  image,
  description,
  age,
  name,
}: {
  title: string;
  image: string;
  description: string;
  age: string;
  name: string;
}) => {
  return (
    <div
      className={`w-[288px] h-[22rem] transition-all border-[#1C1541] bg-[#161925] p-6 rounded-3xl relative flex items-center justify-center`}
    >
      <div className="absolute w-[1px] h-[1px] glow bg-[#353757] rounded-full z-0"></div>
      <div className="w-full h-full flex flex-col gap-8 z-10">
        <p className="text-sm">{title.toUpperCase()}</p>
        <p className="text-xs text-gray-300">{description}</p>
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
            alt="profile pic"
            src={image}
            className="w-10 h-10 bg-black rounded-full object-cover"
          ></img>
          <div>
            <p>{name}</p>
            <p>{age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
