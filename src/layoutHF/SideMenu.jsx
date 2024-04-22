"use client";
import React, { useEffect, useState } from "react";
import Styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// links :
import { arrayLinks } from "./Links";
const SideMenu = ({ toggleVal, setToggle }) => {
  // declaret and insert the array Links :
  const [arrayLi, setArrayLi] = useState([]);
  // console.log("##############################");
  // arrayLinks().then((resolve) => console.log(resolve));
  // console.log("##############################");

  useEffect(async () => {
    const arrayL = await arrayLinks().then((resolve) => resolve);
    setArrayLi(arrayL);
  }, []);

  // the button close inside the side_bare :

  // the path variable for active purpus :
  const path = usePathname();

  // console.log(path);

  //
  const cheakWidthLg = () => {
    window.innerWidth > 1024 ? setToggle(false) : "";
  };

  // track the width :

  useEffect(() => {
    window.addEventListener("resize", cheakWidthLg);
  }, []);
  // arrayLinks().then((resolve) => console.log(resolve));
  return (
    <nav
      className={`border-2 border-red-950 w-90vw md:w-80vw lg:hidden  absolute top-0 left-0 z-20 h-100vh  space-y-2 bg-blue-500 flex flex-col lg:hideen justify-between
      ${!toggleVal ? `${Styles.closeClass}` : ""} 
      `}
      style={{
        overflowY: "auto",
        transition: "width .5s",
        width: `${!toggleVal ? 0 : ""}`,
      }}
    >
      <button
        className="absolute right-0 top-0 w-12 h-12 rounded-full bg-yellow-300"
        onClick={() => {
          setToggle(!toggleVal);
          // console.log("hello", toggleVal);
        }}
      >
        {" "}
        close{" "}
      </button>
      {arrayLi.length > 0 ? (
        arrayLi.map((obj, index) => {
          return obj.childes.length < 1 ? (
            <Link href={obj.link} key={index}>
              <div
                className={`singleLi bg-yellow-300 pl-10 flex  items-center uppercase font-extrabold text-lg w-90% md:w-70% ${
                  obj.link == path ? Styles.active : ""
                }`}
                style={{ height: "100px" }}
              >
                {obj.title}
              </div>
            </Link>
          ) : (
            <div
              className={`singleLi bg-yellow-300  flex flex-col  relative  w-90%    `}
              key={index}
            >
              <span
                className="   bg-red-300  w-100% uppercase font-extrabold text-lg pl-10 flex items-center"
                style={{ height: "100px" }}
              >
                {obj.title}{" "}
              </span>

              {/* get the width of the parent :  */}

              <ul
                className={`ul_child_linksNav flex flex-col ml-14 bg-yellow-900 text-white space-y-2  `}
                key={index}
              >
                {obj.childes.map((chil, ind) => {
                  return (
                    <Link href={`${chil.link}`} key={ind}>
                      <div
                        className={` bg-white text-black uppercase font-bold text-md  flex items-center ${
                          chil.link == path ? Styles.active : ""
                        }
                          `}
                        style={{ height: `100px` }}
                      >
                        {chil.title}
                      </div>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })
      ) : (
        <div> Loading ..... </div>
      )}
    </nav>
    // <div> hello</div>
  );
};

export default SideMenu;
