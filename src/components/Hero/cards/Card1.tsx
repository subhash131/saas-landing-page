import { GraduationCap, Receipt, Store } from "lucide-react";
import React from "react";

const ItemData = [
  {
    icon: <GraduationCap strokeWidth={1.5} height={20} width={20} />,
    title: "Design Course",
    date: "7 November 2023",
    price: "-$80.50",
  },
  {
    icon: <Receipt strokeWidth={1.5} height={20} width={20} />,
    title: "Bills & Taxes",
    date: "21 October 2023",
    price: "-$156.50",
  },
  {
    icon: <Store strokeWidth={1.5} height={20} width={20} />,
    title: "Grocery Store",
    date: "19 October 2023",
    price: "-$169.00",
  },
];

const Item = ({ icon, title, date, price }: (typeof ItemData)[0]) => {
  return (
    <div className="flex w-60 h-14 justify-between z-10 bg-[#171927] p-4 rounded-3xl items-center gap-4 border border-[#46445d]">
      <div className="flex items-center gap-4">
        <div className="bg-[#1A1927] p-2 grid place-content-center rounded-full icon_gradient_background">
          {icon}
        </div>
        <div className="text-[0.7rem] text-left ">
          <p>{title}</p>
          <p className="text-[0.5rem]">{date}</p>
        </div>
      </div>
      <p className="text-sm">{price}</p>
    </div>
  );
};

const Card1 = () => {
  return (
    <div className="flex-col gap-2 w-80 h-80 bg-[#10121C] rounded-2xl relative flex items-center justify-center">
      <div className="-mt-8 absolute bg-[#1B1336] w-[80%] h-[50%] z-0 rounded-2xl border border-gray-600 grid place-content-center">
        <div className="extra_glow w-1 h-1 bg-transparent rounded-full glow"></div>
      </div>
      {ItemData.map((item, index) => {
        return (
          <Item
            key={index}
            date={item.date}
            icon={item.icon}
            price={item.price}
            title={item.title}
          />
        );
      })}
      <div className="w-[80%] text-left mt-4 ">
        <p className="text-xl w-full font-extralight">View your insights</p>
        <p className="text-xs text-gray-500 ">
          Gain valuable insights and analytics for informed decision-making.
        </p>
      </div>
      <div className=" absolute w-1 h-1 ml-1 mb-1 glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] "></div>
    </div>
  );
};

export default Card1;
