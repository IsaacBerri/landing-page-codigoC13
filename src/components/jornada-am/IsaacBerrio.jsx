import { Icon } from "@iconify/react";
import React from "react";

const IsaacBerrio = () => {
  return (
    <section className="sectionEstudiante4">
      <span className="talento">EXPERIENCIA FREELANCER</span>
      <h2>Isaac Yamit Berrio Rodelo</h2>
      <article className="estudiante">
        <div className="estudianteInfo">
          <p>
            Soy un desarrollador full stack junior con sólidos conocimientos en
            tecnologías del front-end y back-end. He acumulado experiencia
            trabajando como freelancer mientras fortalecía mis habilidades.
            Durante los últimos 2 años, me he dedicado al estudio de
            programación en plataformas como Coderhouse, Platzi y Código C13.
          </p>
          <picture className="estudianteImg">
            <img src="https://i.postimg.cc/MTBnKN2x/IsaacB.png" alt="" />
            <span className="iconos">
              <a style={{ color: "#FF9800" }} href="https://github.com/IsaacBerri" target="_blank">
                <Icon icon="jam:github" width="50" height="50" />
              </a>
              <a style={{ color: "#FF9800" }} href="https://www.linkedin.com/in/isaacberrio/" target="_blank">
                <Icon icon="mdi:linkedin" width="50" height="50" />
              </a>
              <a style={{ color: "#FF9800" }} href="https://new-portfolio-isaacberri.vercel.app/" target="_blank">
                <Icon icon="clarity:briefcase-solid" width="50" height="50" />
              </a>
            </span>
          </picture>
          <p>
            Busco oportunidades donde pueda aplicar mis habilidades técnicas,
            colaborar en equipos talentosos y contribuir al desarrollo de
            productos innovadores. Ansío sumergirme en proyectos desafiantes que
            impulsen mi crecimiento profesional y hagan una diferencia
            significativa. ¡Estoy listo para ser parte de tu equipo y aprender
            de experiencias enriquecedoras!
          </p>
        </div>
      </article>
    </section>
  );
};

export default IsaacBerrio;
