import React from "react";
import Card from "./Card";

const Testimonial = () => {
  return (
    <div className="w-full h-full flex justify-center mt-10 flex-col gap-10 pb-10 overflow-hidden">
      <div className="w-full text-center flex flex-col gap-4">
        <h1 className="text-5xl font-light">
          Hear from our satisfied <br />{" "}
          <span className="text-[#897DD3]">customers</span>
        </h1>
        <p className="font-extralight text-gray-400">
          Discover what our customers have to say about us.
        </p>
      </div>
      <div className="flex gap-10 justify-center items-center text-xs  [&>*:nth-child(odd)]:rotate-6 [&>*:nth-child(even)]:-rotate-6 overflow-">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Testimonial;
