"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataFromLabo } from "@/src/lib/features/laboSlice/laboSlice"; // Import the function to use it with dispatch

import { getDataFromEquipes } from "@/src/lib/features/equipeSlice/equipeSlice";
export default function Inscription() {
  const { testTable, theData } = useSelector((store) => store.equipes);

  // you need dispatch to called the functions of the store slice :
  const dispatch = useDispatch();

  useEffect(() => {
    // this is to run the getDataFromLabo() function to fetch data and put it inside theData variable :
    dispatch(getDataFromEquipes());
  }, []);

  useEffect(() => {
    // Log the updated values of theData and testTable
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", theData, testTable);
  }, [theData, testTable]);

  return (
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from Inscription :
    </div>
  );
}
