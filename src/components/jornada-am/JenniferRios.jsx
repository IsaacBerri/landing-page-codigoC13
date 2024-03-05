import { Icon } from "@iconify/react";
import React from "react";

const JenniferRios = () => {
  return (
    <section className="sectionEstudiante4">
      <span className="talento">SOLUCIONES INNOVADORAS</span>
      <h2>Jennifer Rios Calle</h2>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Desarrollador Web Junior entusiasta con una mente creativa y un
            firme compromiso con el aprendizaje y la colaboración en equipo. Mi
            pasión por la tecnología se refleja en mi constante búsqueda de
            conocimientos y en mi voluntad de enfrentar nuevos desafíos. A
            través de mi trabajo, he desarrollado habilidades técnicas sólidas y
            he aprendido a colaborar efectivamente en entornos
            multidisciplinarios. Estoy emocionado por seguir creciendo
            profesionalmente y contribuir de manera significativa en proyectos
            innovadores y dinámicos.
          </p>
          <picture className="estudianteImg">
            <img src="https://i.postimg.cc/L5FMKRy2/Rios.png" alt="" />
            <span className="iconos">
              <a
                style={{ color: "#0A9B94" }}
                href="https://github.com/Rios06"
                target="_blank"
              >
                <Icon icon="jam:github" width="50" height="50" />
              </a>
              <a
                style={{ color: "#0A9B94" }}
                href="https://www.linkedin.com/in/jennifer-rios-calle-300422296/"
                target="_blank"
              >
                <Icon icon="mdi:linkedin" width="50" height="50" />
              </a>
              <a
                style={{ color: "#0A9B94" }}
                href="https://my-portafolio-olive-six.vercel.app/"
                target="_blank"
              >
                <Icon icon="clarity:briefcase-solid" width="50" height="50" />
              </a>
            </span>
          </picture>
          <p>
            Mi compromiso con la excelencia se refleja en mi búsqueda constante
            de aprendizaje y colaboración, impulsando la innovación en equipo.
            Mi meta es no solo crecer profesionalmente, sino también dejar una
            huella significativa en entornos dinámicos y desafiantes, donde mi
            pasión por encontrar soluciones innovadoras pueda brillar y generar
            un impacto duradero.
          </p>
        </div>
      </article>
    </section>
  );
};

export default JenniferRios;
