import { useState, useEffect } from 'react'
import { getAllStarships } from '../services/sw-api'

const StarshipList = (props) => {
  const [allStarships, setAllStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData)
    }
    fetchStarshipData()
  }, [])

  if(!allStarships.length) return <h1>Loading all Starships ...</h1>

  return (  
    <>
    <h1>Starship List Component</h1>
      {allStarships.map(starship => 
        <div key={starship.name}>
          <h4>{props.starship.name}</h4>
        </div>
        )
      }
    </>
  )
}

export default StarshipList
