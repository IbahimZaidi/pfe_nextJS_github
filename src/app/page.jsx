// import Image from "next/image";

"use client";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";

import { useEffect, useState } from "react";

// function get the Equipes and labo tables from the database :
import { getLaboAndEquipes } from "../helperConnectFunctions/getLaboAndEquipes";

// function get the formation table from the database :
import { formationAxeRecherche } from "../layoutHF/Links";

// import childes Components :
import ChildLabo from "./AcceilChildesComponentsLoop/ChildLabo";
import ChildEquipe from "./AcceilChildesComponentsLoop/ChildEquipe";
import ChildFormation from "./AcceilChildesComponentsLoop/ChildFormation";

// start the main component Acceuil of the index page :

export default function Acceuil() {
  const [arrayLabo, setArrayLabo] = useState([]);
  const [arrayEquipes, setArrayEqui] = useState([]);
  const [arrayFormation, setArrayFromation] = useState([]);

  // insert values of resolve promise from database concerne labo and equipes :
  useEffect(() => {
    getLaboAndEquipes().then((resolve) => {
      setArrayLabo(resolve.laboTabl);
      setArrayEqui(resolve.equipeTabl);
    });
  }, []);

  // insert values of names of axes de recherche from database into arrays :
  useEffect(() => {
    formationAxeRecherche().then((resolve) => {
      setArrayFromation(resolve);
    });
  }, []);

  return (
    <main className=" bg-green-300 pb-20 w-90vw flex flex-col space-y-20 items-start m-auto   ">
      <section className="headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Centre d' Etude Doctorales{" "}
        </h1>
      </section>

      {/* first section of labo :  */}

      <section className="laboDiv py-20 border-2 border-red-600 h-90% w-90% m-auto flex flex-col space-y-4 pl-10 pr-2 ">
        <h1 className={`${Styles.theH2}  font-extrabold text-4xl `}>
          Le centre d' Etude doctorales de FPBM se compose de{" "}
          {arrayLabo.length > 0 ? arrayLabo.length : "loading ......"}{" "}
          laboratoires :
        </h1>

        {arrayLabo.length > 0 ? (
          arrayLabo.map((elem, index) => {
            return <ChildLabo objectVal={elem} key={index} />;
          })
        ) : (
          <div> is loading ..... </div>
        )}
      </section>

      {/* seconde section of equipes :  */}

      <section className="equipeDev py-20 border-2 border-red-600 h-90% w-90% m-auto flex flex-col space-y-4 pl-10 pr-2 ">
        <h1 className={`${Styles.theH2}  font-extrabold text-4xl `}>
          Le centre d' Etude doctorales de FPBM se compose de{" "}
          {arrayEquipes.length > 0 ? arrayEquipes.length : "loading ......"}{" "}
          Equipes :
        </h1>

        {arrayEquipes.length > 0 ? (
          arrayEquipes.map((elem, index) => {
            return <ChildEquipe objectVal={elem} key={index} />;
          })
        ) : (
          <div> is loading ..... </div>
        )}
      </section>

      {/* third section of Axe de recheche like in the header nav links  :  */}

      <section className=" py-20 border-2 border-red-600 h-90% w-90% m-auto flex flex-col space-y-4 pl-10 pr-2 ">
        <h1 className={`${Styles.theH2}  font-extrabold text-4xl `}>
          Le centre d' Etude doctorales de FPBM se compose de
          {arrayFormation.length > 0
            ? ` ${arrayFormation.length} `
            : "loading ......"}
          Formations :
        </h1>

        {arrayFormation.length > 0 ? (
          arrayFormation.map((elem, index) => {
            return <ChildFormation title={elem.title} key={index} />;
          })
        ) : (
          <div> is loading ..... </div>
        )}
      </section>
    </main>
  );
}
