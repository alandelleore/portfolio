import { useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";
import "../styles.css";

import github from "../images/github.png";
import linkedin from "../images/linkedin.svg";
import mail from "../images/mail.svg";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { menu } = useContext(GlobalContext);

  return (
    <>
      {menu ? (
        <section ref={ref}>
          <div
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1.5) 0.5s",
            }}
          >
            {children}
          </div>
        </section>
      ) : (
        <section ref={ref}>
          <div
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 0 : 1,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1.5) 0.5s",
            }}
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
}

export default function Menu() {
  const { menu } = useContext(GlobalContext);
  return (
    <>
      {menu ? (
        <Section>
          <div className="container row contenedor__iconos ">
            <div className="col-12 col-md-12 mt-4 m-3 icono">
              <a
                href="https://linkedin.com/in/alandelleore"
                target="_blank "
                rel="noreferrer"
              >
                <img src={linkedin} alt="" className="icono__img" />
              </a>
            </div>
            <div className="col-12 col-md-12 m-3 icono">
              <a
                href="https://github.com/alandelleore"
                target="_blank "
                rel="noreferrer"
              >
                <img src={github} alt="" className="icono__img icono__2" />
              </a>
            </div>
            <div className="col-12 col-md-12 m-3 icono">
              <a href="mailto:alandelleore@gmail.com">
                <img src={mail} alt="" className="icono__img" />
              </a>
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
