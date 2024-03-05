import { Icon } from "@iconify/react";
import React from "react";

const BrayamRendon = () => {
  return (
    <section className="sectionEstudiante3">
      <span className="talento">LIDERAZGO Y TRABAJO EN EQUIPO</span>
      <picture className="estudianteImg">
        <h2>Brayam Alberto Rendón Echavarria</h2>
        <img src="https://i.postimg.cc/Rhw4Nq3W/Brayan.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Soy estudiante de Programación junior próximo a graduarme y
            actualmente cursando en la escuela Código C13, donde adquiero
            conocimientos en Java POO y Base de datos SQL, especializándome en
            lógica de programación y manejo de datos. Estoy preparado para
            enfrentar nuevos retos que me permitan sumar experiencia y
            conocimientos en este apasionante campo. Mi pasión por la tecnología
            me impulsa a aprender constantemente y a fortalecer mis habilidades
            socioemocionales combinadas con las técnicas, siempre en búsqueda de
            experiencias que enriquezcan tanto mi desarrollo profesional como
            personal.
          </p>
        </div>
        <span className="iconos">
          <a
            style={{ color: "#059B9A" }}
            href=""
            target="_blank"
          >
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a
            style={{ color: "#059B9A" }}
            href=""
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a
            style={{ color: "#059B9A" }}
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

export default BrayamRendon;
