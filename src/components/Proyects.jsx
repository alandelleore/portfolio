import React from "react";
import "../cards.css";
import proyectos from "../proyects.json";

const Proyects = () => {
  return (
    <div className="body__page p-4 ">
      <div className="container__card">
        {proyectos.map((proyecto, index) => (
          <div className="card__proyect card__efect" key={index}>
            <div className="img__container">
              <img src={proyecto.imagen} alt="" className="img__card" />
            </div>

            <div className="info__description">
              <img src={proyecto.stack} alt="" className="img-fluid" />
              <p>
                <span>{proyecto.titulo} : </span>
                {proyecto.descripcion}
              </p>
              <div className="d-flex">
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                      fill="none"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </div>
                </a>
                <div className="svg">
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-external-link"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="#ffffff"
                      fill="none"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                      <line x1="10" y1="14" x2="20" y2="4" />
                      <polyline points="15 4 20 4 20 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
