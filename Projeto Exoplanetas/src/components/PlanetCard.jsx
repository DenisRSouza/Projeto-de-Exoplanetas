import React from 'react'
import planetImg from '../assets/planet.svg'

export default function PlanetCard({planet}){
  const name = planet.pl_name || planet.name || '—'
  const year = planet.disc_year || planet.discovery_year || '—'

  return (
    <article className="card">
      <img src={planetImg} alt="planet" style={{width: '100%', borderRadius: 6}} />
      <h3>{name}</h3>
      <p>Ano: {year}</p>
    </article>
  )
}
