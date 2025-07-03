import Recipes from '../recipes.json'
import Cards from '../components/Cards';

function Favorites({ favorites, setFavorites }) {
  const favoriteRecipes = Recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <>
      {favoriteRecipes.map((recipe) => (
        <Cards recipe={recipe} favorites={favorites} setFavorites={setFavorites} key={recipe.id} />
      ))}
    </>
  )
}

export default Favorites