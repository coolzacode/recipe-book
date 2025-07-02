import Recipes from '../recipes.json'
import Cards from '../components/Cards';

function Favorites({ favorites }) {
  const favoriteRecipes = Recipes.filter(recipe => favorites.includes(recipe.id));

  // import setFavorites and update unfavorite logic
  
  return (
    <>
      {favoriteRecipes.map(recipe => (
        <Cards recipe={recipe} />
      ))}
    </>
  )
}

export default Favorites