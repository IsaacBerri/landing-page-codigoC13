import React from "react";
import Modelo3 from "../../models/Modelo3";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/G2WbLvp0/Deivy.png",
  nombre: "Deivy Patiño Rodriguez",
  talento: "Contribución Grupal Autónoma",
  parrafo1: `Me apasiona el mundo de la tecnología, busco constantemente mejorar
  mis habilidades y destrezas. Actualmente, me he especializado en las
  siguientes tecnologías: JavaScript, Astro, MongoDB, HTML, CSS,
  Express, React, Tailwind y Node J.S. pero no me cierro a conocer más
  sobre este mundo, estoy dispuesto para aprender sobre otras
  tecnologías. Mi conocimiento tiene como cimientos proyectos propios,
  procesos de aprendizaje autodidactas y el técnico en desarrollo de
  software, pero estoy ampliando mis conocimientos estudiando la
  Ingeniería de Software en la Universidad Pascual Bravo. Considero
  que el código es una herramienta que permite el avance social y
  personal, por lo que también soy tutor voluntario para enseñar
  programación en la Fundación Antivirus para la Deserción.`,
  color: "#79DAC8",
  github: "https://github.com/Deiiivy",
  linkedin: "https://www.linkedin.com/in/deivy-programmer/",
  portafolio: "https://magenta-donut-086a13.netlify.app/",
  contratado: false
}

const DeivyPatiño = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo3 info={info} />;
  }
};

export default DeivyPatiño;
