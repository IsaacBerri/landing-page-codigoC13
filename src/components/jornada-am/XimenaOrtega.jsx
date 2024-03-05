import { Icon } from "@iconify/react";
import React from "react";

const XimenaOrtega = () => {
  return (
    <section className="sectionEstudiante2">
      <span className="talento">MANIPULACIÓN DE DATOS</span>
      <picture className="estudianteImg">
        <img src="https://i.postimg.cc/rFJ2bB52/Ximena.png" alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>Ximena Ortega Molina</h2>
          <p>
            Soy una apasionada desarrolladora web junior con experiencia sólida
            en la gestión de datos y desarrollo frontend. Me especializo en la
            creación de interfaces de usuario atractivas y funcionales,
            combinando habilidades en HTML, CSS y JavaScript. He trabajado en
            proyectos que involucran la manipulación eficiente de datos,
            utilizando tecnologías como SQL y MongoDB. Mi enfoque centrado en el
            usuario y mi capacidad para traducir requisitos comerciales en
            soluciones tecnológicas efectivas me destacan como una profesional
            proactiva y comprometida con la excelencia en el desarrollo web. Soy
            una entusiasta creadora de páginas web que se especializa en hacer
            que las cosas se vean bonitas y funcionen bien. Me encanta diseñar
            interfaces que sean fáciles de usar. También me he dedicado a
            organizar y manejar datos para que todo funcione de manera suave en
            la parte frontal de los sitios web. Siempre estoy emocionada por
            aprender y hacer que las experiencias en línea sean geniales para
            todos.
          </p>
        </div>
        <span className="iconos">
          <a
            style={{ color: "#C35687" }}
            href="https://github.com/4910247Xro"
            target="_blank"
          >
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a
            style={{ color: "#C35687" }}
            href="https://www.linkedin.com/in/ximena-ortega-2018552b7/"
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a
            style={{ color: "#C35687" }}
            href="https://portafolio2-delta.vercel.app/"
            target="_blank"
          >
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  );
};

export default XimenaOrtega;
