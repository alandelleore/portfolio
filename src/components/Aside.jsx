import React from "react";
import html from "../images/html-icon.png";
import css from "../images/css-icon.png";
import js from "../images/js-icon.png";
import react from "../images/react-icon.png";
import node from "../images/node-icon.png";
import fire from "../images/firebase-icon.png";
import bootstrap from "../images/bootstrap-icon.png";
import git from "../images/git-icon.png";

const Aside = () => {
  return (
    <div className="container servicios" id="servicios">
      <div className="row">
        <div className="col-md-12 col-sm-6">
          <h1>Aptitudes</h1>
        </div>
      </div>
      <div className="row images">
        <div className="col-md-3 col-sm-3 col-3">
          <img src={html} alt="html logo" />
        </div>
        <div className="col-md-3 col-sm-3 col-3">
          <img src={css} alt="css logo" />
        </div>
        <div className="col-md-3 col-sm-3 col-3">
          <img src={js} alt="" />
        </div>
        <div className="col-md-3 col-sm-3 col-3">
          <img src={react} alt="" />
        </div>
      </div>
      <div className="row"></div>
      <div className="row images">
        <div className="col-md-3 col-sm-3 col-3">
          <img src={fire} alt="html logo" />
        </div>
        <div className="col-md-3 col-sm-3 col-3">
          <img src={node} alt="css logo" />
        </div>
        <div className="col-md-3 col-sm-3 col-3">
          <img src={bootstrap} alt="" />
        </div>
        <div className="col-md-3 col-sm-3 col-3">
          <img src={git} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aside;
