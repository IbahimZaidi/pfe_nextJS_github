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
      Hello from soutenace theses
    </div>
  );
}
