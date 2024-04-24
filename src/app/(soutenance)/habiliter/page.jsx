// import Image from "next/image";

// import Image from "next/image";

"use client";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromSoutenanceHab } from "@/src/lib/features/soutenace_Habili_slice/habiliSlice";
import { useEffect } from "react";

import ChildSoutHabilite from "@/src/SoutenacneChildrenes/ChildSoutHabiliter";

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
    <div className=" bg-green-300  w-90vw grid grid-cols-3 gap-x-10 px-4  justify-center items-center m-auto  border-2 border-black ">
      {theDataGlobalHa.map((elem, index) => {
        return <ChildSoutHabilite objectVal={elem} key={index} />;
      })}
    </div>
  );
}
