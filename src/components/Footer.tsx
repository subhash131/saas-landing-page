import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex text-sm font-extralight justify-between px-10 pb-6 -mt-6">
      <div className="flex gap-4">
        <p>Privacy Policy</p>
        <p>Subscribe to our newsletter</p>
      </div>
      <div className="flex  gap-2">Subhash</div>
      <div className="flex gap-4">
        <p className="cursor-pointer">Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p>
      </div>
    </div>
  );
};

export default Footer;
