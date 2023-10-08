import { useState, useEffect } from 'react'
import { getAllStarships } from '../services/sw-api'
import { Link } from 'react-router-dom'

import StarshipDetails from '../StarshipDetails/StarshipDetails'

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
          {starship.name}
          {/* <Link to={`/starships/${starship._id}`}>{starship.name}</Link> */}
        </div>
        ))  
      }
      <StarshipDetails />
    </>
  )
}

export default StarshipList

