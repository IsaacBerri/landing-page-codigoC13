import { Icon } from "@iconify/react";
import React from "react";

const JavierRuiz = () => {
  return (
    <section className="sectionEstudiante3">
      <span className="talento">TRABAJO ORIENTADO AL LOGRO</span>
      <picture className="estudianteImg">
        <h2>Javier Oswaldo Ruiz Arango</h2>
        <img src="https://i.postimg.cc/524b24ft/Javier.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Estoy comprometido en convertirme en un desarrollador altamente
            competente, me entusiasma la constante evolución del mundo
            tecnológico. Mi objetivo principal es obtener experiencia en el
            mundo real, donde pueda poner en práctica mis conocimientos,
            aprender de profesionales experimentados y contribuir al éxito de
            proyectos desafiantes. Estoy profundamente interesado en el
            ecosistema Open Source, donde puedo colaborar con comunidades
            vibrantes, compartir mi conocimiento y contribuir a proyectos
            innovadores. He adquirido conocimientos en la automatización,
            Node.js, HTML, CSS, Java, JavaScritpt, React, GraphQL, MongoBD,
            MYSQL, SQL Power Automade, UIPath, SourceTree y MariaDB.
          </p>
        </div>
        <span className="iconos">
          <a style={{ color: "#B6B7BA" }} href="" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#B6B7BA" }} href="" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#B6B7BA" }} href="" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default JavierRuiz;
