import { Icon } from "@iconify/react";
import React from "react";

const BrayanCordoba = () => {
  return (
    <section className="sectionEstudiante3">
      <span className="talento">APRENDIZAJE DESDE HACE 3 AÑOS</span>
      <picture className="estudianteImg">
        <h2>Brayan Stiben Cordoba Mosquera</h2>
        <img src="https://i.postimg.cc/qMdpWcYy/Brayan-1.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Soy un técnico en el desarrollo de software, me considero una
            persona muy persistente y colaborativa, siempre enfocado en alcanzar
            mis objetivos. Más allá de ofrecer servicios en programación
            full-stack, busco aportar con ideas que beneficien a la empresa
            interesada en mis servicios. Además, me encanta compartir mis
            conocimientos y aprender de los demás. Si buscas alguien eficiente,
            social, con habilidades técnicas y comunicativas, y apasionado por
            los retos, ¡soy la persona que necesitas!. Estudie en el Pascual
            Bravo la técnica de desarrollo de software, mi sueño es ser
            ingeniero por eso actualmente estoy en la carrera de Ingenieria de
            Sistemas y he potenciado mis habilidades a través de Código C13.
            Desde hace 3 años he estado interesando en el desarrollo,
            participando en proyectos como: pre-matricula online de mi colegio,
            gestor de tareas y entre otros. Las tecnologias que manejo son:
            Express, PHP, JavaScript, React, Java y demás.
          </p>
        </div>
        <span className="iconos">
          <a style={{ color: "#89F6CC" }} href="" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#89F6CC" }} href="" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#89F6CC" }} href="" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default BrayanCordoba;
