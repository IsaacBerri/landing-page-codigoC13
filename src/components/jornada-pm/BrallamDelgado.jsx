import { Icon } from "@iconify/react";
import React from "react";
import Modelo4 from "../../models/Modelo4";

const info = {
  img: "https://i.postimg.cc/8zNPfdmN/Brallam.png",
  nombre: "Brallam Estiven Delgado Burtica",
  talento: "FRONT-END",
  parrafo1: `Como recién graduado de un bootcamp, tengo una sólida comprensión de
  marcos de trabajo ágiles como Scrum y experiencia práctica
  trabajando en equipos colaborativos. Durante mi formación adquirí
  habilidades en desarrollo utilizando tecnologías como Java,
  JavaScript y Frameworks como React. Quisiera enfocar mi trayectoria
  laboral en el desarrollo web, más específicamente en el Frontend. Me
  motiva la idea de crear experiencias digitales impactantes y
  accesibles para los usuarios`,
  parrafo2: `Además, cuento con experiencia en el uso de tecnologías Backend como
  Express, así como en el diseño y gestión de bases de datos
  utilizando PostgreSQL. A través de mi curiosidad innata, estoy
  dispuesto a sumergirme en nuevos proyectos, aprender de mis errores
  y colaborar con el equipo para alcanzar objetivos comunes. Estoy
  emocionado por la oportunidad de ampliar mis habilidades y
  conocimientos en el mundo laboral. Estoy comprometido a seguir
  aprendiendo y creciendo como profesional en el campo del desarrollo.`,
  color: "#030305",
  github: "",
  linkedin: "",
  portafolio: "",
  contratado: false
}

const BrallamDelgado = () => {
  return (
    <Modelo4 info={info} />
  );
};

export default BrallamDelgado;
