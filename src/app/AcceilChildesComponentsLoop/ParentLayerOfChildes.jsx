import React from "react";
import Styles from "@/src/layoutUnderHeader/underHeader.module.css";

const ParentLayerOfChildes = ({ theArray, children }) => {
  return (
    <section className="equipeDev py-20 border-2 border-red-600 h-90% w-90% m-auto flex flex-col space-y-4 pl-10 pr-2 ">
      <h1 className={`${Styles.theH2}  font-extrabold text-4xl `}>
        Le centre d' Etude doctorales de FPBM se compose de{" "}
        {theArray.length > 0 ? theArray.length : "loading ......"} Equipes :
      </h1>

      {children}
    </section>
  );
};

export default ParentLayerOfChildes;
