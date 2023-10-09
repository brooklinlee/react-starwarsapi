import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarshipDetails } from "../services/sw-api"
import { Link } from 'react-router-dom'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

useEffect(() => {
  const fetchStarshipDetails = async () => {
    const starship = await getStarshipDetails(starshipId)
      setStarshipDetails(starship)
  }
  fetchStarshipDetails()
}, [starshipId])

  if (!starshipDetails.name) return <h1 className='centered-conditional'>Loading ...</h1>

  return (  
    <main className="star-details">
      <div className="detail-card"> 
        <h4>
        NAME: <span className="underline">{starshipDetails.name}</span>
      </h4>
      <h4>
        MODEL: <span className="underline">{starshipDetails.model}</span>
      </h4>
      <Link to={`/starships/`}>RETURN</Link>
    </div>
    </main>
  )
}

export default StarshipDetails