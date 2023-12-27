import React from "react";
import Card from "./card";

const Pricing = () => {
  return (
    <div className="w-full flex items- justify-center mt-10 flex-col gap-10">
      <div className="w-full text-center flex flex-col gap-4">
        <p className="text-5xl font-light">
          Affordable pricing <span className="text-[#897DD3]">solution</span>
        </p>
        <p className="font-extralight text-gray-400">
          Find cost-effective pricing plans designed to meet
          <br />
          your requirements.
        </p>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <button className="border px-4 py-2 rounded-full">Monthly</button>
        <button className="border px-4 py-2 rounded-full">Quarterly</button>
        <button className="border px-4 py-2 rounded-full">Yearly</button>
      </div>
      <div className="flex gap-10  justify-center items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Pricing;
