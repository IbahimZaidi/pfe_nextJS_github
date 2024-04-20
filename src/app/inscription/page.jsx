"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataFromLabo } from "@/src/lib/features/laboSlice/laboSlice"; // Import the action creator

export default function Inscription() {
  const { testTable, theData } = useSelector((store) => store.labo);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", theData, testTable);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to fetch data whenever theData or testTable changes
    dispatch(getDataFromLabo());
  }, []); // Include dispatch, theData, and testTable in the dependency array

  useEffect(() => {
    // Log the updated values of theData and testTable
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", theData, testTable);
  }, [theData, testTable]); // Include both theData and testTable in the dependency array

  return (
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from Inscription :
    </div>
  );
}
