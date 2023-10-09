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

  if (!starshipDetails.name) return <h1>Loading ...</h1>

  return (  
    <>
    <h4>
      Name: {starshipDetails.name}
    </h4>
    <h4>
      Model: {starshipDetails.model}
    </h4>
    <Link to={`/starships/`}>RETURN</Link>
    </>
  )
}

export default StarshipDetails