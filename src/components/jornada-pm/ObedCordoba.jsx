import { Icon } from "@iconify/react";
import React from "react";

const ObedCordoba = () => {
  return (
    <section className="sectionEstudiante4">
      <span className="talento">ATENCIÓN AL DETALLE</span>
      <h2>Obed Córdoba Agualimpia</h2>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Bachiller técnico con énfasis en programación de software, con
            conocimientos en diseño gráfico y lógica en programación. Con
            habilidades para el manejo de herramientas de office nivel medio.
            Con competencias como atención al detalle, seguimiento de
            instrucciones. Interés ocupacional en áreas de diseño y
            programación.
          </p>
          <picture className="estudianteImg">
            <img src="https://i.postimg.cc/9fShbyZ4/Obed-Cordoba-fotor-bg-remover-20240301154837.png" alt="" />
            <span className="iconos">
              <a
                style={{ color: "#5E4E4D" }}
                href=""
                target="_blank"
              >
                <Icon icon="jam:github" width="50" height="50" />
              </a>
              <a
                style={{ color: "#5E4E4D" }}
                href=""
                target="_blank"
              >
                <Icon icon="mdi:linkedin" width="50" height="50" />
              </a>
              <a
                style={{ color: "#5E4E4D" }}
                href=""
                target="_blank"
              >
                <Icon icon="clarity:briefcase-solid" width="50" height="50" />
              </a>
            </span>
          </picture>
          <p>
            Conocimientos: C, C++, Java, JavaScript, React, Vue, SQL, MongoDB,
            HTML, CSS, Git, Android y Python. <br/> <br/> Sotfware: Ofimática, Inkskape,
            Herramientas de Google, Visual Studio Code y Herramientas Open
            Source de diseño
          </p>
        </div>
      </article>
    </section>
  );
};

export default ObedCordoba;
