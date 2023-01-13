import React from "react";

import cvAlan from "../download/alandelleore.pdf";
import logodev2 from "../images/logo13.png";

import "../App.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-5 bg__footer text-white">
          <div className="col-6 col-xs-6 col-md-6 col-lg-3">
            <a href="#home">
              <img src={logodev2} alt="" className="item__footer" />
            </a>

            <p className="fw-light">Rosario, ARG 2022</p>
          </div>
          <div className="col-6 col-xs-6 col-md-6 col-lg-3 mb-2">
            <p className="h6">Sobre mi</p>
            <div className="mb-2">
              <a
                href={cvAlan}
                target="_blank "
                rel="noreferrer"
                className="text-light text-decoration-none fw-light"
              >
                Curriculum
              </a>
            </div>
            <div className="mb-2">
              <a
                href="https://github.com/alandelleore"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light text-decoration-none fw-light"
              >
                Github
              </a>
            </div>
            <div className="mb-2">
              <a
                href="#cursos"
                className="text-light text-decoration-none fw-light"
              >
                Cursos
              </a>
            </div>
          </div>
          <div className="col-6 col-xs-6 col-md-6 col-lg-3 mb-2">
            <p className="h6 fw-semibold">Contacto</p>
            <div className="mb-2">
              <a
                href="https://linkedin.com/in/alandelleore"
                className="text-light text-decoration-none fw-light "
              >
                Linkedin
              </a>
            </div>
            <div className="mb-2">
              <a
                href="mailto:alandelleore@gmail.com"
                className="text-light text-decoration-none fw-light"
              >
                Email
              </a>
            </div>
            <div className="mb-2">
              <a
                href="https://www.instagram.com/alandelleore/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light text-decoration-none fw-light"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="col-6 col-xs-6 col-md-6 col-lg-3 mb-2">
            <p className="h6 fw-semibold">Proyectos</p>
            <div className="mb-2">
              <a
                href="https://bluebirdshop2.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light text-decoration-none fw-light"
              >
                Bluebird
              </a>
            </div>
            <div className="mb-2">
              <a
                href="https://protected-wave-72911.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light text-decoration-none fw-light"
              >
                Moss Garden
              </a>
            </div>
            <div className="mb-2">
              <a
                href="https://github.com/alandelleore/portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light text-decoration-none fw-light"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
