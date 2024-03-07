import React from "react";
import Modelo2 from "../../models/Modelo2";

const info = {
  img: "https://i.postimg.cc/SNWxK18g/Diego.jpg",
  nombre: "Diego Andrés Arias Carmona",
  talento: "ADAPTACIÓN AL CAMBIO",
  parrafo1: `Considero que mis diez años en el campo de la música me ha dado
  habilidades que me ayudan a desempeñar mi futuro rol como
  programador full-stack, al trabajar con distintas personas y
  profesionales he aprendido a desenvolverme en equipos
  multidisciplinarios, igualmente desde mi experiencia he forjado
  cualidades para contribuir eficazmente.`,
  parrafo2: `Estoy comprometido con el aprendizaje continuo, emocionado de
  embarcarme en mi próximo desafío profesional. Mi conocimiento en
  HTML, CSS, Javascript, POO, Java, React, Express, NodeJS, SQL,
  MongoDB y PostgreSQL, aseguran mi capacidad de seguir
  potencializando las empresas donde estaré trabajando. Me interesa
  combinar y explotar formas donde la tecnología se enlace con la
  creatividad.`,
  color: "#F3C363",
  github: "https://github.com/dhiego1510",
  linkedin: "https://www.linkedin.com/in/diego-arias-car/",
  portafolio: "https://portafolio-nextjs-nine.vercel.app/"
}

const DiegoArias = () => {
  return (
   <Modelo2 info={info} />
  );
};

export default DiegoArias;
