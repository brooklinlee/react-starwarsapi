import { useState, useEffect } from 'react'
import { getAllStarships } from '../services/sw-api'

const StarshipList = () => {
  const [allStarships, setAllStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])

  if(!allStarships.length) return <h1>Loading all Starships ...</h1>

  return (  
    <>
      {allStarships.map((starship, idx) => (
        <div key={idx}>
          <h4>{starship.name}</h4>
        </div>
        ))  
      }
    </>
  )
}

export default StarshipList

