"use client";
import { IceCream2 } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [navItems, _] = useState([
    "Company",
    "Features",
    "Pricing",
    "Insights",
  ]);
  return (
    <div className="z-50 text-sm w-full h-fit sticky top-0 backdrop-blur items-center flex justify-between p-4 px-6 bg-transparent text-white">
      <div className="flex  gap-2">
        <IceCream2 strokeWidth={1.5} className="h-5" />
        Logo
      </div>
      <ul className="flex gap-10 ">
        {navItems.map((item, index) => (
          <li className="" key={`${index}:item`}>
            {item}
          </li>
        ))}
      </ul>
      <button className="rounded-3xl p-2 px-4 bg-[#1F0B3E] border border-white">
        Login
      </button>
    </div>
  );
};

export default Navbar;
