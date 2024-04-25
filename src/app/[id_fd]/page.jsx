// import Image from "next/image";

"use client";
import { getIdLabo } from "@/src/helperConnectFunctions/getIdLabo";
import { getLaboFromId } from "@/src/helperConnectFunctions/getLaboFromId";
import { getDataFromFormationId } from "@/src/lib/features/formationSliceId/formationSliceId";
import { store } from "@/src/lib/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChildFormationAxe({ params }) {
  // function in the redux to get the data : SELECT * FROM suject_poposee WHERE id_labo in (SELECT DISTINCT(id_labo) FROM suject_poposee WHERE id_labo in (SELECT id_labo FROM laboratoire WHERE id_formation  = 3 ));

  //getDataFromFormationId
  const { theDataFormId } = useSelector((store) => store.formationId);

  // dispatch :

  const dispatchFI = useDispatch();

  // update the data using the function of the dispatch :
  useEffect(() => {
    dispatchFI(getDataFromFormationId(params.id_fd));
  }, []);

  console.log(
    "this is the data from the formation Id : ",
    params.id_fd,
    "=> : ",
    theDataFormId
  );
  // you need to devise the result on arrays , each array have only lab_id , then loop over each laboratoire :

  // steps :

  // 1/ get all id_labo , without repetitions with removing the repetition : ,

  let allLaboIdInResult = [];

  useEffect(() => {
    theDataFormId.map((elem) => {
      if (!allLaboIdInResult.includes(elem?.id_labo)) {
        allLaboIdInResult.push(elem?.id_labo);
      }
    });
  }, [theDataFormId]);

  // store the value of the allLbo when he have the length > 0 ;
  const [versionLabo, sertVersionLabo] = useState([]);
  useEffect(() => {
    console.log(
      "this is the final allLabo &^^^^^^^^_____________________________________^^^^^^^^^^^^^^^^^^^**** MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmm",
      allLaboIdInResult
    );

    allLaboIdInResult.length > 0 ? sertVersionLabo(allLaboIdInResult) : "";
    // seconde code :
  }, [allLaboIdInResult]);

  // test the val of the versionLabo :

  useEffect(() => {
    console.log(
      "E##EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE version value ",
      versionLabo
    );
  }, [versionLabo]);

  // test the getIdLabo function :

  const [resultTablesId, setResultTable] = useState([]);

  useEffect(() => {
    allLaboIdInResult.length > 0
      ? allLaboIdInResult?.map((elem) => {
          getLaboFromId(elem).then((resolve) => {
            console.log(
              "#################################################### ??? element ",
              resolve
            );
            setResultTable((prev) => {
              return [...prev, resolve];
            });
          });
        })
      : "";
  }, [allLaboIdInResult]);

  // remove the old values :
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const newFilterArray = resultTablesId.filter((elem) => {
      // console.log(
      //   "########################################################################### ======> TTTTTTTTTTT :  ",
      //   // elem,
      //   // allLaboIdInResult.includes(elem.id_labo),
      //   // elem.id_labo,
      //   // allLaboIdInResult.includes(6),
      //   allLaboIdInResult
      // );
      return versionLabo.length > 0 ? versionLabo.includes(elem.id_labo) : "";
    });
    setFilterData(newFilterArray);
  }, [resultTablesId, versionLabo]);

  useEffect(() => {
    console.log(
      "########################################################################### ======> table filter ",
      filterData
    );
  }, [filterData]);
  // declare the array contain the labo info :

  // make a loop over the allLaboIdInResult array contain the id's of the id of the tables in the result :

  //    ****************************************************************************************************************
  // ****************************************************************************************************************

  // useEffect(() => {
  //   console.log(
  //     "this is the value of the arrayLaboIdInfo_______________________________ _________________________________  ",
  //     arrayLaboIdInfo
  //   );
  // }, [arrayLaboIdInfo]);
  // setArraysLabo([]);
  //   allLaboIdInResult.length > 0 && arraysLabo.length == 0
  //   ? allLaboIdInResult?.map((elem, index) => {
  //       // console.log(
  //       //   "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH **********************************************, this is the value return from the all arrays : ",
  //       //   elem
  //       // );

  //       // insert the data get from the labo with id : elem like this :

  //       getIdLabo(elem).then((resolve) => {
  //         setArraysLabo((prev) => {
  //           return [...prev, ...resolve.laboElem];
  //         });
  //       });
  //     })
  //   : "";

  // arraysLabo info :
  // const [arraysLabo, setArraysLabo] = useState([]);
  // let arraysLabo = [];

  // useEffect(() => {
  //   console.log("hello from the re-rendering useEffect : ");

  //   allLaboIdInResult?.length > 0 && arraysLabo?.length == 0
  //     ? allLaboIdInResult?.map((elem, index) => {
  //         // console.log(
  //         //   "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH **********************************************, this is the value return from the all arrays : ",
  //         //   elem
  //         // );
  //         // insert the data get from the labo with id : elem like this :
  //         getIdLabo(elem).then((resolve) => {
  //           arraysLabo.push([...resolve.laboElem]);
  //         });

  //         console.log(
  //           "hello from the loop of the allLaboIdInResult ################################",
  //           elem,
  //           arraysLabo
  //         );
  //       })
  //     : "";
  // }, [allLaboIdInResult]);
  // 2/ do loop over the number each select the suject_poposer for each id_lab , and each id_labo get the name of labo and acronyme :

  // i have array of labo id's , so i have to use api for fetching data (labo_name , Acronyme) based on the id's  ,
  //(the other data will fetch with condition of id_labo inside result of the sujet proposer ):

  // declare the container of the arrays of tables labo :
  // a/ get the name of labo and acronyme

  // affiche the data of the arraysLabo :
  // useEffect(() => {
  //   console.log(
  //     "################################_____________________ this is the new value of the arrayof labo : ",
  //     arraysLabo
  //   );
  // }, [arraysLabo]);

  // b/ final stage of loop over result of sujet_proposer base on id_labo inside the array :

  return (
    <div className=" bg-blue-500 w-90vw flex min-h-90vh  flex-col justify-center items-center m-auto ">
      {/* Hello from the id : {params.id_fd} */}
      {filterData.length > 0 ? (
        filterData.map((elem, ind) => {
          return (
            <div
              className=" flex flex-col space-y-10 border-4 border-red-700 m-5 w-80%  bg-yellow-500"
              key={ind}
            >
              <span className="bg-green-400 border border-blue-700 p-10">
                Suject propose by :{" "}
                <span className=" text-white"> {elem.Acronyme}</span>
              </span>
              {theDataFormId.map((element, index) => {
                if (element.id_labo == elem.id_labo) {
                  return (
                    <div
                      className="border-2 flex flex-col space-y-3 m-4  border-black"
                      key={index}
                    >
                      {" "}
                      <span className="bg-blue-400 h-16">
                        {element.directeure_du_these}
                        {" : "}
                      </span>
                      <span className="bg-red-400 h-20">
                        {element.Intitulé_sujet}{" "}
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          );
        })
      ) : (
        <div className=" block text-3xl "> is Loading ......... </div>
      )}
    </div>
  );
}
