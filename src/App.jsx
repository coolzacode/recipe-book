import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import Favorites from './components/Favorites.jsx'

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  )
}

export default App