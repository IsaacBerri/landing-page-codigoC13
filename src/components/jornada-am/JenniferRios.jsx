import React from "react";
import Modelo4 from "../../models/Modelo4";

const info = {
  img: "https://i.postimg.cc/L5FMKRy2/Rios.png",
  nombre: "Jennifer Rios Calle",
  talento: "SOLUCIONES INNOVADORAS",
  parrafo1: `Desarrollador Web Junior entusiasta con una mente creativa y un
  firme compromiso con el aprendizaje y la colaboración en equipo. Mi
  pasión por la tecnología se refleja en mi constante búsqueda de
  conocimientos y en mi voluntad de enfrentar nuevos desafíos. A
  través de mi trabajo, he desarrollado habilidades técnicas sólidas y
  he aprendido a colaborar efectivamente en entornos
  multidisciplinarios. Estoy emocionado por seguir creciendo
  profesionalmente y contribuir de manera significativa en proyectos
  innovadores y dinámicos.`,
  parrafo2: `Mi compromiso con la excelencia se refleja en mi búsqueda constante
  de aprendizaje y colaboración, impulsando la innovación en equipo.
  Mi meta es no solo crecer profesionalmente, sino también dejar una
  huella significativa en entornos dinámicos y desafiantes, donde mi
  pasión por encontrar soluciones innovadoras pueda brillar y generar
  un impacto duradero.`,
  color: "#0A9B94",
  github: "https://github.com/Rios06",
  linkedin: "https://www.linkedin.com/in/jennifer-rios-calle-300422296/",
  portafolio: "https://my-portafolio-olive-six.vercel.app/",
  contratado: false
}

const JenniferRios = () => {
  return (
    <Modelo4 info={info} />
  );
};

export default JenniferRios;
