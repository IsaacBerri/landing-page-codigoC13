import { Icon } from "@iconify/react";
import React from "react";

const SantiagoGallego = () => {
  return (
    <section className="sectionEstudiante1">
      <span className="talento">AUTOMATIZACIÓN</span>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Santiago Gallego Bedoya</h2>
          <p>
            Mis habilidades me han permitido liderar procesos con éxito,
            mejorando mi capacidad de comunicación asertiva, compromiso y
            enfoque en el logro de objetivos. Actualmente, estoy cursando la
            escuela de programación Código C13, donde he tenido la oportunidad
            de participar en un proyecto de automatización que ha fortalecido
            mis conocimientos técnicos en programación de lenguajes de
            scripting, bases de datos, flujos de trabajo, procesos empresariales
            y control de versiones, mientras adquiero nuevas habilidades en
            herramientas de automatización. Mi experiencia previa como auxiliar
            de farmacia me ha enseñado la importancia de brindar una excelente
            atención al cliente, habilidad que considero fundamental para el rol
            de desarrollador full stack, ya que desde esa creencia he sido capaz
            de proponer soluciones, aportar ideas y sugerir mejoras para
            proyectos.
          </p>
        </div>

        <span className="iconos">
          <a style={{ color: "#BC4646" }} href="" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#BC4646" }} href="" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#BC4646" }} href="" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/0yy1qVCM/Santiago.png" alt="" />
      </picture>
    </section>
  );
};

export default SantiagoGallego;
