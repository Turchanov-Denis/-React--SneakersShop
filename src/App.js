import './css/App.css';

function App() {
  return (
    <div className="wrapper">
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
                    <div className="trash__count">100p</div>
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
                <div className="slider">

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
            </div>
        </section>
    </div>
  );
}

export default App;
