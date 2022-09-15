import React, { useRef } from "react";

import { motion } from "framer-motion";
import "../slider.css";
import images from "../exports/images";

const Slider = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="slider-container " ref={constraintsRef}>
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={constraintsRef}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <img src={image} alt="" className="slider__img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Slider;
