import './App.css'
import { Route, Routes } from 'react-router-dom'

import StarshipList from './StarshipList/StarshipList'
import StarshipDetails from './StarshipDetails/StarshipDetails'


function App() {

  return (
    <Routes>
      <Route path='/starships' element={<StarshipList />} />
      <Route path='/starships/:id/' element={<StarshipDetails />} />
    </Routes>
  )
}

export default App
