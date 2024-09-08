import React from "react";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="bg-green-600 p-4 mb-6 flex items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-xs">KINYANG</span>
          </div>
        </div>
        <div className="flex items-center ml-auto space-x-5">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Random
          </a>
          <a href="#" className="text-white underline">
            Menu
          </a>
          <a href="#" className="text-white">
            About Us
          </a>
          <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
