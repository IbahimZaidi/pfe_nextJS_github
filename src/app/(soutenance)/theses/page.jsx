// import Image from "next/image";

"use client";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromSoutenance } from "@/src/lib/features/soutenance_these/theseSlice";
import { useEffect, useState } from "react";
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
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from soutenace theses
    </div>
  );
}
