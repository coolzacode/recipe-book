import { Link } from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
  return (
    <nav>
      <h1><Link to="/">All Recipes</Link></h1>
      <h1><Link to="/favorites">♡ Favorites</Link></h1>
    </nav>
  )
}

export default Nav