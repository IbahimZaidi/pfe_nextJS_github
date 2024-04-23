"use client";
import React from "react";

import { getIdLabo } from "@/src/helperConnectFunctions/getIdLabo";
import { useState, useEffect } from "react";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";

const LaboChileId = ({ params }) => {
  // first methode without using the redux toolkit :
  // declare the data container :
  const [theData, setTheData] = useState([]);
  const [theRespo, setTheRespoLabo] = useState({});

  // insert the data :
  // get the data from the api of equipe/[id_equ]
  useEffect(() => {
    getIdLabo(params.id).then((resolve) => {
      setTheData(resolve.laboElem);
      setTheRespoLabo(resolve.laboResp);
    });
  }, []);

  // cheak the data :
  console.log("^^^^^^^^^^^^^^^^^^^^^ the data of labbooooboo : ", theRespo);

  console.log("this the parameters Child Labo :", params);
  return (
    <div className="container_EquipeId bg-yellow-300 border-2 border-black  w-90vw m-auto flex flex-col gap-y-14">
      <section className="headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Responsable du Laboratoire :{" "}
        </h1>

        <div className="basic_div_resp flex flex-col py-10 space-y-10 border justify-between px-12 bg-slate-500  border-black mt-20  ">
          <span>{theRespo ? theRespo[0]?.NomPrenom : ""} </span>
          <span>{theRespo ? theRespo[0]?.E_mail : ""} </span>
        </div>
      </section>

      <section className="bg-green-400 border-2 border-blue  ">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Les membres :
        </h1>

        <div className="contain_list_Equi  flex flex-col  space-y-6 bg-amber-600  mt-16 py-14 px-4 ">
          <div className="basic_div">
            <span>Nom et Prenom </span>
            <span>Addresse Email </span>
          </div>

          {/* this is the next map loop over the list of the equipes :  */}

          {theData.length > 0 ? (
            theData.map((elem, index) => {
              return (
                <div
                  className="child_loop_div flex space-x-20 border justify-between px-12 border-blue-500 items-center bg-slate-500 h-16"
                  key={index}
                >
                  <span>{elem.NomPrenom}</span>
                  <span>{elem.E_mail} </span>
                </div>
              );
            })
          ) : (
            <div> Loading ........ </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LaboChileId;
