import Recipes from '../recipes.json'
import Cards from '../components/Cards'

function Home() {
  return (
    <main>
      {Recipes.map((recipe, index) => (
        <Cards recipe={recipe} index={index} key={recipe.id} />
      ))}
    </main>
  )
}

export default Home