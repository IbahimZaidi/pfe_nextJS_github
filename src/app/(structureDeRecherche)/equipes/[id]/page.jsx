"use client";
import React, { useEffect, useState } from "react";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";

// this function for the first methode of getting the data without use redux toolkit :
// import { getIdEquipe } from "@/src/helperConnectFunctions/getIdEquipe";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromIdEquipes } from "@/src/lib/features/equipeSlice/equipeSlice";
const EquipeChilId = ({ params }) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@2");
  console.log("this the parameters Child Equipe  :", params);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@2");

  // first methode without using the redux toolkit :
  // // declare the data container :
  // const [theData, setTheData] = useState([]);

  // // insert the data :
  // useEffect(() => {
  //   getIdEquipe(params.id).then((resolve) => {
  //     setTheData(resolve);
  //   });
  // }, []);
  // get the data from the api of equipe/[id_equ]

  // seconde methode using the redux toolkit :

  const dispatchEquiId = useDispatch();

  const { theDataEquiId } = useSelector((store) => store.equipes);

  const [theData, setTheData] = useState([]);
  const [theRespo, setTheRespoEqui] = useState([]);

  // update the data  :

  useEffect(() => {
    dispatchEquiId(getDataFromIdEquipes(params.id));
  }, []);

  useEffect(() => {
    setTheData(theDataEquiId?.equipeElem);
    setTheRespoEqui(theDataEquiId.respoEquipe);
  }, [theDataEquiId]);

  console.log("******************");
  console.log("this the data of all profs  :", theDataEquiId.equipeElem);
  console.log("******************");
  return (
    <div className="container_EquipeId bg-yellow-300 border-2 border-black  w-90vw m-auto flex flex-col gap-y-14">
      <section className="headingH1 ml-10 mt-20 border-2 border-blue-800">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Responsable du Equipe :{" "}
        </h1>
        <div className="basic_div_resp flex flex-col py-10 space-y-10 border justify-between px-12 bg-slate-500  border-black mt-20  ">
          <span>{theRespo ? theRespo[0]?.NomPrenom : ""} </span>
          <span>{theRespo ? theRespo[0]?.E_mail : ""}</span>
        </div>
      </section>

      <section className="bg-green-400 border-2 border-blue ">
        <h1 className={`${Styles.theH1} relative font-extrabold text-4xl `}>
          Les membres :
        </h1>

        <div className="contain_list_Equi  flex flex-col  space-y-6 bg-amber-600  mt-16 py-14 px-4 ">
          <div className="basic_div flex space-x-20 border justify-between px-12 bg-slate-500 h-16 items-center border-black ">
            <span>Nom et Prenom </span>
            <span>Addresse Email </span>
          </div>
          {/* this is the next map loop over the list of the equipes :  */}
          {theData ? (
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
          )}{" "}
        </div>
      </section>
    </div>
  );
};

export default EquipeChilId;
