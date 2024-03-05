import { Icon } from "@iconify/react";
import React from "react";

const JulianaDuarte = () => {
  return (
    <section className="sectionEstudiante1">
      <span className="talento">BASES DE DATOS</span>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Juliana Duarte Higuita</h2>
          <p>
            Estudiante actual de código C13, conociendo y aprendiendo los
            recursos básicos del desarrollo de software para tener más
            posibilidades de lo que me apasiona en el mundo de las TI, mi
            experiencia como estudiante han sido muchas tanto en la parte
            técnica como socioemocional, ya que me ha ayudado a conocerme en el
            mundo laboral y tener un buen desempeño ante la sociedad y creería
            que lo que me apasiona hasta el momento es la base de datos porque
            es la que brinda un buen servicio y seguridad al usuario hacía las
            empresas.
          </p>
        </div>
        <span className="iconos">
          <a style={{ color: "#ffff00" }} href="https://github.com/JULIDUARTE" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#ffff00" }} href="https://www.linkedin.com/in/juliana-duarte-higuita-a81ab0284/" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#ffff00" }} href="" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/Y0NBtVVg/Juliana.png" alt="" />
      </picture>
    </section>
  );
};

export default JulianaDuarte;
