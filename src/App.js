import './css/App.css';

function App() {
  return (
    <div className= "wrapper">
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
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
