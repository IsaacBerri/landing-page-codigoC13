import React from "react";
import Modelo2 from "../../models/Modelo2";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/rFJ2bB52/Ximena.png",
  nombre: "Ximena Ortega Molina",
  talento: "MANIPULACIÓN DE DATOS",
  parrafo1: `Soy una apasionada desarrolladora web junior con experiencia sólida
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
  todos.`,
  color: "#C35687",
  github: "https://github.com/4910247Xro",
  linkedin: "https://www.linkedin.com/in/ximena-ortega-2018552b7/",
  portafolio: "https://portafolio2-delta.vercel.app/"
}

const XimenaOrtega = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo2 info={info} />;
  }
};

export default XimenaOrtega;
