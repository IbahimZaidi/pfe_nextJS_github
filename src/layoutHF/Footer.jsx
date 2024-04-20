import React from "react";

import "./footer.css";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <>
      <footer
        id="footer_id"
        className="px-7 flex flex-col  justify-between lg:items-center bg-black  pt-10 lg:flex-row space-y-4 lg:space-x-4 pb-6 "
      >
        {/* <!-- div history About fpbm  --> */}

        <div className="About-us  justify-between  w-35% px-3 py-2 bg-green-500 rounded-md h-200px hidden 2xl:flex ">
          <img
            src="/images&figures/fplogo_2.png"
            alt="error"
            className="About-us1 w-20% h-90% "
          />
          <div className="About-us2 flex-1 text-sm pl-3 mt-7">
            La Faculté polydisciplinaire de Béni Mellal « FPD » est un
            établissement public d'enseignement Supérieur, crée en Septembre
            2003 (avec la mise en place de la réforme universitaire.)les
            formation proposées par ce dernier s’inscrivent dans le cadre de la
            mise en œuvre de la réforme de l’enseignement supérieur. Il a pour
            vocation de répondre aux besoins de la région Tadla-Azilal en
            matière de formation Universitaires.
          </div>
        </div>

        <div
          className="sec border-2 border-white w-90% lg:w-25% 2xl:w-14%  h-200px"
          style={{ margin: 0 }}
        >
          <h3>SUIVEZ-NOUS SUR : </h3>

          {/* <!-- End of History  --> */}

          {/* <!-- Start of ul list about sociel media figures  --> */}
          <ul className="sci mt-10 flex">
            <li>
              {" "}
              <a href="#">
                <FaFacebook className="w-5 h-5" />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <FaTwitter className="w-5 h-5" />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <FaGoogle className="w-5 h-5" />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <FaYoutube className="w-5 h-5" />{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <FaInstagram className="w-5 h-5" />
              </a>
            </li>
          </ul>

          {/* <!-- Start of Second div  --> */}
        </div>

        {/* 

import { MdGpsFixed } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

*/}
        <div className="CONTACTEZ-NOUS w-90% lg:w-60% 2xl:w-40%   border-2 grid grid-cols-1 lg:grid-cols-2 space-x-3 border-white ">
          <h3>CONTACTEZ-NOUS</h3>
          <span> </span>

          <div className=" ">
            {" "}
            <span>
              <MdGpsFixed className="w-6 h-6" />
            </span>
            <span>
              Faculté Polydisciplinaire - Université Sultan Moulay Slimane
              Mghila BP: 592 Beni Mellal
            </span>
          </div>

          <div className="">
            {" "}
            <span>
              <BsTelephoneFill className="w-6 h-6" />
            </span>
            <span> Tél : +212(0)5234246 85/16</span>
          </div>

          <div className="">
            <span>
              <FaFax className="w-6 h-6" />
            </span>

            <span>Fax : +212(0)52342459</span>
          </div>
          <div className="">
            <span>
              <IoMailOpenOutline className="w-8 h-8" />
            </span>

            <span className="ms-5 ">Mail : fpbm@usms.ma</span>
          </div>
        </div>
      </footer>
    </>
  );
};
