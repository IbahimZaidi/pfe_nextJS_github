// import Image from "next/image";

// import Image from "next/image";

"use client";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromSoutenanceHabID } from "@/src/lib/features/soutenace_Habili_slice/habiliSlice";
import { useEffect } from "react";

export default function soutenaceHabiliter({ params }) {
  const { theDataIdHa } = useSelector((store) => store.souHa);

  // call the dispatch function  for the soutencance Thes e :
  const dispatchSoutHabId = useDispatch();

  // refres
  useEffect(() => {
    dispatchSoutHabId(getDataFromSoutenanceHabID(params.id));
  }, []);

  useEffect(() => {
    console.log(
      "^^^^^^^^^^^^^^^^^^^^&&&&&&&&&&&&&&&&& the data IIIIIIIIIIDDDDDDDD is : ",
      theDataIdHa
    );
  }, [theDataIdHa]);
  return (
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      {theDataIdHa?.infoHaReponse?.length > 0 &&
      theDataIdHa?.infoJuryProfsNames?.length > 0 ? (
        <>
          <div className="date_Div border-black bg-red-400 flex flex-col w-30% space-y-4 py-4 px-3  ">
            <span className="h-10 bg-blue-200 ">
              {" "}
              {theDataIdHa.infoHaReponse[0]?.day}
            </span>
            <span className="h-10 bg-blue-200 ">
              {theDataIdHa.infoHaReponse[0]?.month}
            </span>
            <span className="h-10 bg-blue-200 ">
              {" "}
              {theDataIdHa.infoHaReponse[0]?.year}
            </span>
            <span className="h-10 bg-blue-200 ">
              {theDataIdHa.infoHaReponse[0]?.hour}
            </span>
          </div>
          <div className="infoGlobalSouThe h-20 flex flex-col flex-1 bg-slate-300">
            <span className="">
              {theDataIdHa.infoHaReponse[0]?.Intitulé_du_travail}
            </span>
            <span className="">{theDataIdHa.infoHaReponse[0]?.NomPrenom}</span>

            <div className="flex flex-col  space-y-2 bg-black">
              {theDataIdHa.infoJuryProfsNames.map((elem, index) => {
                return (
                  <div className="flex  space-x-2 bg-white">
                    <span className="">Monsieur : {elem.NomPrenom}</span>
                    <span className="">Grade : {elem.Grade}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
