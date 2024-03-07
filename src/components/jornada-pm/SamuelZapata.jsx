import React from "react";
import Modelo3 from "../../models/Modelo3";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/65wNMW2h/Samuel.png",
  nombre: "Samuel Zapata Montoya",
  talento: "Ingles B1",
  parrafo1: `Llevo aprendiendo de programación aproximadamente año y medio, ser
  parte de este mundo me ha llevado a aprender y hacer del código
  parte de mis hábitos diarios. Soy estudiante de Ingeniería
  Informática en el Politécnico Colombiano Jaime Isaza Cadavid y
  apunto a ser Programador Fullstack de Código C13. Dentro de mis
  procesos formativos, he sido un lider y un colaborador destacable
  con manejo de Scrum. Mis aspiraciones está en lograr una conexión
  entre el mundo deportivo y la industria del desarrollo, por eso me
  esfuerzo cada día para mejorar en ambos campos. Algunos de mis
  conocimientos son: Java, Javascript, C, C++, entre otros.`,
  color: "#1BB5E0",
  github: "https://github.com/samuelzapatam22",
  linkedin: "https://www.linkedin.com/in/dev-samzapata/",
  portafolio: "https://samuelzapataportafolio.netlify.app/"
}

const SamuelZapata = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo3 info={info} />;
  }
};

export default SamuelZapata;
