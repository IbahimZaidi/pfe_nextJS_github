// import Image from "next/image";

"use client";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromEquipes } from "@/src/lib/features/equipeSlice/equipeSlice";

import { useEffect } from "react";
import EquipesChileSR from "@/src/SRChildreen/EquipesChileSR";
export const StructureRechEqui = () => {
  const { theDataEqui } = useSelector((store) => store.equipes);

  // call the dispatch function  :

  const dispatchEqui = useDispatch();

  // refres
  useEffect(() => {
    dispatchEqui(getDataFromEquipes());
  }, []);

  // cheak the data first :

  console.log(theDataEqui);

  return (
    <main className="bg-yellow-400 pt-10 pl-20 ">
      <section className=" headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Equipes :{" "}
        </h1>

        <div className="container_childreen grid grid-cols-2 gap-x-3 gap-y-3 p-20">
          {theDataEqui.map((elem) => {
            return <EquipesChileSR objectVal={elem} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default StructureRechEqui;
