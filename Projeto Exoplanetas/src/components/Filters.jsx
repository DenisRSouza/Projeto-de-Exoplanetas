import React from 'react'

export default function Filters({filters, onChange}){
  return (
    <div className="container" style={{marginBottom:16}}>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <select value={filters.method||''} onChange={e=>onChange({...filters, method:e.target.value})}>
          <option value="">Todos os métodos</option>
          <option value="Transit">Transit</option>
          <option value="Radial Velocity">Radial Velocity</option>
          <option value="Imaging">Imaging</option>
        </select>
        <input type="number" placeholder="Ano mínimo" value={filters.year||''} onChange={e=>onChange({...filters, year: e.target.value})} />
      </div>
    </div>
  )
}
