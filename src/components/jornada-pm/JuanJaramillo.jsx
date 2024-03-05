import { Icon } from "@iconify/react";
import React from "react";

const JuanJaramillo = () => {
  return (
    <section className="sectionEstudiante1">
      <span className="talento">MÁS DE DOS AÑOS DE EXPERIENCIA</span>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Juan Daniel Jaramillo Echavarria</h2>
          <p>
            Apasionado por la tecnología y la modernización desde pequeño, con
            gran gusto por los deportes como el fútbol y el baloncesto. Soy
            técnico en mantenimiento de cómputo y desarrollador de software, con
            más de dos años de experiencia en el área de soporte TI. En mi
            transcurso en la academia Código C13 realicé varios proyectos que
            potencializaron mi lógica en programación, también el trabajo en
            equipo con el marco de trabajo SCRUM, esto mediante a los lenguajes
            de programación como: JavaScript, Java y PostgreSQL.
          </p>
        </div>

        <span className="iconos">
          <a
            style={{ color: "#7eff28" }}
            href=""
            target="_blank"
          >
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a
            style={{ color: "#7eff28" }}
            href=""
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a
            style={{ color: "#7eff28" }}
            href=""
            target="_blank"
          >
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/s20VLkdg/Daniel.png" alt="" />
      </picture>
    </section>
  );
};

export default JuanJaramillo;
