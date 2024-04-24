import Link from "next/link";
import React from "react";

const ChildSoutHabilite = ({ objectVal }) => {
  console.log("hello from the childe compoennt : ", objectVal);
  return (
    <Link
      href={`/habiliter/${objectVal.id_sout_abi}`} // you have to chnage this only ;
      className=" bg-yellow-300 border-2 border-red-500 flex "
    >
      <div className="date_Div border-black bg-yellow-400 h-20 flex flex-col w-30% ">
        <span className=""> {objectVal.day}</span>
        <span className="">{objectVal.month}</span>
      </div>
      <div className="infoGlobalSouThe h-20 flex flex-col flex-1">
        <span className="">{objectVal.Intitulé_du_travail}</span>
        <span className="">{objectVal.NomPrenom}</span>
      </div>
    </Link>
  );
};

export default ChildSoutHabilite;
