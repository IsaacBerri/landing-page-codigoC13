import React from "react";
import Modelo1 from "../../models/Modelo1";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/0yy1qVCM/Santiago.png",
  nombre: "Santiago Gallego Bedoya",
  talento: "AUTOMATIZACIÓN",
  parrafo1: `Mis habilidades me han permitido liderar procesos con éxito,
  mejorando mi capacidad de comunicación asertiva, compromiso y
  enfoque en el logro de objetivos. Actualmente, estoy cursando la
  escuela de programación Código C13, donde he tenido la oportunidad
  de participar en un proyecto de automatización que ha fortalecido
  mis conocimientos técnicos en programación de lenguajes de
  scripting, bases de datos, flujos de trabajo, procesos empresariales
  y control de versiones, mientras adquiero nuevas habilidades en
  herramientas de automatización. Mi experiencia previa como auxiliar
  de farmacia me ha enseñado la importancia de brindar una excelente
  atención al cliente, habilidad que considero fundamental para el rol
  de desarrollador full stack, ya que desde esa creencia he sido capaz
  de proponer soluciones, aportar ideas y sugerir mejoras para
  proyectos.`,
  color: "#BC4646",
  github: "",
  linkedin: "",
  portafolio: ""
}

const SantiagoGallego = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo1 info={info} />;
  }
};

export default SantiagoGallego;
