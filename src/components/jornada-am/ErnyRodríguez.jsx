import React from "react";
import Modelo2 from "../../models/Modelo2";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";


const info = {
  img: "https://i.postimg.cc/PfDt6V6d/Erny.png",
  nombre: "Erny Rodríguez Mosquera",
  talento: "RETOS",
  parrafo1: `Después de unos meses dedicada a mis estudios de Desarrollo de
  Software, y adquirir conocimiento de lenguajes de programación como
  lo son Java y JavaScript, también obtuve conocimientos de HTML, CSS,
  React y SQL. Sintiendo más afinidad por las bases de datos; creo que
  tengo las condiciones necesarias para aportar lo mejor de mí en este
  maravilloso sector. Me encantan los retos, superarme y aprender cada
  día.`,
  color: "#FFBB80",
  github: "",
  linkedin: "",
  portafolio: "",
  contratado: false
}

const ErnyRodríguez = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo2 info={info} />;
  }
};

export default ErnyRodríguez;
