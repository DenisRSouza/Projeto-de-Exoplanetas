import React, {useEffect, useState} from 'react'
import Filters from '../components/Filters'
import PlanetList from '../components/PlanetList'
import PlanetDetails from '../components/PlanetDetails'
import {fetchExoplanets} from '../services/api'

export default function Home(){
  const [filters, setFilters] = useState({})
  const [planets, setPlanets] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    let active = true
    fetchExoplanets(filters).then(data=>{
      if(active) setPlanets(data)
    })
    return ()=>{active=false}
  },[filters])

  return (
    <section>
      <Filters filters={filters} onChange={setFilters} />
      <PlanetList planets={planets || []} />
      <PlanetDetails planet={selected} />
    </section>
  )
}
