import { Icon } from "@iconify/react";
import React from "react";

const YusleidyBlandon = () => {
  return (
    <section className="sectionEstudiante2">
      <span className="talento">PORTUGUÉS B2 Y CONOCIMIENTOS EN AGILÍSIMO</span>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/q7WPy4Hy/Yus.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Yusleidy Blandón Caicedo</h2>
          <p>
            Me he sumergido en el fascinante mundo de la programación,
            explorando sus conceptos y desafiándome a mí misma con proyectos
            creativos. Además, completé un curso de Product Owner, lo que me ha
            brindado una perspectiva más amplia sobre la gestión de productos y
            la colaboración efectiva en equipos ágiles. Estoy emocionada por
            seguir aprendiendo y creciendo en estas áreas mientras contribuyo al
            desarrollo de soluciones de forma eficiente y proactiva.
          </p>
          <p>
            Mis conocimientos gracias a la formación que he desempeñado en este
            tiempo es amplia, conozco de agilísimo, marcos de trabajos ágiles;
            además estoy familiarizada con JavaScript, Java, React.js, bases de
            datos SQL y estoy siempre dispuesta a aprender nuevas tecnologías.
          </p>
        </div>
        <span className="iconos" >
          <a style={{ color: "#CDCAE4" }} href="" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#CDCAE4" }} href="" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#CDCAE4" }} href="" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default YusleidyBlandon;
