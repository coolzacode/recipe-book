import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Favorites from './components/Favorites.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites}/>} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        </Routes>
      </div>
    </>
  )
}

export default App