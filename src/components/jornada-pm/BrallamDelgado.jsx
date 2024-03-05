import { Icon } from "@iconify/react";
import React from "react";

const BrallamDelgado = () => {
  return (
    <section className="sectionEstudiante4">
      <span className="talento">FRONT-END</span>
      <h2>Brallam Estiven Delgado Burtica</h2>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Como recién graduado de un bootcamp, tengo una sólida comprensión de
            marcos de trabajo ágiles como Scrum y experiencia práctica
            trabajando en equipos colaborativos. Durante mi formación adquirí
            habilidades en desarrollo utilizando tecnologías como Java,
            JavaScript y Frameworks como React. Quisiera enfocar mi trayectoria
            laboral en el desarrollo web, más específicamente en el Frontend. Me
            motiva la idea de crear experiencias digitales impactantes y
            accesibles para los usuarios
          </p>
          <picture className="estudianteImg">
            <img src="https://i.postimg.cc/8zNPfdmN/Brallam.png" alt="" />
            <span className="iconos">
              <a style={{ color: "#030305" }} href="" target="_blank">
                <Icon icon="jam:github" width="50" height="50" />
              </a>
              <a style={{ color: "#030305" }} href="" target="_blank">
                <Icon icon="mdi:linkedin" width="50" height="50" />
              </a>
              <a style={{ color: "#030305" }} href="" target="_blank">
                <Icon icon="clarity:briefcase-solid" width="50" height="50" />
              </a>
            </span>
          </picture>
          <p>
            Además, cuento con experiencia en el uso de tecnologías Backend como
            Express, así como en el diseño y gestión de bases de datos
            utilizando PostgreSQL. A través de mi curiosidad innata, estoy
            dispuesto a sumergirme en nuevos proyectos, aprender de mis errores
            y colaborar con el equipo para alcanzar objetivos comunes. Estoy
            emocionado por la oportunidad de ampliar mis habilidades y
            conocimientos en el mundo laboral. Estoy comprometido a seguir
            aprendiendo y creciendo como profesional en el campo del desarrollo.
          </p>
        </div>
      </article>
    </section>
  );
};

export default BrallamDelgado;
