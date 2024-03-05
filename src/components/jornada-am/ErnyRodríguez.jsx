import { Icon } from "@iconify/react";
import React from "react";

const ErnyRodríguez = () => {
  return (
    <section className="sectionEstudiante2">
      <span className="talento">RETOS</span>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/PfDt6V6d/Erny.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Erny Rodríguez Mosquera</h2>
          <p>
            Después de unos meses dedicada a mis estudios de Desarrollo de
            Software, y adquirir conocimiento de lenguajes de programación como
            lo son Java y JavaScript, también obtuve conocimientos de HTML, CSS,
            React y SQL. Sintiendo más afinidad por las bases de datos; creo que
            tengo las condiciones necesarias para aportar lo mejor de mí en este
            maravilloso sector. Me encantan los retos, superarme y aprender cada
            día.
          </p>
        </div>
        <span className="iconos">
          <a
            style={{ color: "#FFBB80" }}
            href=""
            target="_blank"
          >
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a
            style={{ color: "#FFBB80" }}
            href=""
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a
            style={{ color: "#FFBB80" }}
            href=""
            target="_blank"
          >
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default ErnyRodríguez;
