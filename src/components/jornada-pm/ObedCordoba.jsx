import React from "react";
import Modelo4 from "../../models/Modelo4";

const info = {
  img: "https://i.postimg.cc/9fShbyZ4/Obed-Cordoba-fotor-bg-remover-20240301154837.png",
  nombre: "Obed Córdoba Agualimpia",
  talento: "ATENCIÓN AL DETALLE",
  parrafo1: `Bachiller técnico con énfasis en programación de software, con
  conocimientos en diseño gráfico y lógica en programación. Con
  habilidades para el manejo de herramientas de office nivel medio.
  Con competencias como atención al detalle, seguimiento de
  instrucciones. Interés ocupacional en áreas de diseño y
  programación.`,
  parrafo2: `Conocimientos: C, C++, Java, JavaScript, React, Vue, SQL, MongoDB,
  HTML, CSS, Git, Android y Python. Sotfware: Ofimática, Inkskape,
  Herramientas de Google, Visual Studio Code y Herramientas Open
  Source de diseño`,
  color: "#5E4E4D",
  github: "",
  linkedin: "",
  portafolio: ""
}

const ObedCordoba = () => {
  return (
    <Modelo4 info={info} />
  );
};

export default ObedCordoba;
