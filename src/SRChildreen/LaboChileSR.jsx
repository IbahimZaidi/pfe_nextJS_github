import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LaboChileSR = ({ objectVal }) => {
  console.log("this is the objectVal : ", objectVal);
  const path = usePathname();
  return (
    <div className="border-2 border-black   h-400px w-600px p-3  bg-slate-400 flex flex-col space-y-3">
      <img
        src={
          objectVal.image
            ? objectVal.image
            : "/images&figures/default_image.jpg"
        }
        alt=""
        className=" w-100% h-80%  "
      />

      <span className="border border-black  ms-0">
        {objectVal.Intitulé} ({objectVal.Acronyme})
      </span>

      <Link
        href={`${path}/${objectVal.id_labo}`}
        className=" bg-amber-300 p-3 flex justify-center items-center rounded-sm w-15% h-15% "
      >
        consulter
      </Link>
    </div>
  );
};

export default LaboChileSR;
