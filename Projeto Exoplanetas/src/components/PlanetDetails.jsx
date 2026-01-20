import React from 'react'

export default function PlanetDetails({planet}){
  if(!planet) return <div className="container">Selecione um exoplaneta para ver detalhes.</div>

  return (
    <div className="container">
      <div className="card">
        <h2>{planet.pl_name || planet.name}</h2>
        <ul>
          <li>Massa: {planet.pl_bmassj ?? planet.mass ?? '—'}</li>
          <li>Raio: {planet.pl_radj ?? planet.radius ?? '—'}</li>
          <li>Período orbital: {planet.pl_orbper ?? '—'}</li>
          <li>Distância (pc): {planet.sy_dist ?? '—'}</li>
          <li>Método: {planet.discoverymethod || planet.pl_discmethod || '—'}</li>
          <li>Ano de descoberta: {planet.disc_year || planet.discovery_year || '—'}</li>
        </ul>
      </div>
    </div>
  )
}
