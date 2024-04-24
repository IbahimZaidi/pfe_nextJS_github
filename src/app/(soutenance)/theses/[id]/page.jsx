// import Image from "next/image";

"use client";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromSoutenanceID } from "@/src/lib/features/soutenance_these/theseSlice";
import { useEffect } from "react";
export default function soutenaceThese({ params }) {
  const { theDataId } = useSelector((store) => store.souThe);

  // call the dispatch function  for the soutencance These :
  const dispatchSoutTheId = useDispatch();

  // refres
  useEffect(() => {
    dispatchSoutTheId(getDataFromSoutenanceID(params.id));
  }, []);

  useEffect(() => {
    console.log(
      "^^^^^^^^^^^^^^^^^^^^&&&&&&&&&&&&&&&&& the data IIIIIIIIIIDDDDDDDD is : ",
      theDataId
    );
  }, [theDataId]);
  return (
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from soutenace theses
    </div>
  );
}
