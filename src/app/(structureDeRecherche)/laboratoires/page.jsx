// import Image from "next/image";

"use client";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromLabo } from "@/src/lib/features/laboSlice/laboSlice";
import { useEffect } from "react";
import LaboChileSR from "@/src/SRChildreen/LaboChileSR";

export default function StructureRechLabo() {
  const { theDataLabo } = useSelector((store) => store.labo);

  // call the dispatch function  :

  const dispatchLabo = useDispatch();

  // refres
  useEffect(() => {
    dispatchLabo(getDataFromLabo());
  }, []);

  // cheak the data first :

  console.log(theDataLabo);

  return (
    <main className="bg-yellow-400 pt-10 pl-20 ">
      <section className=" headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Laboratoires :{" "}
        </h1>

        <div className="container_childreen grid grid-cols-2 gap-x-3 gap-y-3 p-20">
          {theDataLabo.map((elem) => {
            return <LaboChileSR objectVal={elem} />;
          })}
        </div>
      </section>
    </main>
  );
}
