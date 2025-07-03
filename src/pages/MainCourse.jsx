import Recipes from '../recipes.json'
import Cards from '../components/Cards.jsx'

function MainCourse({ favorites, setFavorites }) {
  return (
    <main>
      {Recipes.map(recipe => recipe.category.startsWith("Main Course") && (
        <Cards recipe={recipe} favorites={favorites} setFavorites={setFavorites} key={recipe.id} />
      ))}
    </main>
  )
}

export default MainCourse