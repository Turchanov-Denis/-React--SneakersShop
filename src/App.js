import './css/App.css';

function App() {
  return (

    <div className="wrapper">
      {/* overlay */}
      <section className="overlay">
        <div className="overlay__body">
          <div className="overlay__title"></div>
          <div className="overlay__content">

            <div className="sneaker-item-trash">
              <div className="sneaker-item-trash__image ibg"></div>
              <div className="sneaker-item-trash__title"></div>

              <div className="sneaker-item-trash__price">
                <span>12 999 руб.</span>
              </div>
              <button className="sneaker-item__add-icon">
              </button>
            </div>
          </div>
          <div className="overlay__price-block">
            <div className="price-block__counter"></div>
            <div className="price-block__tax">
              <button className="overlay__checkout">
              </button></div>
          </div>
        </div>
      </section>

      {/* header */}
      <header className="header">
        <div className="header__body">
          <div className="header__column">
            {/* Logo component */}
            <div className="logo">
              <div className='logo__body'>
                <div className="logo__column">
                  <div className="logo__icon"> <img src="/img/logo.png"></img></div>
                </div>
                <div className="logo__column">
                  <div className="logo__title">REACT SNEAKERS</div>
                  <div className="logo__subtitle">Магазин лучших кроссовок</div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__column">
            {/* UserBar component */}
            <div className="user-bar">
              <div className="user-bar__body">
                <div className="user-bar__column"><div className="user-bar__trash trash">
                  <div className="trash">
                    <a href="" className="trash__icon"> <img src="/img/user-bar-icon/trash.svg"></img></a>
                    <div className="trash__count">0p</div>
                  </div>
                </div></div>
                <div className="user-bar__column"><div className="user-bar__favorite-item"><img src="/img/user-bar-icon/favorite.svg"></img></div></div>
                <div className="user-bar__column"><div className="user-bar__profile"><img src="/img/user-bar-icon/user-profile.svg"></img></div></div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
        </div>
      </section>
    </div>
  );
}

export default App;
