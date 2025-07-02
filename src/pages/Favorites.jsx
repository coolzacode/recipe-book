import Recipes from '../recipes.json'

function Favorites({ favorites }) {
  const favoriteRecipes = Recipes.filter(recipe => favorites.includes(recipe.id));

  // import setFavorites and update unfavorite logic
  
  return (
    <>
      {favoriteRecipes.map(recipe => (
        <div className="card">
          <div className="favorite">
            <span className="material-symbols-outlined filled">favorite</span>
          </div>
          <div className="info">
            <p className="category">{recipe.category}</p>
            <p className="name">{recipe.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Favorites