"use client";
import React, { useEffect } from "react";
import Card from "./Card";
import TESTIMONIAL_DETAILS from "./constant";

const Testimonial = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollList = scroller.querySelector(".scroller_list");
        const scrollContent = [].slice.call(scrollList?.children);
        scrollContent.forEach((item) => {
          const duplicatedItem = (item as HTMLDivElement).cloneNode(true);
          (duplicatedItem as HTMLDivElement).setAttribute(
            "aria-hidden",
            "true"
          );
          scrollList?.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div className="w-full h-full flex justify-center mt-10 flex-col gap-10 pb-10 items-center">
      <div className="w-full h-[50%] text-center flex flex-col gap-4  ">
        <h1 className="text-5xl font-light max-sm:text-2xl">
          Hear from our satisfied <br />{" "}
          <span className="text-[#897DD3]">customers</span>
        </h1>
        <p className="font-extralight text-gray-400 max-sm:text-sm">
          Discover what our customers have to say about us.
        </p>
      </div>
      <div className="scroller flex items-center justify-center  max-w-full h-[400px] overflow-hidden">
        <div className="scroller_list w-auto flex gap-10 justify-center items-center text-xs [&>*:nth-child(odd)]:rotate-3 [&>*:nth-child(even)]:-rotate-3 ">
          {TESTIMONIAL_DETAILS.map(
            ({ title, image, description, age, name }, index) => {
              return (
                <Card
                  key={`${index}:${title}`}
                  title={title}
                  image={image}
                  description={description}
                  age={age}
                  name={name}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
