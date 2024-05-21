import { Icon } from "@iconify/react";
import React from "react";
import Modelo2 from "../../models/Modelo2";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";

const info = {
  img: "https://i.postimg.cc/LshSjxYK/Laura.png",
  nombre: "Laura Melisa Álvarez Úsuga",
  talento: "APRENDIZAJE VELOZ",
  parrafo1: `Soy una estudiante de Bioingeniería con un apasionado interés en la
  programación. Mi visión es combinar estos dos campos para crear
  soluciones innovadoras y sostenibles. Planeo aplicar la programación
  en mi carrera para diseñar dispositivos médicos avanzados, optimizar
  la gestión de recursos biológicos y contribuir al bienestar de las
  personas, mientras mantengo un fuerte enfoque en la sostenibilidad y
  el respeto por el medio ambiente. Usaré mis habilidades técnicas
  para marcar una diferencia significativa en el campo de la
  Bioingeniería y en la calidad de vida de las personas. Me gustaria
  adquirir experiencia laboral para adentrarme más a este mundo,
  actualmente mis conocimientos son: Python, Javascript, HTML, CSS y
  Java.`,
  color: "#D08AFF",
  github: "",
  linkedin: "",
  portafolio: "",
  contratado: false
}

const LauraAlvarez = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo2 info={info} />;
  }
};

export default LauraAlvarez;
