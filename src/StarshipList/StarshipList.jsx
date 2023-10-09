import { useState, useEffect } from 'react'
import { getAllStarships } from '../services/sw-api'
import { Link } from 'react-router-dom'

// import StarshipDetails from '../StarshipDetails/StarshipDetails'

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
    <h1>STAR WARS STARSHIPS</h1>
      {allStarships.map((starship, id) => (
        <div key={id}>
          <Link to={`/starships/${starship.url.split('/').slice(-2, -1)}`}>{starship.name}</Link>

        </div>
        ))  
      }
    </>
  )
}

export default StarshipList

