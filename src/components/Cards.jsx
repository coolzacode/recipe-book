import { useRef } from 'react'
import '../styles/cards.css'

function Cards({ recipe, index }) {
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
    <div className="card">
      <div className="favorite">
        <span ref={el => (iconRefs.current[index] = el)} onClick={() => handleClick(recipe.id, index)} className={"material-symbols-outlined"}>favorite</span>
      </div>
      <div className="info">
        <p className="category">{recipe.category}</p>
        <p className="name">{recipe.name}</p>
      </div>
    </div>
  )
}

export default Cards