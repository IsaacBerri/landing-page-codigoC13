import { Icon } from "@iconify/react";
import React from "react";

const LauraAlvarez = () => {
  return (
    <section className="sectionEstudiante2">
      <span className="talento">APRENDIZAJE VELOZ</span>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/LshSjxYK/Laura.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Laura Melisa Álvarez Úsuga</h2>
          <p>
            Soy una estudiante de Bioingeniería con un apasionado interés en la
            programación. Mi visión es combinar estos dos campos para crear
            soluciones innovadoras y sostenibles. Planeo aplicar la programación
            en mi carrera para diseñar dispositivos médicos avanzados, optimizar
            la gestión de recursos biológicos y contribuir al bienestar de las
            personas, mientras mantengo un fuerte enfoque en la sostenibilidad y
            el respeto por el medio ambiente. Usaré mis habilidades técnicas
            para marcar una diferencia significativa en el campo de la
            Bioingeniería y en la calidad de vida de las personas. Me gustaria
            adquirir experiencia laboral para adentrarme más a este mundo,
            actualmente mis conocimientos son: Python, Javascript, HTML, CSS y
            Java.
          </p>
        </div>
        <span className="iconos">
          <a style={{ color: "#D08AFF" }} href="" target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: "#D08AFF" }} href="" target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: "#D08AFF" }} href="" target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default LauraAlvarez;
