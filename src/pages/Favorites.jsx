import Recipes from '../recipes.json'
import Cards from '../components/Cards';

function Favorites({ favorites, setFavorites }) {
  const favoriteRecipes = Recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <>
      {favoriteRecipes.length > 0 ? ( 
        favoriteRecipes.map((recipe) => (
        <Cards recipe={recipe} favorites={favorites} setFavorites={setFavorites} key={recipe.id} />
      ))) : (
        <div>
        No favorites!
      </div>
      )}
    </>
  )
}

export default Favorites