import './css/App.css';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
function App() {
  return (

    <div className="wrapper">
      {/* overlay */}
      <Overlay></Overlay>

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
