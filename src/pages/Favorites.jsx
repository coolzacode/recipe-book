import Recipes from '../recipes.json'
import Cards from '../components/Cards';
import '../styles/favorites.css';

function Favorites({ favorites, setFavorites }) {
  const favoriteRecipes = Recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <main className="fav-main">
      {favoriteRecipes.length > 0 ? ( 
        favoriteRecipes.map((recipe) => (
        <Cards recipe={recipe} favorites={favorites} setFavorites={setFavorites} key={recipe.id} />
      ))) : (
        <div className="fav-none">
          No favorites!
        </div>
      )}
    </main>
  )
}

export default Favorites