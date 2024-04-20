// import Image from "next/image";

"use client";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";

import { useEffect, useState } from "react";

// function get the Equipes and labo tables from the database :
import { getLaboAndEquipes } from "../helperConnectFunctions/getLaboAndEquipes";

// function get the formation table from the database :
import { formationAxeRecherche } from "../layoutHF/Links";

// import the Parent of childes layer :

import ParentLayerOfChildes from "./AcceilChildesComponentsLoop/ParentLayerOfChildes";
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

  // // get the value from the info from the store :
  // const { laboTable } = useSelector((store) => store.labo);

  // console.log("Hello this the table from the store : ", laboTable);

  return (
    <main className=" bg-green-300 pb-20 w-90vw flex flex-col space-y-20 items-start m-auto   ">
      <section className="headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Centre d' Etude Doctorales{" "}
        </h1>
      </section>

      <section className="headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1
          className={`${Styles.theH1} relative font-extrabold text-4xl `}
        ></h1>
      </section>

      {/* first section of labo :  */}

      <ParentLayerOfChildes theArray={arrayLabo}>
        {arrayLabo.length > 0 ? (
          arrayLabo.map((elem, index) => {
            return <ChildLabo objectVal={elem} key={index} />;
          })
        ) : (
          <div> is loading ..... </div>
        )}
      </ParentLayerOfChildes>

      {/* seconde section of equipes :  */}

      <ParentLayerOfChildes theArray={arrayEquipes}>
        {arrayEquipes.length > 0 ? (
          arrayEquipes.map((elem, index) => {
            return <ChildEquipe objectVal={elem} key={index} />;
          })
        ) : (
          <div> is loading ..... </div>
        )}
      </ParentLayerOfChildes>

      {/* third section of Axe de recheche like in the header nav links  :  */}

      <ParentLayerOfChildes theArray={arrayFormation}>
        {arrayFormation.length > 0 ? (
          arrayFormation.map((elem, index) => {
            return <ChildFormation title={elem.title} key={index} />;
          })
        ) : (
          <div> is loading ..... </div>
        )}
      </ParentLayerOfChildes>
    </main>
  );
}
