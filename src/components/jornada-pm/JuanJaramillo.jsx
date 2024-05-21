import React from "react";
import Modelo1 from "../../models/Modelo1";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/s20VLkdg/Daniel.png",
  nombre: "Juan Daniel Jaramillo Echavarria",
  talento: "MÁS DE DOS AÑOS DE EXPERIENCIA",
  parrafo1: `Apasionado por la tecnología y la modernización desde pequeño, con
  gran gusto por los deportes como el fútbol y el baloncesto. Soy
  técnico en mantenimiento de cómputo y desarrollador de software, con
  más de dos años de experiencia en el área de soporte TI. En mi
  transcurso en la academia Código C13 realicé varios proyectos que
  potencializaron mi lógica en programación, también el trabajo en
  equipo con el marco de trabajo SCRUM, esto mediante a los lenguajes
  de programación como: JavaScript, Java y PostgreSQL.`,
  color: "#7eff28",
  github: "",
  linkedin: "",
  portafolio: "",
  contratado: false
}

const JuanJaramillo = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo1 info={info} />;
  }
};

export default JuanJaramillo;
