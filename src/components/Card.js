
function Card({item}) {
  return (
    <div className="sneaker-item">
      <button className="sneaker-item__favorite-icon  ibg"></button>
      <div className="sneaker-item__image ibg" style={{ backgroundImage: "url('/img/content/sneakers/sneaker_01.png')" }}></div>
      <div className="sneaker-item__title">
        {item.title}</div>
      <div className="sneaker-item__block">
        <div className="sneaker-item__price">
          <p>Price</p>
          <span>{item.price} руб.</span>
        </div>
        <button className="sneaker-item__add-icon ibg"></button>
      </div>
    </div>
  )
}

export default Card;