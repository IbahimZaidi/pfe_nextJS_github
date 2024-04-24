// import Image from "next/image";

// import Image from "next/image";

"use client";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromSoutenanceHab } from "@/src/lib/features/soutenace_Habili_slice/habiliSlice";
import { useEffect } from "react";

export default function soutenaceHabiliter() {
  const { theDataGlobalHa } = useSelector((store) => store.souHa);

  // call the dispatch function  for the soutencance These :
  const dispatchSoutHab = useDispatch();

  // refres
  useEffect(() => {
    dispatchSoutHab(getDataFromSoutenanceHab());
  }, []);

  useEffect(() => {
    console.log(
      "^^^^^^^^^^^^^^^^^^^^&&&&&&&&&&&&&&&&& the data HHHHHHHHHHHHHHHHHHHHHHHH is : ",
      theDataGlobalHa
    );
  }, [theDataGlobalHa]);
  return (
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from soutenace Habiliter
    </div>
  );
}
