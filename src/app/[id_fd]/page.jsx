// import Image from "next/image";

"use client";
import { getDataFromFormationId } from "@/src/lib/features/formationSliceId/formationSliceId";
import { store } from "@/src/lib/store";
import { useEffect } from "react";
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
  return (
    <div className=" bg-blue-500 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from Axe de recherche : {params.id_fd}
    </div>
  );
}
