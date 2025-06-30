import '../styles/cards.css'

function Cards() {

  return (
    <main>
      <div className="card">
        <div className="favorite">
          <p>♡</p>
        </div>
        <div className="info">
          <p className="category">category</p>
          <p className="name">name</p>
        </div>
      </div>
    </main>
  )
}

export default Cards