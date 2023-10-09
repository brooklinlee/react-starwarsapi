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

  if(!allStarships.length) return <h1 className='centered-conditional'>Loading all Starships ...</h1>

  return (  
    <main className='star-list'>
      {allStarships.map((starship, id) => (
        <div className='star-card' key={id}>
          <Link to={`/starships/${starship.url.split('/').slice(-2, -1)}`}>{starship.name}</Link>
        </div>
        ))  
      }
    </main>
  )
}

export default StarshipList

