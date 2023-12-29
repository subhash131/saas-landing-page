"use client";
import React, { useState } from "react";
import Card from "./Card";
import PLANDETAILS from "./constants";

const Pricing = () => {
  const [selectedDuration, setSelectedDuration] = useState("monthly");
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <div className="w-full h-full flex justify-center mt-10 max-sm:-mt-12 flex-col gap-10 pb-10">
      <div className="w-full text-center flex flex-col gap-4 max-sm:gap-2">
        <h1 className="text-5xl font-light max-sm:text-2xl">
          Affordable pricing <span className="text-[#897DD3]">solution</span>
        </h1>
        <p className="font-extralight text-gray-400 max-sm:text-xs">
          Find cost-effective pricing plans designed to meet
          <br />
          your requirements.
        </p>
      </div>
      <div className=" max-sm:-mt-4 flex gap-10 justify-center items-center text-xs max-sm:gap-2">
        <input
          type="radio"
          id="monthly"
          name="plan"
          value="monthly"
          className="hidden"
        />
        <label
          htmlFor="monthly"
          className={`border px-4 py-2 rounded-full cursor-pointer ${
            selectedDuration === "monthly" ? "bg-[#1F0B3E]" : ""
          }`}
          onClick={() => setSelectedDuration("monthly")}
        >
          Monthly
        </label>
        <input
          type="radio"
          id="quarterly"
          name="plan"
          value="quarterly"
          className="hidden"
        />
        <label
          htmlFor="quarterly"
          className={`border px-4 py-2 rounded-full cursor-pointer ${
            selectedDuration === "quarterly" ? "bg-[#1F0B3E]" : ""
          }`}
          onClick={() => setSelectedDuration("quarterly")}
        >
          Quarterly
        </label>
        <input
          type="radio"
          id="yearly"
          name="plan"
          value="yearly"
          className="hidden"
        />
        <label
          htmlFor="yearly"
          className={`border px-4 py-2 rounded-full cursor-pointer ${
            selectedDuration === "yearly" ? "bg-[#1F0B3E]" : ""
          }`}
          onClick={() => setSelectedDuration("yearly")}
        >
          Yearly
        </label>
      </div>
      <div className="flex gap-10 justify-center items-center max-sm:flex-col max-md:flex-col max-lg:flex-col">
        {selectedDuration === "monthly" && (
          <>
            {PLANDETAILS.monthly.map(
              ({ title, subTitle, description, features, price }, index) => {
                return (
                  <Card
                    selected={index == selectedCard}
                    key={`${title}:${index}`}
                    title={title}
                    description={description}
                    features={features}
                    price={price}
                    subTitle={subTitle}
                    onClick={() => {
                      setSelectedCard(index);
                    }}
                  />
                );
              }
            )}
          </>
        )}
        {selectedDuration === "quarterly" && (
          <>
            {PLANDETAILS.quartly.map(
              ({ title, subTitle, description, features, price }, index) => {
                return (
                  <Card
                    selected={index == selectedCard}
                    key={`${title}:${index}`}
                    title={title}
                    description={description}
                    features={features}
                    price={price}
                    subTitle={subTitle}
                    onClick={() => {
                      setSelectedCard(index);
                    }}
                  />
                );
              }
            )}
          </>
        )}
        {selectedDuration === "yearly" && (
          <>
            {PLANDETAILS.yearly.map(
              ({ title, subTitle, description, features, price }, index) => {
                return (
                  <Card
                    selected={index == selectedCard}
                    key={`${title}:${index}`}
                    title={title}
                    description={description}
                    features={features}
                    price={price}
                    subTitle={subTitle}
                    onClick={() => {
                      setSelectedCard(index);
                    }}
                  />
                );
              }
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Pricing;
