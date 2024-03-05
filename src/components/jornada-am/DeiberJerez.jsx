import { Icon } from "@iconify/react";
import React from "react";

const DeiberJerez = () => {
  return (
    <section className="sectionEstudiante1">
      <span className="talento">HACKING ÉTICO</span>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Deiber Fabián Jerez Sanchéz</h2>
          <p>
            Mi enfoque profesional se centra en la creación de interfaces
            atractivas y funcionales, así como en el desarrollo de aplicaciones
            escalables y eficientes. Mi aspiración es especializarme en la
            combinación del hacking ético con el desarrollo web. Considero que
            esta fusión no solo me permite comprender mejor la seguridad
            informática, sino también optimizar la calidad y la integridad de
            los productos que desarrollo. Durante mi proceso académico en Código
            C13 aprendí sobre React, JavaScript, HTML, CSS y PostgreSQL.
          </p>
        </div>

        <span className="iconos">
          <a style={{ color: "#95DE90" }} href="https://github.com/deiberjerez" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#95DE90" }} href="" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#95DE90" }} href="https://portafolio-nu-livid.vercel.app/" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/W18pGD5r/Deiber.png" alt="" />
      </picture>
    </section>
  );
};

export default DeiberJerez;
