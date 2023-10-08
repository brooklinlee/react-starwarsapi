import { useState, useEffect } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { getAllStarships } from './services/sw-api'

import StarshipList from './StarshipList/StarshipList'

function App() {

  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <StarshipList />
    </>
  )
}

export default App
