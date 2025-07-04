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
    <div className="pop-up" onClick={() => setVisible(false)}>
      <div className="info">
        <p className="category">{recipe.category}</p>
        <p className="name">{recipe.name}</p>
      </div>
      <div className="details">
        <p className="prep-time-minutes">{recipe.details.prepTimeMinutes}</p>
        <p className="calories">{recipe.details.calories}</p>
        <p className="ingredients">{recipe.details.ingredients}</p>
        <p className="directions">{recipe.details.directions}</p>
      </div>
    </div>
    }
    </>
  )
}

export default Cards