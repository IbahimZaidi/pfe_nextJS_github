import React from "react";
import Links from "./Links";
import { IoMailOpenOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-green-500 flex justify-between items-center h-24  px-1 md:px-3 lg:px-6 xl:px-8 2xl:px-12  m-auto ">
      <img
        className=" w-14 md:w-16 lg:w-18  xl:w-20 h-14 md:h-16 lg:h-18  xl:h-20 hidden lg:block"
        src="/images&figures/fplogo.png"
        alt="Error image"
      />
      <Links />

      <img
        className=" w-14 md:w-16 lg:w-18  xl:w-20 h-14 md:h-16 lg:h-18  xl:h-20 hidden lg:block"
        src="/images&figures/fplogo_2.png"
        alt="Error image"
      />
      <span>
        <IoMailOpenOutline className="w-8 h-8 lg:hidden" />
      </span>
    </header>
  );
};

export default Header;
