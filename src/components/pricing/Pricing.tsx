"use client";
import React, { useState } from "react";
import Card from "./Card";

const planData = {
  monthly: [
    {
      title: "Free Member",
      price: "$0 /month",
      subTitle: "Life-time free",
      description: "Basic features with no cost, perfect for getting started.",
      features: ["1 Project", "Analytics"],
    },
    {
      title: "Super Charger",
      price: "$49 /month",
      subTitle: "Additional features",
      description: "Advanced features and premium support for users.",
      features: ["2 Project", "Analytics", "Insights panel", "Share Features"],
    },
    {
      title: "Enterprise",
      price: "$128 /month",
      subTitle: "Advanced features",
      description: "Basic features with no cost, perfect for getting started.",
      features: [
        "Unlimited Project",
        "Detailed Analytics",
        "Insights panel",
        "Share Features",
      ],
    },
  ],
  yearly: [
    {
      title: "Free Member",
      price: "$0 /year",
      subTitle: "Life-time free",
      description: "Basic features with no cost, perfect for getting started.",
      features: ["1 Project", "Analytics"],
    },
    {
      title: "Super Charger",
      price: "$419 /year",
      subTitle: "Additional features",
      description: "Advanced features and premium support for users.",
      features: ["2 Project", "Analytics", "Insights panel", "Share Features"],
    },
    {
      title: "Enterprice",
      price: "$1218 /year",
      subTitle: "Advanced features",
      description: "Basic features with no cost, perfect for getting started.",
      features: [
        "Unlimited Project",
        "Detailed Analytics",
        "Insights panel",
        "Share Features",
      ],
    },
  ],
  quartly: [
    {
      title: "Free Member",
      price: "$0 /quarter",
      subTitle: "Life-time free",
      description: "Basic features with no cost, perfect for getting started.",
      features: ["1 Project", "Analytics"],
    },
    {
      title: "Super Charger",
      price: "$219 /quarter",
      subTitle: "Additional features",
      description: "Advanced features and premium support for users.",
      features: ["2 Project", "Analytics", "Insights panel", "Share Features"],
    },
    {
      title: "Enterprice",
      price: "$618 /quarter",
      subTitle: "Advanced features",
      description: "Basic features with no cost, perfect for getting started.",
      features: [
        "Unlimited Project",
        "Detailed Analytics",
        "Insights panel",
        "Share Features",
      ],
    },
  ],
};

const Pricing = () => {
  const [plans, setPlans] = useState<typeof planData>(planData);
  const [selectedDuration, setSelectedDuration] = useState("monthly");
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <div className="w-full h-full flex justify-center mt-10 flex-col gap-10 pb-10">
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
      <div className="flex gap-10 justify-center items-center text-xs">
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
      <div className="flex gap-10 justify-center items-center">
        {selectedDuration === "monthly" && (
          <>
            {planData.monthly.map(
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
            {planData.quartly.map(
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
            {planData.yearly.map(
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
