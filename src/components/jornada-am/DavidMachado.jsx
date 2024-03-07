import React from "react";
import Modelo3 from "../../models/Modelo3";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/zBg1c3Fx/Machado.png",
  nombre: "David Alejandro Machado",
  talento: "ÉTICA PROFESIONAL",
  parrafo1: `Soy un programador de nivel junior con 1 año de experiencia en
  desarrollo web, egresado de código C13 academy, punto que me permite
  asegurar mis conocimientos en diferentes lenguajes de programación,
  como lo son Java, JavaScript, html, css, entre otros; También cuento
  con conocimientos previos en bases de datos SQL y NoSQL`,
  parrafo2: `Soy una persona tranquila que prefiere lo rural, mi visión está
  dirigida hacia tecnología avanzada que nos permita apaciguar y
  revertir todo el daño directo o indirecto que puede causar el ser
  humano en sus actividades diarias.`,
  parrafo3: `Destaco la curiosidad que me permite explorar y encontrar todo tipo
  de conocimiento que me llame la atención. Tengo un buen desempeño
  trabajando en equipo, y me gusta mucho aprender enseñando a los
  demás; Es fácil y gratificante para mi hacer todo tipo de procesos
  de capacitación y autocapacitación, convirtiéndome en una persona
  multifacética, capaz de llevar a cabo diferentes tareas en diversos
  ámbitos.`,
  color: "#210210",
  github: "",
  linkedin: "",
  portafolio: ""
}

const DavidMachado = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo3 info={info} />;
  }
};

export default DavidMachado;
