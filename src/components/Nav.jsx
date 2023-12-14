import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 my-2">
      <h1 className="text-3xl font-bold text-[#374151] pl-12">UniCraft</h1>
      <ul className="hidden md:flex">
        <li className="p-4">How it works</li>
        <li className="p-4">Pricing</li>
        <li className="p-4">FAQ</li>
      </ul>
      <button className="border border-[#4B5563] text-[#4B5563] font-bold rounded-xl mr-12 py-4 px-8">
        Contact Us
      </button>
    </div>
  );
};

export default Nav;
