import { Icon } from "@iconify/react";
import React from "react";

const SamuelZapata = () => {
  return (
    <section className="sectionEstudiante3">
      <span className="talento">Ingles B1</span>
      <picture className="estudianteImg">
        <h2>Samuel Zapata Montoya</h2>
        <img src="https://i.postimg.cc/65wNMW2h/Samuel.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Llevo aprendiendo de programación aproximadamente año y medio, ser
            parte de este mundo me ha llevado a aprender y hacer del código
            parte de mis hábitos diarios. Soy estudiante de Ingeniería
            Informática en el Politécnico Colombiano Jaime Isaza Cadavid y
            apunto a ser Programador Fullstack de Código C13. Dentro de mis
            procesos formativos, he sido un lider y un colaborador destacable
            con manejo de Scrum. Mis aspiraciones está en lograr una conexión
            entre el mundo deportivo y la industria del desarrollo, por eso me
            esfuerzo cada día para mejorar en ambos campos. Algunos de mis
            conocimientos son: Java, Javascript, C, C++, entre otros.
          </p>
        </div>
        <span className="iconos">
          <a style={{ color: "#1BB5E0" }} href="https://github.com/samuelzapatam22" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#1BB5E0" }} href="https://www.linkedin.com/in/dev-samzapata/" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#1BB5E0" }} href="https://samuelzapataportafolio.netlify.app/" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default SamuelZapata;
