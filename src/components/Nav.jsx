import { Link } from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
  return (
    <nav>
      <h1><Link to="/" className="link">All Recipes</Link></h1>
      <h1><Link to="/main-course" className="link">Main Course</Link></h1>
      <h1><Link to="/favorites" className="link">♡ Favorites</Link></h1>
    </nav>
  )
}

export default Nav