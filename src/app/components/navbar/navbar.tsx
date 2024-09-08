"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = (): JSX.Element => {

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick)
  }
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Home
              </Link>
              <Link href="/random" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Random
              </Link>
              <Link href="/menu" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Menu
              </Link>
              <Link href="/aboutus" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                About us
              </Link>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;