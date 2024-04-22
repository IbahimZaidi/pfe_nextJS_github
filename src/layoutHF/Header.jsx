"use client";
import React from "react";
import Links from "./Links";
import { IoMailOpenOutline } from "react-icons/io5";
import SideMenu from "./SideMenu";
import { useState, useEffect } from "react";

import Styles from "./links.module.css";

// cheak the height and make transition and change of width and hieght of images and the links :

export const cheakHeightTran = () => {
  const scrollHeight = window.scrollY;

  if (scrollHeight > 40) {
    document.getElementById("header").classList.add(`${Styles.scrollClass}`);
    // console.log(scrollHeight);
  }

  if (scrollHeight <= 40) {
    document.getElementById("header").classList.remove(`${Styles.scrollClass}`);
    // console.log(scrollHeight);
  }
};

const Header = () => {
  const [toggleVal, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", cheakHeightTran);
  }, []);

  return (
    <header
      id="header"
      className="bg-green-500 fixed w-100vw flex z-40 justify-between items-center h-24  px-1 md:px-3 lg:px-6 xl:px-8 2xl:px-12 top-0 m-auto "
      style={{ transition: "padding 1s " }}
    >
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
      <span
        onClick={() => {
          setToggle(!toggleVal);
          // console.log("hello", toggleVal);
        }}
        className=" cursor-pointer"
      >
        <button className="lg:hidden border border-white p-2 bg-blue-500  ">
          Menu
        </button>
      </span>
      {/* this is the menu sid_bare component */}

      <SideMenu toggleVal={toggleVal} setToggle={setToggle} />
    </header>
  );
};

export default Header;
