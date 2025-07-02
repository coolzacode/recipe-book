import { useRef } from 'react'
import '../styles/cards.css'

function Cards({ recipe, index, favorites, setFavorites }) {
  const iconRefs = useRef([]);

  function handleClick(id, index) {
    const isFavorite = favorites.includes(id);
    const newFavorites = (isFavorite) ? (favorites.filter(fav => fav !== id)) : ([id, ...favorites]);
    setFavorites(newFavorites);
    const el = iconRefs.current[index];
    if(el) {
      el.classList.toggle('filled');
    }
  }

  return (
    <div className="card">
      <div className="favorite">
        <span ref={el => (iconRefs.current[index] = el)} onClick={() => handleClick(recipe.id, index)} className={"material-symbols-outlined"}>favorite</span>
      </div>
      <div className="info">
        <p className="category">{recipe.category}</p>
        <p className="name">{recipe.name}</p>
      </div>
    </div>
  )
}

export default Cards