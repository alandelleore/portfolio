import React from "react";

import Perfil from "./Perfil";
import "../App.css";

const Header = () => {
  return (
    <>
      <div id="home"></div>
      <div className="principal vertical-centered-text">
        <Perfil />
      </div>
    </>
  );
};

export default Header;
