import { Icon } from "@iconify/react";
import React from "react";

const JuanValencia = () => {
  return (
    <section className="sectionEstudiante1">
      <span className="talento">INGLES B2</span>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Juan David Valencia Zapata</h2>
          <p>
            Soy un desarrollador web fullstack apasionado por crear aplicaciones
            web que sean intuitivas y eficientes. Disfruto sumergirme en
            proyectos que me desafíen y me permitan explorar nuevas ideas;
            asimismo en conversaciones que fortalezcan mi inglés. Me encanta la
            sensación de seguridad que puedo brindar a través de aplicaciones
            web sólidas y escalables.
          </p>
          <p>
            Cuando no estoy trabajando, me divierto experimentando con las
            últimas tecnologías, explorando nuevas herramientas, frameworks o
            simplemente jugando online con mis amigos. Siempre estoy en busca de
            oportunidades para aprender y mejorar mis habilidades, ya sea en el
            desarrollo web o en otras áreas que me interesen.
          </p>
        </div>

        <span className="iconos">
          <a style={{ color: "#EBB725" }} href="https://github.com/davidvalenciaz" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#EBB725" }} href="https://www.linkedin.com/in/juandvalenciazapata/" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#EBB725" }} href="https://davidvalenciaz.github.io/porfolio/" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/vZ2F85PP/Juan-David.jpg" alt="" />
      </picture>
    </section>
  );
};

export default JuanValencia;
