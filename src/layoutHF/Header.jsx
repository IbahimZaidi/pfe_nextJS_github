import React from "react";
import Links from "./Links";

const Header = () => {
  return (
    <header className="bg-green-500 flex justify-between h-24 px-16 m-auto ">
      <img
        className="logo-header-1"
        src="/images&figures/fplogo.png"
        alt="Error image"
      />
      <Links />

      <img
        className="logo-header-1"
        src="/images&figures/fplogo_2.png"
        alt="Error image"
      />
    </header>
  );
};

export default Header;
