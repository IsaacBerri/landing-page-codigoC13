import React from "react";
import Modelo2 from "../../models/Modelo2";

const info = {
  img: "https://i.postimg.cc/q7WPy4Hy/Yus.png",
  nombre: "Yusleidy Blandón Caicedo",
  talento: "PORTUGUÉS B2 Y CONOCIMIENTOS EN AGILÍSIMO",
  parrafo1: `Me he sumergido en el fascinante mundo de la programación,
  explorando sus conceptos y desafiándome a mí misma con proyectos
  creativos. Además, completé un curso de Product Owner, lo que me ha
  brindado una perspectiva más amplia sobre la gestión de productos y
  la colaboración efectiva en equipos ágiles. Estoy emocionada por
  seguir aprendiendo y creciendo en estas áreas mientras contribuyo al
  desarrollo de soluciones de forma eficiente y proactiva.`,
  parrafo2: `Mis conocimientos gracias a la formación que he desempeñado en este
  tiempo es amplia, conozco de agilísimo, marcos de trabajos ágiles;
  además estoy familiarizada con JavaScript, Java, React.js, bases de
  datos SQL y estoy siempre dispuesta a aprender nuevas tecnologías.`,
  color: "#CDCAE4",
  github: "",
  linkedin: "",
  portafolio: ""
}

const YusleidyBlandon = () => {
  return (
    <Modelo2 info={info} />
  );
};

export default YusleidyBlandon;
