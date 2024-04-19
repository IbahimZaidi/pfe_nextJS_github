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
      <footer id="footer_id">
        {/* <!-- div history About fpbm  --> */}

        <div className="About-us flex">
          <div className="About-us1 w-15%">
            <img src="/images&figures/fplogo_2.png" alt="error" />
          </div>
          <div className="About-us2 flex-1 text-sm">
            La Faculté polydisciplinaire de Béni Mellal « FPD » est un
            établissement public d'enseignement Supérieur, crée en Septembre
            2003 (avec la mise en place de la réforme universitaire.)les
            formation proposées par ce dernier s’inscrivent dans le cadre de la
            mise en œuvre de la réforme de l’enseignement supérieur. Il a pour
            vocation de répondre aux besoins de la région Tadla-Azilal en
            matière de formation Universitaires.
          </div>
        </div>

        <div className="footer-container">
          {/* <!-- Start Of History  --> */}

          <div className="sec">
            <h3>SUIVEZ-NOUS SUR : </h3>

            {/* <!-- End of History  --> */}

            {/*

import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


 */}

            {/* <!-- Start of ul list about sociel media figures  --> */}
            <ul className="sci">
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
        </div>

        {/* 

import { MdGpsFixed } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

*/}
        <div className="CONTACTEZ-NOUS ">
          <h3>CONTACTEZ-NOUS</h3>

          <div>
            {" "}
            <span>
              <MdGpsFixed className="w-6 h-6" />
            </span>
            <span>
              Faculté Polydisciplinaire - Université Sultan <br /> Moulay
              Slimane Mghila BP: 592 Beni Mellal
            </span>
          </div>

          <div>
            {" "}
            <span>
              <BsTelephoneFill className="w-6 h-6" />
            </span>
            <span> Tél : +212(0)5234246 85/16</span>
          </div>

          <div>
            <span>
              <FaFax className="w-6 h-6" />
            </span>

            <span>Fax : +212(0)52342459</span>
          </div>
          <div>
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
