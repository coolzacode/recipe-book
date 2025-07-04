import { useState } from 'react'
import '../styles/cards.css'

function Cards({ recipe, favorites, setFavorites }) {
  const [visible, setVisible] = useState(false);

  function handleClick(id) {
    const isFavorite = favorites.includes(id);
    const newFavorites = (isFavorite) ? (favorites.filter(fav => fav !== id)) : ([id, ...favorites]);
    setFavorites(newFavorites);
  }

  return (
    <>
    <div className="card">
      <div className="favorite">
        <span 
          onClick={() => handleClick(recipe.id)} 
          className={`material-symbols-outlined ${favorites.includes(recipe.id) ? "filled" : ""}`}>
          favorite
        </span>
      </div>
      <div className="info" onClick={() => setVisible(true)}>
        <p className="category">{recipe.category}</p>
        <p className="name">{recipe.name}</p>
      </div>
    </div>
    {visible &&
    <>
    <section onClick={() => setVisible(false)}>
      <div className="pop-up">
        <div className="info">
          <p className="category">{recipe.category}</p>
          <p className="name">{recipe.name}</p>
        </div>
        <div className="details">
          <p className="prep-time-minutes">Time: {recipe.details.prepTimeMinutes} min</p>
          <p className="calories">Calories: {recipe.details.calories}</p>
          <p className="ingredients"><strong>Ingredients:</strong> {recipe.details.ingredients.join(", ")}</p>
          <p className="directions"><strong>Directions:</strong> {recipe.details.directions}</p>
        </div>
      </div>
    </section>
    </>
    }
    </>
  )
}

export default Cards