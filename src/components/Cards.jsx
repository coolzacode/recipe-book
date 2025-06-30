import { useRef } from 'react'
import '../styles/cards.css'
import Recipes from '../recipes.json'

function Cards() {
  const iconRefs = useRef([]);
  let favorites = [];

  function handleClick(id, index) {
    if(favorites.includes(id)){
      favorites = favorites.filter(favorite => favorite !== id);
    } else {
      favorites.unshift(id);
    }
    console.log(favorites);
    const el = iconRefs.current[index];
    if(el) {
      el.classList.toggle('filled');
    }
  }

  return (
    <main>
      {Recipes && Recipes.map( (recipe, index) => (
        <div key={recipe.id} className="card">
          <div className="favorite">
            <span ref={el => (iconRefs.current[index] = el)} onClick={() => handleClick(recipe.id, index)} className={"material-symbols-outlined"}>favorite</span>
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