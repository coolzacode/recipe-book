import '../styles/cards.css'
import Recipes from '../recipes.json'

function Cards() {

  return (
    <main>
      {Recipes && Recipes.map( recipe => (
        <div key={recipe.id} className="card">
          <div className="favorite">
            <p>♡</p>
          </div>
          <div className="info">
            <p className="category">{recipe.category}</p>
            <p className="name">{recipe.name}</p>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Cards