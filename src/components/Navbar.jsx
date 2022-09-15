import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import logodev from "../images/logo12.png";

const Navbar = () => {
  const { handleChange } = useContext(GlobalContext);

  return (
    <nav className="navbar sticky-top shadow-sm navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand bg-light">
      <div className="container-fluid mx-1 ">
        <a className="navbar-brand mx-2" href="/">
          <img src={logodev} alt="" className="logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#abaut">
                Sobre mi
              </a>
            </li>
            <li onClick={handleChange}>
              <a href="#home" className="nav-link active" aria-current="page">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#proyectos"
              >
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
