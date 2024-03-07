import React from "react";
import Modelo2 from './../../models/Modelo2';
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";


const info = {
  img: "https://i.postimg.cc/DwxFW9zP/Ivan.png",
  nombre: "Ivan Dario Aristizabal",
  talento: "APRENDIZAJE VELOZ",
  parrafo1: `Soy un curioso y apasionado por la tecnología y la innovación, soy
  estudiante de código C13 y en plataformas digitales como Platzi y
  Udemy. Poseo buenas habilidades de lógica de programación, que he
  adquirido y seguiré obteniendo durante los procesos. Desde muy
  pequeño siempre me ha gustado el diseño y la creación de cosas
  nuevas. Encontré en la programación un mundo en el que puedo aplicar
  esa pasión, aprendiendo de Java, Javascript, Frameworks y Bases de
  datos para ser Full-Stack; porque me el Front es la puerta de
  entrada de los usuarios y el trabajo visual me permite ser creativo
  y el Back me permite hacer funcional aquello que es visual y me
  permite fortalecer mis conocimientos. Aspiro a poder aportar
  soluciones que contribuyan a ayudar y mejorar la vida diaria de las
  personas, siempre dispuesto a enseñar y aprender el camino. para
  alcanzar los objetivos. ¡Creo en la tecnología como la mejor
  herramienta para construir un mundo mejor!`,
  color: "#B365E1",
  github: "https://github.com/IvanAristi?tab=repositories",
  linkedin: "https://www.linkedin.com/in/iv%C3%A1n-aristiz%C3%A1bal/",
  portafolio: "https://www.behance.net/ivandaaristiz/projects",
}

const IvanDario = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo2 info={info} />;
  }
};

export default IvanDario;
