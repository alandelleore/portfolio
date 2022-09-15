import React from "react";

import { useState } from "react";
import "../App.css";
import swipe from "../images/swipe.png";

const Arrow = () => {
  const [arrowActive, setArrowActive] = useState(false);

  setTimeout(() => {
    if (!arrowActive) {
      setArrowActive(true);
    } else {
      setArrowActive(false);
    }
  }, 8000);

  return (
    <div className={arrowActive ? "container__arrow" : "disabled"}>
      <div className="arrow">
        <img src={swipe} alt="" />
      </div>
    </div>
  );
};

export default Arrow;
