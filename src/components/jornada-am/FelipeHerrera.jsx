import React from "react";
import Modelo1 from "../../models/Modelo1";

const info = {
  img: "https://i.postimg.cc/MKbzwM24/Felipe.png",
  nombre: "Felipe Herrera Perea",
  talento: "PRODUCTIVIDAD",
  parrafo1: `Soy un desarrollador apasionado que encuentra su mayor inspiración
  entre líneas de código y algoritmos desafiantes. Cuando no estoy
  inmerso en la programación, disfruto del aire libre y el deporte,
  creyendo fielmente en mantener un equilibrio entre mente y cuerpo.
  Además, soy un ávido lector y he adquirido conocimiento técnico
  sobre los principios SOLID, los fundamentos de la arquitectura web,
  patrones de diseño aplicado a la programación orientada a objetos;
  aplico estos conocimientos en las tecnologías del stack MERN, tengo
  el conocimiento en poder generar automatización(RPA) para el
  aprovechamiento del tiempo y tener un alto nivel de productividad.`,
  color: "#8109C3",
  github: "",
  linkedin: "",
  portafolio: ""
}

const FelipeHerrera = () => {
  return (
    <Modelo1 info={info} />
  );
};

export default FelipeHerrera;
