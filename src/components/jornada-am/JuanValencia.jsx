import React from "react";
import Modelo1 from "../../models/Modelo1.jsx";
import Modelo4 from "../../models/Modelo4.jsx";
import useControllerRender from "../../hooks/useControllerRender.jsx";


const info = {
  img: "https://i.postimg.cc/vZ2F85PP/Juan-David.jpg",
  nombre: "Juan David Valencia Zapata",
  talento: "INGLES B2",
  parrafo1: `Soy un desarrollador web fullstack apasionado por crear aplicaciones
  web que sean intuitivas y eficientes. Disfruto sumergirme en
  proyectos que me desafíen y me permitan explorar nuevas ideas;
  asimismo en conversaciones que fortalezcan mi inglés. Me encanta la
  sensación de seguridad que puedo brindar a través de aplicaciones
  web sólidas y escalables.`,
  parrafo2: `Cuando no estoy trabajando, me divierto experimentando con las
  últimas tecnologías, explorando nuevas herramientas, frameworks o
  simplemente jugando online con mis amigos. Siempre estoy en busca de
  oportunidades para aprender y mejorar mis habilidades, ya sea en el
  desarrollo web o en otras áreas que me interesen.`,
  color: "#EBB725",
  github: "https://github.com/davidvalenciaz",
  linkedin: "https://www.linkedin.com/in/juandvalenciazapata/",
  portafolio: "https://davidvalenciaz.github.io/porfolio/",
};

const JuanValencia = () => {
  const { renderMovile } = useControllerRender();
  if (renderMovile) {
    return <Modelo4 info={info} />;
  } else {
    return <Modelo1 info={info} />;
  }
};

export default JuanValencia;
