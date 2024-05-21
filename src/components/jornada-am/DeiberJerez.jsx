import React from "react";
import Modelo1 from "../../models/Modelo1";
import Modelo4 from "../../models/Modelo4";
import useControllerRender from "../../hooks/useControllerRender";


const info = {
  img: "https://i.postimg.cc/W18pGD5r/Deiber.png",
  nombre: "Deiber Fabián Jerez Sanchéz",
  talento: "HACKING ÉTICO",
  parrafo1: `Mi enfoque profesional se centra en la creación de interfaces
  atractivas y funcionales, así como en el desarrollo de aplicaciones
  escalables y eficientes. Mi aspiración es especializarme en la
  combinación del hacking ético con el desarrollo web. Considero que
  esta fusión no solo me permite comprender mejor la seguridad
  informática, sino también optimizar la calidad y la integridad de
  los productos que desarrollo. Durante mi proceso académico en Código
  C13 aprendí sobre React, JavaScript, HTML, CSS y PostgreSQL.`,
  color: "#95DE90",
  github: "https://github.com/deiberjerez",
  linkedin: "https://www.linkedin.com/in/deiber-jerez/",
  portafolio: "https://portafolio-nu-livid.vercel.app/",
  contratado: false
}

const DeiberJerez = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo1 info={info} />;
  }
};

export default DeiberJerez;
