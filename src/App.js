import './css/App.css';
import Card from './components/Card';
import Header from './components/Header';
function App() {
  return (

    <div className="wrapper">
      {/* overlay */}
      <section className="overlay" style={{ "display": "none" }}>
        <div className="overlay__body">
          <div className="overlay__title">Корзина</div>
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

      {/* header */}
              <Header></Header>
      {/* section with slider */}
      <section className="slider">
        <div className="container">
          <div className="slider__content">
            <img src="/img/banner-content/banner-image_01.png"></img>

          </div>
        </div>
      </section>
      {/* section with main content */}
      <section className="content">
        <div className="container">
          <div className="content__header">
            <div className="content__title">Все кроссовки</div>
            <input className="content__find-input" placeholder='Поиск...'></input>
          </div>
          {/* item */}
          <div className='content__body'>
          <Card></Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
