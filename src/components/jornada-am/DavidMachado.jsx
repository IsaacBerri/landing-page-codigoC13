import { Icon } from "@iconify/react";
import React from "react";

const DavidMachado = () => {
  return (
    <section className="sectionEstudiante3">
      <span className="talento">ÉTICA PROFESIONAL</span>
      <picture className="estudianteImg">
        <h2>David Alejandro Machado</h2>
        <img src="https://i.postimg.cc/zBg1c3Fx/Machado.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Soy un programador de nivel junior con 1 año de experiencia en
            desarrollo web, egresado de código C13 academy, punto que me permite
            asegurar mis conocimientos en diferentes lenguajes de programación,
            como lo son Java, JavaScript, html, css, entre otros; También cuento
            con conocimientos previos en bases de datos SQL y NoSQL
          </p>
          <p>
            Soy una persona tranquila que prefiere lo rural, mi visión está
            dirigida hacia tecnología avanzada que nos permita apaciguar y
            revertir todo el daño directo o indirecto que puede causar el ser
            humano en sus actividades diarias.
          </p>
          <p>
            Destaco la curiosidad que me permite explorar y encontrar todo tipo
            de conocimiento que me llame la atención. Tengo un buen desempeño
            trabajando en equipo, y me gusta mucho aprender enseñando a los
            demás; Es fácil y gratificante para mi hacer todo tipo de procesos
            de capacitación y autocapacitación, convirtiéndome en una persona
            multifacética, capaz de llevar a cabo diferentes tareas en diversos
            ámbitos.
          </p>
        </div>
        <span className="iconos">
          <a
            style={{ color: "#210210" }}
            href=""
            target="_blank"
          >
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a
            style={{ color: "#210210" }}
            href=""
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a
            style={{ color: "#210210" }}
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

export default DavidMachado;
