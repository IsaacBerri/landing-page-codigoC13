import React from "react";
import Modelo4 from "../../models/Modelo4";

const info = {
  img: "https://i.postimg.cc/gc3WyXJJ/Robert.png",
  nombre: "Roberth Tailor Castillo Mosquera",
  talento: "ARTE Y PROGRAMACIÓN",
  parrafo1: `El arte y la programación han entrado a mi vida como una fusión,
  realizo ideas mediante el código. Me motiva intensamente el diseño
  gráfico, constantemente estoy creando proyectos nuevos que tengan
  como raiz el arte, ya sea la musica o el dibujo.`,
  parrafo2: `Mi formación en Código C13, me dejo con varios aprendizajes, como
  descubrir que tengo habilidad para tener nuevo conocimiento y así
  dar resultados rápidamente, manteniendo el estilo que se requiere en
  la industria. Las tecnologías que más domino son las siguientes:
  NextJ.S, JavaScript, Java, Node J.S y React.`,
  color: "#E74C3C",
  github: "",
  linkedin: "",
  portafolio: ""
}

const RoberthCastillo = () => {
  return (
    <Modelo4 info={info} />
  );
};

export default RoberthCastillo;
