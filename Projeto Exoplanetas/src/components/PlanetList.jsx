import React from 'react'
import PlanetCard from './PlanetCard'

export default function PlanetList({planets}){
  if(!planets) return <div className="container">Carregando...</div>
  if(planets.length === 0) return <div className="container">Nenhum exoplaneta encontrado.</div>

  return (
    <div className="container">
      <div className="grid">
        {planets.map(p => (
          <PlanetCard key={p.pl_name || p.name} planet={p} />
        ))}
      </div>
    </div>
  )
}
