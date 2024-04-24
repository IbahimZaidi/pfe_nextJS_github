// import Image from "next/image";

"use client";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromSoutenance } from "@/src/lib/features/soutenance_these/theseSlice";
import { useEffect, useState } from "react";
import ChildSoutThe from "@/src/SoutenacneChildrenes/ChildSoutThe";
export default function soutenaceThese() {
  const { theDataGlobal } = useSelector((store) => store.souThe);

  // call the dispatch function  for the soutencance These :
  const dispatchSoutThe = useDispatch();

  // refres
  useEffect(() => {
    dispatchSoutThe(getDataFromSoutenance());
  }, []);

  console.log(
    "^^^^^^^^^^^^^^^^^^^^&&&&&&&&&&&&&&&&& the data global ________________________________ is : ",
    theDataGlobal
  );

  return (
    <div className=" bg-green-300  w-90vw grid grid-cols-3 gap-x-10 px-4  justify-center items-center m-auto  border-2 border-black ">
      {theDataGlobal.map((elem, index) => {
        return <ChildSoutThe objectVal={elem} key={index} />;
      })}
    </div>
  );
}
