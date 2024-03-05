import { Icon } from "@iconify/react";
import React from "react";

const IvanDario = () => {
  return (
    <section className="sectionEstudiante2">
      <span className="talento">APRENDIZAJE VELOZ</span>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/DwxFW9zP/Ivan.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Ivan Dario Aristizabal</h2>
          <p>
            Soy un curioso y apasionado por la tecnología y la innovación, soy
            estudiante de código C13 y en plataformas digitales como Platzi y
            Udemy. Poseo buenas habilidades de lógica de programación, que he
            adquirido y seguiré obteniendo durante los procesos. Desde muy
            pequeño siempre me ha gustado el diseño y la creación de cosas
            nuevas. Encontré en la programación un mundo en el que puedo aplicar
            esa pasión, aprendiendo de Java, Javascript, Frameworks y Bases de
            datos para ser Full-Stack; porque me el Front es la puerta de
            entrada de los usuarios y el trabajo visual me permite ser creativo
            y el Back me permite hacer funcional aquello que es visual y me
            permite fortalecer mis conocimientos. Aspiro a poder aportar
            soluciones que contribuyan a ayudar y mejorar la vida diaria de las
            personas, siempre dispuesto a enseñar y aprender el camino. para
            alcanzar los objetivos. ¡Creo en la tecnología como la mejor
            herramienta para construir un mundo mejor!
          </p>
        </div>
        <span className="iconos">
          <a style={{ color: "#B365E1" }} href="https://github.com/IvanAristi?tab=repositories" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#B365E1" }} href="https://www.linkedin.com/in/iv%C3%A1n-aristiz%C3%A1bal/" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#B365E1" }} href="https://www.behance.net/ivandaaristiz/projects" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default IvanDario;
