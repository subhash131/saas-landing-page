import { ArrowRight, CheckCircle } from "lucide-react";
import React from "react";

const Card = ({
  selected,
  title,
  price,
  subTitle,
  description,
  features,
  onClick,
}: {
  selected: boolean;
  title: string;
  price: string;
  subTitle: string;
  description: string;
  features: string[];
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-[18rem] h-[26rem] transition-all border-[#1C1541] ${
        selected
          ? "from-[#12121E] to-[#1C1541] bg-gradient-to-b  border-2 scale-105"
          : "bg-[#161925]"
      } p-2 rounded-3xl`}
    >
      <div className="p-4 flex flex-col gap-4 h-full">
        <p className="">{title}</p>
        <p className="font-light text-xs">
          <span className="text-3xl">{price.split(" ")[0]}</span>{" "}
          {price.split(" ")[1]}
        </p>
        <p className="text-sm text-gray-400">{`*${subTitle}`}</p>
        <p className="text-xs text-gray-200 pr-10">{description}</p>
        <hr className="border-gray-500" />
        <div className="h-full flex justify-between flex-col">
          <ul className="">
            {features.map((item: string, index: number) => {
              return (
                <li
                  className="flex text-xs items-center gap-2 "
                  key={`${item}:${index}`}
                >
                  <CheckCircle className="w-4" strokeWidth={1.5} />
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="mx-auto">
            <button className="px-6 text-xs py-2 rounded-3xl border flex items-center gap-1">
              Become a Free Member{" "}
              <ArrowRight className="w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
