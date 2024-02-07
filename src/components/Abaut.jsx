import React from "react";
import skills from "../images/skills.png";
import Proyects from "./Proyects";
import Slider from "./Slider";
import Arrow from "./Arrow";

const Abaut = () => {
  return (
    <div className="container mt-4 " id="sobre-mi">
      <div className="row p-4">
        <div className="col-md-6 mx-2 text-light mt-5">
          <h1 className="abaut text-muted mb-4 mt-3">Sobre mí</h1>
          <p className="text-muted textos">
            Mi nombre es Alan Juan Pablo Delle Ore, soy desarrollador Fullstack
            y estudiante de tecnicatura superior en programación en Instituto
            Teclab.
          </p>
          <p className="text-muted textos">
            Empece este recorrido de aprendizaje realizando distintos cursos,
            capacitaciones y proyectos en plataformas como CoderHouse,
            EducaciónIT, ComIT, E-learning-total, entre otras. Actualmente me
            desempeño como desarrollador frontend en Prendo by MG Group S.A.
          </p>
          <p className="text-muted textos">
            Me considero una persona responsable, organizada y resolutiva, me
            adapto fácilmente a los nuevos entornos y al trabajo en equipo. Soy
            un apasionado por la tecnología, comprometido con el aprendizaje
            continuo, listo para nuevos desafios y a la altura de los
            requerimientos de la industria.
          </p>
        </div>
        <div className="col-md-4 mx-2 mt-5">
          <h1 className="text-muted mb-4 mt-3">Skills</h1>
          <img src={skills} alt="skills" className="img-fluid" />
        </div>
        <div className="col-md-12  mx-2 mt-5" id="cursos">
          <div className="d-flex">
            <h1 className="abaut text-muted mb-4">Cursos</h1>

            <Arrow />
          </div>

          <Slider />
        </div>

        <div className="col-md-12 mx-2 mt-5" id="proyectos">
          <h1 className="abaut text-muted mt-2">Proyectos</h1>
          <Proyects />
        </div>
      </div>
    </div>
  );
};

export default Abaut;
