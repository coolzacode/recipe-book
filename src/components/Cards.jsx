import '../styles/cards.css'

function Cards({ recipe, favorites, setFavorites }) {

  function handleClick(id) {
    const isFavorite = favorites.includes(id);
    const newFavorites = (isFavorite) ? (favorites.filter(fav => fav !== id)) : ([id, ...favorites]);
    setFavorites(newFavorites);
  }

  return (
    <div className="card">
      <div className="favorite">
        <span 
          onClick={() => handleClick(recipe.id)} 
          className={`material-symbols-outlined ${favorites.includes(recipe.id) ? "filled" : ""}`}>
          favorite
        </span>
      </div>
      <div className="info">
        <p className="category">{recipe.category}</p>
        <p className="name">{recipe.name}</p>
      </div>
    </div>
  )
}

export default Cards