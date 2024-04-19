"use client";
import React, { useEffect, useState } from "react";
import Styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// get the array of childes of formation doctorales from db :

export const formationAxeRecherche = async () => {
  const response = await fetch("http://localhost:3000/api/formation");

  const result = await response.json();

  return result.formDoc;
};

// links :
export const arrayLinks = async () => {
  const formationAxeRechercheArray = await formationAxeRecherche();
  // console.log(formationAxeRechercheArray);
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
  // declaret and insert the array Links :
  const [arrayLi, setArrayLi] = useState([]);

  useEffect(async () => {
    const arrayL = await arrayLinks().then((resolve) => resolve);
    setArrayLi(arrayL);
  }, []);

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

  // the path variable for active purpus :

  const path = usePathname();

  // console.log(path);

  // arrayLinks().then((resolve) => console.log(resolve));
  return (
    <nav className=" border-2 border-red-950 w-80vw  hidden lg:flex h-100%  justify-between ">
      {arrayLi.length > 0 ? (
        arrayLi.map((obj, index) => {
          return obj.childes.length < 1 ? (
            <Link href={obj.link} key={index}>
              <div
                className={`singleLi bg-yellow-300 flex justify-center items-center px-1 lg:px-2 xl:px-3 2xl:px-4 h-100% ${
                  obj.link == path ? Styles.active : ""
                }`}
                style={{
                  width: `${
                    obj.title.length < 12
                      ? 10
                      : obj.title.length >= 12 && obj.title.length < 16
                      ? 10
                      : obj.title.length - 15
                  }vw`,
                }}
              >
                {obj.title}
              </div>
            </Link>
          ) : (
            <div
              className={`singleLi bg-yellow-300 w-fit px-4 flex justify-center items-center relative h-100%   ${
                obj.childes.find((elem) => elem.link == path)
                  ? Styles.active
                  : ""
              }`}
              style={{
                width: `${
                  obj.title.length < 12
                    ? 10
                    : obj.title.length >= 12 && obj.title.length < 16
                    ? 10
                    : obj.title.length - 8
                }vw`,
                position: "relative", // Ensure the parent div has relative positioning
              }}
              key={index}
              onMouseEnter={(e) => {
                // console.log("hello");
                onEnterMouseLi(e);
              }}
              onMouseLeave={(e) => {
                // console.log("hello");
                onLeaveMouseLi(e);
              }}
            >
              <span className="flex justify-center items-center  m-auto bg-red-300 h-100% w-100%">
                {obj.title}{" "}
              </span>

              {/* get the width of the parent :  */}

              <ul
                className={`ul_child_linksNav absolute z-10 bg-yellow-900 text-white  top-100% left-0 hidden `}
                // style={{ left: "-0.10rem" }}
                style={{
                  left: `${
                    obj.childes.find((elem) => elem.link == path)
                      ? "-0.0625rem"
                      : ""
                  }`,
                }}
                key={index}
              >
                {/* {console.log("________________")}
                {console.log(obj.childes)}
                {console.log("*****************")} */}

                {obj.childes.map((chil, ind) => {
                  // console.log(chil.link);
                  return (
                    <Link href={`${chil.link}`} key={ind}>
                      <div
                        className={`  text-white text-nowrap`}
                        style={{
                          width: `${
                            obj.childes[0].title.length <= obj.title.length
                              ? `${
                                  obj.title.length < 12
                                    ? 10
                                    : obj.title.length >= 12 &&
                                      obj.title.length < 16
                                    ? 10
                                    : obj.title.length - 8
                                }vw`
                              : "fit-content"
                          }`,
                        }}
                      >
                        {chil.title}
                      </div>
                    </Link>
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
