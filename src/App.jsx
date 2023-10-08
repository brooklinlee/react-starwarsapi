import './App.css'
import { Route, Routes } from 'react-router-dom'

import StarshipList from './StarshipList/StarshipList'


function App() {

  return (

    <Routes>
      <Route path='/starships' element={<StarshipList />} />
    </Routes>

  )
}

export default App
