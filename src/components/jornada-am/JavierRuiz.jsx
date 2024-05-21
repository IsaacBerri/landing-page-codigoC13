import React from "react";
import Modelo3 from "../../models/Modelo3";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/524b24ft/Javier.png",
  nombre: "Javier Oswaldo Ruiz Arango",
  talento: "TRABAJO ORIENTADO AL LOGRO",
  parrafo1: `Estoy comprometido en convertirme en un desarrollador altamente
  competente, me entusiasma la constante evolución del mundo
  tecnológico. Mi objetivo principal es obtener experiencia en el
  mundo real, donde pueda poner en práctica mis conocimientos,
  aprender de profesionales experimentados y contribuir al éxito de
  proyectos desafiantes. Estoy profundamente interesado en el
  ecosistema Open Source, donde puedo colaborar con comunidades
  vibrantes, compartir mi conocimiento y contribuir a proyectos
  innovadores. He adquirido conocimientos en la automatización,
  Node.js, HTML, CSS, Java, JavaScritpt, React, GraphQL, MongoBD,
  MYSQL, SQL Power Automade, UIPath, SourceTree y MariaDB.`,
  color: "#B6B7BA",
  github: "",
  linkedin: "",
  portafolio: "",
  contratado: false
}

const JavierRuiz = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo3 info={info} />;
  }
};

export default JavierRuiz;
