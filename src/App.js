import React, { useState, useEffect } from 'react';
import './css/App.css';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';






function App() {
  // const dataSneaker = await fetch("https://6341ed4620f1f9d7997bd569.mockapi.io/Sneakers").then(response => { response.json() })
  const [dataSneaker, setDataSneaker] = useState([]); // data in content
  const [trashSneaker, setTrashSneaker] = useState([]); // data in trash bin
  const [searchValue, setSearchValue] = useState('')
  const [trashOpened, settrashOpened] = useState(false); // menage overlay

  const addToShoppingCart = (obj) => {
    // setTrashSneaker(trashSneaker.concat([obj]))
    setTrashSneaker(prev => [...prev, obj])
    console.log([...trashSneaker, obj])
  }

  const removeToShoppingCart = (obj) => {
    // setTrashSneaker(trashSneaker.concat([obj]))
    setTrashSneaker(prev => prev.filter((item) =>
      obj.id != item.id
    ))

  }

  function createContent(dataSneaker) {
    try {
      return dataSneaker.map((item) =>
      (<div className='content__column'><Card item={item} key={item.id} onClick={(obj) => {
        addToShoppingCart(obj)
      }} onRepeatClick={(obj) => {
        removeToShoppingCart(obj)
      }}></Card></div>)
      )
    }
    catch (err) {
      console.log(err)
    }
  }

  function handleTrash() {
    settrashOpened(!trashOpened)
  }

  // get data by Api
  useEffect(() => {
    fetch("https://6341ed4620f1f9d7997bd569.mockapi.io/Sneakers")
      .then(response => response.json()).then(result => setDataSneaker(result));
  }, [])



  return (

    <div className="wrapper">
      {/* overlay */}
      {/* show/hide trash bin */}
      {trashOpened && <Overlay trashSneaker={trashSneaker} onTrashClick={() => { handleTrash() }} onRepeatClick={(obj) => {
        removeToShoppingCart(obj)
      }}></Overlay>}

      {/* header */}
      <Header onTrashClick={() => { handleTrash() }}></Header>
      {/* section with slider */}
      {/* <section className="slider">
        <div className="container">
          <div className="slider__content">
            <img src="/img/banner-content/banner-image_01.png"></img>

          </div>
        </div>
      </section> */}
      {/* section with main content */}
      <section className="content">
        <div className="container">
          <div className="content__header">
            <div className="content__title">Все кроссовки</div>
            <input className="content__find-input" placeholder='Поиск...'></input>
          </div>
          {/* item */}
          <div className='content__body'>
            {/* {createContent(dataSneaker)} */}
            {
              createContent(dataSneaker, setTrashSneaker, trashSneaker)
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
