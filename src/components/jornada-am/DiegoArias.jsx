import { Icon } from "@iconify/react";
import React from "react";

const DiegoArias = () => {
  return (
    <section className="sectionEstudiante2">
      {/* <span className="talento posicionTop">Ingles B2</span> */}
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/SNWxK18g/Diego.jpg" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Diego Andrés Arias Carmona</h2>
          <p>
            Considero que mis diez años en el campo de la música me ha dado
            habilidades que me ayudan a desempeñar mi futuro rol como
            programador full-stack, al trabajar con distintas personas y
            profesionales he aprendido a desenvolverme en equipos
            multidisciplinarios, igualmente desde mi experiencia he forjado
            cualidades para contribuir eficazmente.
          </p>
          <p>
            Estoy comprometido con el aprendizaje continuo, emocionado de
            embarcarme en mi próximo desafío profesional. Mi conocimiento en
            HTML, CSS, Javascript, POO, Java, React, Express, NodeJS, SQL,
            MongoDB y PostgreSQL, aseguran mi capacidad de seguir
            potencializando las empresas donde estaré trabajando. Me interesa
            combinar y explotar formas donde la tecnología se enlace con la
            creatividad.
          </p>
        </div>
        <span className="iconos" style={{ color: "#F3C363" }}>
          <Icon icon="jam:github" width="50" height="50" />
          <Icon icon="mdi:linkedin" width="50" height="50" />
          <Icon icon="clarity:briefcase-solid" width="50" height="50" />
        </span>
      </article>
    </section>
  );
};

export default DiegoArias;
