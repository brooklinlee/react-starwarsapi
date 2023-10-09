import './App.css'
import { Route, Routes } from 'react-router-dom'

import NavBar from './navbar/NavBar'
import StarshipList from './StarshipList/StarshipList'
import StarshipDetails from './StarshipDetails/StarshipDetails'


function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/starships' element={<StarshipList />} />
      <Route path="/starships/:starshipId" element={<StarshipDetails />} />
    </Routes>
    </>
  )
}

export default App
