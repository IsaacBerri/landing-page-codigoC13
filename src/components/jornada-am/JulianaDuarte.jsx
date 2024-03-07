import React from "react";
import Modelo1 from "../../models/Modelo1";

const info = {
  img: "https://i.postimg.cc/Y0NBtVVg/Juliana.png",
  nombre: "Juliana Duarte Higuita",
  talento: "BASES DE DATOS",
  parrafo1: `Estudiante actual de código C13, conociendo y aprendiendo los
  recursos básicos del desarrollo de software para tener más
  posibilidades de lo que me apasiona en el mundo de las TI, mi
  experiencia como estudiante han sido muchas tanto en la parte
  técnica como socioemocional, ya que me ha ayudado a conocerme en el
  mundo laboral y tener un buen desempeño ante la sociedad y creería
  que lo que me apasiona hasta el momento es la base de datos porque
  es la que brinda un buen servicio y seguridad al usuario hacía las
  empresas.`,
  color: "#ffff00",
  github: "https://github.com/JULIDUARTE",
  linkedin: "https://www.linkedin.com/in/juliana-duarte-higuita-a81ab0284/",
  portafolio: ""
}

const JulianaDuarte = () => {
  return (
    <Modelo1 info={info} />
  );
};

export default JulianaDuarte;
