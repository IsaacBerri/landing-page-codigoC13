import React from "react";
import Modelo3 from "../../models/Modelo3";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/Rhw4Nq3W/Brayan.png",
  nombre: "Brayam Alberto Rendón Echavarria",
  talento: "LIDERAZGO Y TRABAJO EN EQUIPO",
  parrafo1: `Soy estudiante de Programación junior próximo a graduarme y
  actualmente cursando en la escuela Código C13, donde adquiero
  conocimientos en Java POO y Base de datos SQL, especializándome en
  lógica de programación y manejo de datos. Estoy preparado para
  enfrentar nuevos retos que me permitan sumar experiencia y
  conocimientos en este apasionante campo. Mi pasión por la tecnología
  me impulsa a aprender constantemente y a fortalecer mis habilidades
  socioemocionales combinadas con las técnicas, siempre en búsqueda de
  experiencias que enriquezcan tanto mi desarrollo profesional como
  personal.`,
  color: "#059B9A",
  github: "",
  linkedin: "",
  portafolio: ""
}

const BrayamRendon = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo3 info={info} />;
  }
};

export default BrayamRendon;
