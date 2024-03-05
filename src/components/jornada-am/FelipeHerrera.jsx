import { Icon } from "@iconify/react";
import React from "react";

const FelipeHerrera = () => {
  return (
    <section className="sectionEstudiante1">
      <span className="talento">PRODUCTIVIDAD</span>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Felipe Herrera Perea</h2>
          <p>
            Soy un desarrollador apasionado que encuentra su mayor inspiración
            entre líneas de código y algoritmos desafiantes. Cuando no estoy
            inmerso en la programación, disfruto del aire libre y el deporte,
            creyendo fielmente en mantener un equilibrio entre mente y cuerpo.
            Además, soy un ávido lector y he adquirido conocimiento técnico
            sobre los principios SOLID, los fundamentos de la arquitectura web,
            patrones de diseño aplicado a la programación orientada a objetos;
            aplico estos conocimientos en las tecnologías del stack MERN, tengo
            el conocimiento en poder generar automatización(RPA) para el
            aprovechamiento del tiempo y tener un alto nivel de productividad.
          </p>
        </div>

        <span className="iconos">
          <a
            style={{ color: "#8109C3" }}
            href=""
            target="_blank"
          >
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a
            style={{ color: "#8109C3" }}
            href=""
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a
            style={{ color: "#8109C3" }}
            href=""
            target="_blank"
          >
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/MKbzwM24/Felipe.png" alt="" />
      </picture>
    </section>
  );
};

export default FelipeHerrera;
