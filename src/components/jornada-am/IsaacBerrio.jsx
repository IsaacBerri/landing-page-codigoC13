import React from "react";
import Modelo4 from "../../models/Modelo4";


const info = {
  img: "https://i.postimg.cc/MTBnKN2x/IsaacB.png",
  nombre: "Isaac Yamit Berrio Rodelo",
  talento: "EXPERIENCIA FREELANCER",
  parrafo1: `Soy un desarrollador full stack junior con sólidos conocimientos en
  tecnologías del front-end y back-end. He acumulado experiencia
  trabajando como freelancer mientras fortalecía mis habilidades.
  Durante los últimos 2 años, me he dedicado al estudio de
  programación en plataformas como Coderhouse, Platzi y Código C13.`,
  parrafo2: `Busco oportunidades donde pueda aplicar mis habilidades técnicas,
  colaborar en equipos talentosos y contribuir al desarrollo de
  productos innovadores. Ansío sumergirme en proyectos desafiantes que
  impulsen mi crecimiento profesional y hagan una diferencia
  significativa. ¡Estoy listo para ser parte de tu equipo y aprender
  de experiencias enriquecedoras!`,
  color: "#FF9800",
  github: "https://github.com/IsaacBerri",
  linkedin: "https://www.linkedin.com/in/isaacberrio/",
  portafolio: "https://new-portfolio-isaacberri.vercel.app/",
};


const IsaacBerrio = () => {
  return (
    <Modelo4 info={info} />
  );
};

export default IsaacBerrio;
