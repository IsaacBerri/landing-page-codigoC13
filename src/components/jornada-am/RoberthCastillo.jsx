import { Icon } from "@iconify/react";
import React from "react";

const RoberthCastillo = () => {
  return (
    <section className="sectionEstudiante4">
      <span className="talento">ARTE Y PROGRAMACIÓN</span>
      <h2>Roberth Tailor Castillo Mosquera</h2>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            El arte y la programación han entrado a mi vida como una fusión,
            realizo ideas mediante el código. Me motiva intensamente el diseño
            gráfico, constantemente estoy creando proyectos nuevos que tengan
            como raiz el arte, ya sea la musica o el dibujo.
          </p>
          <picture className="estudianteImg">
            <img src="https://i.postimg.cc/gc3WyXJJ/Robert.png" alt="" />
            <span className="iconos">
              <a style={{ color: "#E74C3C" }} href="" target="_blank">
                <Icon icon="jam:github" width="50" height="50" />
              </a>
              <a style={{ color: "#E74C3C" }} href="" target="_blank">
                <Icon icon="mdi:linkedin" width="50" height="50" />
              </a>
              <a style={{ color: "#E74C3C" }} href="" target="_blank">
                <Icon icon="clarity:briefcase-solid" width="50" height="50" />
              </a>
            </span>
          </picture>
          <p>
            Mi formación en Código C13, me dejo con varios aprendizajes, como
            descubrir que tengo habilidad para tener nuevo conocimiento y así
            dar resultados rápidamente, manteniendo el estilo que se requiere en
            la industria. Las tecnologías que más domino son las siguientes:
            NextJ.S, JavaScript, Java, Node J.S y React.
          </p>
        </div>
      </article>
    </section>
  );
};

export default RoberthCastillo;
