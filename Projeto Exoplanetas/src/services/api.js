// Serviço para buscar exoplanetas (NASA Exoplanet Archive)
// Observação: a API do Exoplanet Archive usa TAP/SQL; aqui fornecemos uma função wrapper.

const BASE = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync'

export async function fetchExoplanets(filters = {}){
  try{
    // Basic example query: select some useful columns and limit results
    // Para produção, construa queries dinâmicas conforme filtros
    const query = `select pl_name,disc_year,discoverymethod,pl_bmassj,pl_radj,pl_orbper,sy_dist from pscomppars limit 100`;
    const url = `${BASE}?query=${encodeURIComponent(query)}&format=json`
    const res = await fetch(url)
    if(!res.ok) throw new Error('Erro ao buscar dados')
    const data = await res.json()
    return data
  }catch(e){
    console.error(e)
    return []
  }
}
