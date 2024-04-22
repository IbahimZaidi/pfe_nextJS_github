import React from "react";

const ChildLabo = ({ objectVal }) => {
  // console.log("this is object : ", objectVal);
  return (
    <div className=" border-s-8 border-2 border-red-800 pl-3 py-2 text-lg font-serif font-bold">
      {objectVal.Intitulé}(
      <span className="text-blue-500"> {objectVal.Acronyme}</span>)
    </div>
  );
};

export default ChildLabo;
