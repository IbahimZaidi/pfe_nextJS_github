"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Styles from "./underHeader.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// import funcitons of getting the data :
import { getDataFromEquipes } from "../lib/features/equipeSlice/equipeSlice";
import { getDataFromLabo } from "../lib/features/laboSlice/laboSlice";

import { arrayLinks } from "../layoutHF/Links";
const UnderHeader = () => {
  const [arrayH1, setArrayH1] = useState([]);

  // get the arrayEquipes and arrayLabo using reduxTolkit :
  const dispatchLabo = useDispatch();
  const dispatchEqui = useDispatch();
  const { theDataLabo } = useSelector((store) => store.labo);
  const { theDataEqui } = useSelector((store) => store.equipes);

  // refresh the data in equipes and labo :
  useEffect(() => {
    dispatchEqui(getDataFromEquipes());
    dispatchLabo(getDataFromLabo());
  }, []);

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

      // push other elements of the laboratoires and equipes Names base on the path value :

      console.log("SSSSSSSSSSSSS", newArray);

      // add the final array
      // setArrayH1([...arrayH1, ...newArray]);
      setArrayH1((prevArrayH1) => [...prevArrayH1, ...newArray]);
    });
  }, []);

  // push the data from the labo and equipes tables and make the array of the dependecies of the states with the dataEquipe and the dataLabo :

  // declare cheak :

  const [cheakEquipe, setCheakEquipe] = useState(false);
  const [cheakLabo, setCheakLabo] = useState(false);

  // the data of the labo :
  useEffect(() => {
    if (!cheakLabo) {
      console.log("YYYYYYYYYYYYYYYYYYYYYYY cheak Labo ", cheakLabo);
      const newArrayHay = [];

      // push  the data of the labo  table this time :

      theDataLabo.map((elem) => {
        // push all data from the labo inside the newArray

        // cheak first if aleady exist :

        newArrayHay.push({
          id: `/laboratoires/${elem.id_labo}`,
          name: elem.Acronyme,
          desc: elem.Intitulé,
        });
      });

      // change the cheak to true :
      newArrayHay.length > 0 ? setCheakLabo(true) : "";

      // this cheak length > 0 for cheaking the data loaded in the newArrayHay or not :
      newArrayHay.length > 0
        ? setArrayH1((prevArrayH1) => [...prevArrayH1, ...newArrayHay])
        : "";
    }
  }, [theDataLabo]);

  // use Effect of the Equipes :

  useEffect(() => {
    console.log(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! cheak Equipe : ",
      cheakEquipe
    );
    if (!cheakEquipe) {
      const newArrayHay = [];
      // push first the data of the equipes table :
      theDataEqui.map((elem) => {
        // push all data from the equipe inside the newArray

        newArrayHay.push({
          id: `/equipes/${elem.id_Equipe}`,
          name: elem.Acronyme,
          desc: elem.Intitulé,
        });
      });
      // change the cheak to true :
      newArrayHay.length > 0 ? setCheakEquipe(true) : "";
      console.log(
        "YYYYYYYYYYYYYYYYYYYYYYY cheak Equipe  ",
        cheakEquipe,
        newArrayHay
      );

      // this cheak length > 0 for cheaking the data loaded in the newArrayHay or not :
      newArrayHay.length > 0
        ? setArrayH1((prevArrayH1) => [...prevArrayH1, ...newArrayHay])
        : "";
    }
  }, [theDataEqui]);

  // this is for the console log info :

  useEffect(() => {
    console.log(
      "this is the the arrayH1############## : ",
      arrayH1,
      "cheak Equipe ",
      cheakEquipe,
      "cheak labo ",
      cheakLabo
    );
  }, [arrayH1, theDataEqui, theDataLabo]);
  // useEffect(() => {
  //   console.log("this is the final newArray before the setArrayH1");
  // }, [arrayH1]);

  // the variable contain the pathName :
  //   const [pathName, setThePathName] = useState("");

  // declare the object contains object value :
  const [objectArray, setOjbectArray] = useState({});

  // this the state contain the name of the H1
  const [titleH1, setTitleH1] = useState("");

  const path = usePathname();

  useEffect(() => {
    setOjbectArray(arrayH1.find((elm) => elm.id === path));
  }, [path, arrayH1]); // control the re-rendering

  // the titleH1 is changing base on the change of the objectArray :

  useEffect(() => {
    setTitleH1(objectArray?.name);
  }, [objectArray]);
  // cheak the value of the object :
  useEffect(() => {
    console.log("________________________");
    console.log(objectArray);
    console.log(titleH1);
    console.log("________________________");
  }, [objectArray, titleH1]);
  // cheak first the params() is empty or not :

  console.log(
    " this is the parameters : ",
    path.split("/")[1],
    path.split("/")[2]
  );

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

        {objectArray?.desc ? (
          <p className=" text-blue-400">{objectArray.desc} </p>
        ) : (
          <p> CEDoc "Fpbm" </p>
        )}
      </div>
    </div>
  );
};

export default UnderHeader;
