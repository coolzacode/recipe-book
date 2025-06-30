import '../styles/cards.css'
import Recipes from '../recipes.json'

function Cards() {
  let favorites = [];

  function handleClick(id){
    if(favorites.includes(id)){
      favorites = favorites.filter(favorite => favorite !== id);
    }else {
      favorites.unshift(id);
    }
    console.log(favorites);
  }

  return (
    <main>
      {Recipes && Recipes.map( recipe => (
        <div key={recipe.id} className="card">
          <div className="favorite">
            <p onClick={() => handleClick(recipe.id)}>♡</p>
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