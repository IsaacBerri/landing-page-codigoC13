import { Icon } from '@iconify/react'
import React from 'react'

const Modelo2 = ({info}) => {
  return (
    <section className="sectionEstudiante2">
      <span className="talento">{info.talento}</span>
      {info.contratado && <span className="contratado">CONTRATADO</span>}
      <picture className="estudianteImg">
        <img src={info.img} alt="" />
      </picture>
      <article className="estudiante">
        <div className="estudianteInfo">
          <h2>{info.nombre}</h2>
          {info.parrafo1 && <p>{info.parrafo1}</p>}
          {info.parrafo2 && <p>{info.parrafo2}</p>}
        </div>
        <span className="iconos">
          <a style={{ color: info.color }} href={info.github} target="_blank">
            <Icon icon="jam:github" width="50" height="50" />
          </a>
          <a style={{ color: info.color }} href={info.linkedin} target="_blank">
            <Icon icon="mdi:linkedin" width="50" height="50" />
          </a>
          <a style={{ color: info.color }} href={info.portafolio} target="_blank">
            <Icon icon="clarity:briefcase-solid" width="50" height="50" />
          </a>
        </span>
      </article>
    </section>
  )
}

export default Modelo2