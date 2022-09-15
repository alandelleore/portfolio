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
              transform: isInView ? "none" : "translatey(-100px)",
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
              transform: isInView ? "none" : "translatey(-100px)",
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

export default function MenuMobile() {
  const { menu } = useContext(GlobalContext);
  return (
    <>
      {menu ? (
        <Section>
          <div className="container row mt-4 menumobile ">
            <div className="col-4 icono">
              <a href="/" target="_blank " rel="noreferrer">
                <img src={linkedin} alt="" className="icono__img" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="https://github.com/alandelleore"
                target="_blank "
                rel="noreferrer"
              >
                <img src={github} alt="" className="icono__img " />
              </a>
            </div>
            <div className="col-4 icono">
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
