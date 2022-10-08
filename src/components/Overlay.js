

export default function Overlay({ overlayStyle, onTrashClick }) {

  //props: onTrashClick: is a callback - toggle overlay functional : hide or show
  
  return (
    <section className="overlay">
      <div className="overlay__body">
        <div className="overlay__header">
          <div className="overlay__title">Корзина</div>
          <button className="overlay__close" onClick={onTrashClick}></button>
        </div>
        <div className="overlay__content">

          <div className="sneaker-item-trash">
            <div className="sneaker-item-trash__image" style={{ backgroundImage: "url('/img/content/sneakers/sneaker_01.png')" }}></div>


            <div className="sneaker-item-trash__price">
              <div className="sneaker-item-trash__title">Мужские Кроссовки Nike Air Max 270</div>
              <span>12 999 руб.</span>
            </div>
            <button className="sneaker-item-trash__remove-icon">
            </button>
          </div>
        </div>
        <div className="overlay__price-block">
          <div className="price-block">
            <div className="price-block__label">Итого: </div>
            <div className="price-block__dash"></div>
            <div className="price-block__counter">21 498 руб. </div>
            {/* <div className="price-block__tax">Налог 5%:
              1074 руб. </div> */}
          </div>
          <div className="overlay__price-block">
            <div className="price-block">
              <div className="price-block__label price-block__label_tax">Налог 5%:</div>
              <div className="price-block__dash"></div>
              <div className="price-block__counter">1230 руб. </div>
              {/* <div className="price-block__tax">Налог 5%:
              1074 руб. </div> */}
            </div>

          </div>
        </div>

        <button className="overlay__checkout">Оформить заказ <img src='img/content/icon/arrow.svg'></img>
        </button>
      </div>
    </section>
  )
}