import Recipes from '../recipes.json'
import Cards from '../components/Cards'

function Home({ favorites, setFavorites }) {
  return (
    <main>
      {Recipes.map((recipe, index) => (
        <Cards recipe={recipe} index={index} favorites={favorites} setFavorites={setFavorites} key={recipe.id} />
      ))}
    </main>
  )
}

export default Home