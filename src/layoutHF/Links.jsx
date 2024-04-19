"use client";
import React, { useEffect, useState } from "react";

// get the array of childes of formation doctorales from db :

export const formationAxeRecherche = async () => {
  const response = await fetch("http://localhost:3000/api/formation");

  const result = await response.json();

  return result.formDoc;
};

// links :
const arrayLinks = async () => {
  const formationAxeRechercheArray = await formationAxeRecherche();
  console.log(formationAxeRechercheArray);
  const arrayLink = [
    { title: "Accueil", link: "/", childes: [] },
    {
      title: "Structure De Recherche",
      link: "#",
      childes: [
        { title: "laboratoires", link: "/laboratoires" },
        { title: "Equipes", link: "/equipes" },
      ],
    },
    {
      title: "Formation doctorales",
      link: "#",
      childes: formationAxeRechercheArray,
    },
    {
      title: "soutenance",
      link: "#",
      childes: [
        { title: "theses", link: "/theses" },
        { title: "habiliter", link: "/habiliter" },
      ],
    },
    {
      title: "Accrediation",
      link: "#",
      childes: [
        { title: "Accrediation laboratoire", link: "/acclaboratoire" },
        { title: "Accrediation Equipe", link: "/accrEquipe" },
      ],
    },
    { title: "Inscription", link: "/inscription", childes: [] },
  ];
  return arrayLink;
};

const Links = () => {
  console.log("Hello from the Links");

  // declaret and insert the array Links :
  const [arrayLi, setArrayLi] = useState([]);

  useEffect(async () => {
    const arrayL = await arrayLinks().then((resolve) => resolve);
    setArrayLi(arrayL);
  }, []);

  console.log("#################");
  console.log(arrayLi);
  console.log("#################");

  // arrayLinks().then((resolve) => console.log(resolve));
  return (
    <nav className=" border-2 border-red-950 w-80% flex  justify-around">
      {arrayLi.length > 0 ? (
        arrayLi.map((obj, index) => {
          return obj.childes.length == 0 ? (
            <div
              className={`singleLi bg-yellow-300 flex justify-center items-center w-fit px-4 `}
              key={index}
            >
              {obj.title}
            </div>
          ) : (
            <div className="singleLi bg-yellow-300 w-fit px-4 flex justify-center items-center relative">
              <span className="flex justify-center items-center  m-auto bg-red-300">
                {obj.title}{" "}
              </span>

              {/* get the width of the parent :  */}

              <ul className="ul_child_linksNav absolute z-10 bg-yellow-900 text-white  top-100% left-0 flex flex-col  space-y-2 ">
                {obj.childes.map((chil, ind) => {
                  console.log(
                    `${
                      chil.title.length > 13
                        ? `${chil.title.length * 10}px`
                        : "100%"
                    } !important`
                  );
                  return (
                    <div
                      className={`singleLi  text-white text-nowrap `}
                      style={{
                        width: `${
                          chil.title.length > 13 ? "fit-conetent" : "100%"
                        } `,
                      }}
                      key={ind}
                    >
                      {chil.title}
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })
      ) : (
        <div> Loading ..... </div>
      )}
    </nav>
  );
};

export default Links;
