import React from "react";
import "../App.css";

import Menu from "./Menu";
import perfil from "../images/perfil2.jpg";
import cvAlan from "../download/alandelleore.pdf";
import MenuMobile from "./MenuMobile";

const Perfil = () => {
  return (
    <>
      <div className="contenedor" id="contacto">
        <div className="contenedor-tarjeta">
          <div className="header">
            <div className="div__perfil">
              <img src={perfil} alt="foto perfil" className="perfil" />
            </div>
            <h2>Alan Delle Ore</h2>
            <h4>Desarrollador Front-End</h4>
            <MenuMobile />
          </div>
          <div className="descripcion ">
            <p className="text-justify">
              Soy programador Frontend y estoy en búsqueda de mi primera
              experiencia laboral en el mundo IT, te invito a conocer más sobre
              mí y ver algunos de mis proyectos.
            </p>
            <div className="social">
              <a href={cvAlan} target="_blank " rel="noreferrer">
                <button className="btn btn-dark mt-2">
                  Descargar CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-download"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                    fill="none"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <polyline points="7 11 12 16 17 11" />
                    <line x1="12" y1="4" x2="12" y2="16" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Perfil;
