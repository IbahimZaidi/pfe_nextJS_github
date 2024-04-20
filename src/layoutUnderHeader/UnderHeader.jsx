"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Styles from "./underHeader.module.css";

import { arrayLinks } from "../layoutHF/Links";
import { resolve } from "styled-jsx/css";
const UnderHeader = ({ request }) => {
  const [arrayH1, setArrayH1] = useState([]);

  // array of the underHeader h1 values :
  useEffect(() => {
    arrayLinks().then((resolve) => {
      const newArray = [];
      resolve.map((elem) => {
        if (elem.childes.length == 0) {
          newArray.push({ id: elem.link, name: elem.title });
        } else {
          elem.childes.map((chil) => {
            newArray.push({ id: chil.link, name: chil.title });
          });
        }
      });

      setArrayH1(newArray);
    });
  }, []);

  // the variable contain the pathName :
  //   const [pathName, setThePathName] = useState("");

  // this the state contain the name of the H1
  const [titleH1, setTitleH1] = useState("");

  const path = usePathname();

  useEffect(() => {
    const objectArray = arrayH1.find((elm) => elm.id === path);
    setTitleH1(objectArray?.name);
  }, [path, arrayH1]); // control the re-rendering

  return (
    <div className="bg-white h-300px w-90vw m-auto text-black mt-24 overflow-hidden border-2 border-black relative">
      <img
        src="/images&figures/div_div.jpg"
        alt=""
        className="w-100% h-500px  absolute top-0 left-0"
      />
      <div
        className=" absolute z-10 w-60% h-60% flex flex-col space-y-6 left-10% top-20% border-2 border-red-600 pt-10 pl-8  "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3);" }}
      >
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl`}>
          {" "}
          {!titleH1 ? "loading ...... " : titleH1}
        </h1>
        <p className="font-bold text-xl "> CEDoc "Fpbm" </p>
      </div>
    </div>
  );
};

export default UnderHeader;
