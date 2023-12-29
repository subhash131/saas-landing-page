import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex text-sm font-extralight justify-between px-10 pb-6 -mt-6 max-sm:flex-col max-sm:gap-4  max-sm:items-center">
      <div className="flex gap-4 max-sm:text-xs max-sm:gap-1">
        <p className="max-sm:hidden">Privacy Policy</p>
        <p>Subscribe to our newsletter</p>
      </div>
      <div className="max-sm:hidden">Subhash</div>
      <div className="flex gap-4">
        <p className="cursor-pointer">Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p>
      </div>
    </div>
  );
};

export default Footer;
