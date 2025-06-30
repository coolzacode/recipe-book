import { useState } from 'react'
import '../styles/cards.css'
import Recipes from '../recipes.json'

function Cards() {
  // const [favorite, setFavorite] = useState([]);

  return (
    <main>
      {Recipes && Recipes.map( recipe => (
        <div key={recipe.id} className="card">
          <div className="favorite">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="info">
            <p className="category">{recipe.category}</p>
            <p className="name">{recipe.name}</p>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Cards