import { useState, useEffect } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { getAllStarships } from './services/sw-api'

import StarshipList from './StarshipList/StarshipList'

function App() {
  // set state to all starships being rendered. Import api ability, 
  // const [allStarships, setAllStarships] = useState([])

  // useEffect(() => {
  //   // fetch starship data
  //   const fetchStarshipData = async () => {
  //     // await starship data
  //     const starshipData = await getAllStarships()
  //     setAllStarships(starshipData)
  //   // } catch (error) {
  //   //   console.error('Error fetching starship data:', error);
  //   }
  //   fetchStarshipData()
  // }, [])

  // if(!allStarships.length) return <h1>Loading all Starships ...</h1>

  return (
    <>
    <main>
      {/* <h1>STAR WARS STARSHIPS</h1>
    {allStarships.map(starship => 
      <div key={index}>
        <h4>{starship.name}</h4>
      </div>
      )
    } */}

      <StarshipList starship={getAllStarships}/>
      </main>
    </>
  )
}

export default App
