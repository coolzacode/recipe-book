import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import Favorites from './components/Favorites.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  )
}

export default App