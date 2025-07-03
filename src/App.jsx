import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import MainCourse from './pages/MainCourse.jsx'
import Favorites from './pages/Favorites.jsx'

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={
            <Home favorites={favorites} setFavorites={setFavorites} />} 
          />
          <Route path="/main-course" element={
            <MainCourse favorites={favorites} setFavorites={setFavorites} />} 
          />
          <Route path="/favorites" element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />} 
          />
        </Routes>
      </div>
    </>
  )
}

export default App