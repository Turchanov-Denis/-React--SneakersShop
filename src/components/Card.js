
function Card () {
    return (
      <div className="sneaker-item">
      <button className="sneaker-item__favorite-icon  ibg"></button>
      <div className="sneaker-item__image ibg" style={{ backgroundImage: "url('/img/content/sneakers/sneaker_01.png')" }}></div>
      <div className="sneaker-item__title">
        <p>Мужские Кроссовки</p>
        <p>Nike Blazer Mid Suede</p></div>
      <div className="sneaker-item__block">
        <div className="sneaker-item__price">
          <p>Price</p>
          <span>12 999 руб.</span>
        </div>
        <button className="sneaker-item__add-icon ibg"></button>
      </div>
    </div>
  )
}

export default Card;