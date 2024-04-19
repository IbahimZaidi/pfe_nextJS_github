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

  // declare the toggle value :

  const [toggleVal, setToggleVal] = useState(false);

  // function handle the hover :

  const onLeaveMouseLi = (e) => {
    e.currentTarget.classList.contains("onHovLink")
      ? e.currentTarget.classList.remove("onHovLink")
      : "";
  };
  const onEnterMouseLi = (e) => {
    e.currentTarget.classList.contains("onHovLink")
      ? e.currentTarget.classList.remove("onHovLink")
      : "";
    e.currentTarget.classList.add("onHovLink");
  };

  // arrayLinks().then((resolve) => console.log(resolve));
  return (
    <nav className=" border-2 border-red-950 w-80vw flex  justify-around">
      {arrayLi.length > 0 ? (
        arrayLi.map((obj, index) => {
          return obj.childes.length == 0 ? (
            <div
              className={`singleLi bg-yellow-300 flex justify-center items-center px-4 `}
              key={index}
              style={{
                width: `${
                  obj.title.length < 12
                    ? 6
                    : obj.title.length >= 12 && obj.title.length < 16
                    ? 8
                    : obj.title.length - 8
                }vw`,
              }}
            >
              {obj.title}
            </div>
          ) : (
            <div
              className="singleLi bg-yellow-300 w-fit px-4 flex justify-center items-center relative"
              style={{
                width: `${
                  obj.title.length < 12
                    ? 6
                    : obj.title.length >= 12 && obj.title.length < 16
                    ? 8
                    : obj.title.length - 8
                }vw`,
              }}
              key={index}
              onMouseEnter={(e) => {
                console.log("hello");
                onEnterMouseLi(e);
              }}
              onMouseLeave={(e) => {
                console.log("hello");
                onLeaveMouseLi(e);
              }}
            >
              <span className="flex justify-center items-center  m-auto bg-red-300">
                {obj.title}{" "}
              </span>

              {/* get the width of the parent :  */}

              <ul
                className={`ul_child_linksNav absolute z-10 bg-yellow-900 text-white  top-100% left-0 hidden `}
              >
                {console.log("________________")}
                {console.log(obj.childes[0].title.length)}
                {console.log("*****************")}

                {obj.childes.map((chil, ind) => {
                  return (
                    <div
                      className={`singleLi  text-white text-nowrap `}
                      style={{
                        width: `${
                          obj.childes[0].title.length <= obj.title.length
                            ? `${
                                obj.title.length < 12
                                  ? 6
                                  : obj.title.length >= 12 &&
                                    obj.title.length < 16
                                  ? 8
                                  : obj.title.length - 8
                              }vw`
                            : "fit-content"
                        }`,
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
