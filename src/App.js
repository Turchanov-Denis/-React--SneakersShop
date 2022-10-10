import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header';
import Overlay from './components/Overlay';
import axios from 'axios'
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Favorite from './pages/Favorite';



function App() {
  const [dataSneaker, setDataSneaker] = useState([]); // data in content
  const [trashSneaker, setTrashSneaker] = useState([]); // data in trash bin
  const [searchValue, setSearchValue] = useState('')
  const [trashOpened, settrashOpened] = useState(false); // menage overlay
  const [favoriteSneaker, setFavoriteSneaker] = useState([]); // data in favorites

  const addToShoppingCart = (obj) => {
    try {
      axios.post("https://6341ed4620f1f9d7997bd569.mockapi.io/shoppingCart", obj)
      setTrashSneaker(prev => [...prev, obj])
      console.log([...trashSneaker, obj])
    } catch (error) {
      console.log(error)
    }
  }

  const removeToShoppingCart = (obj) => {
    axios.delete(`https://6341ed4620f1f9d7997bd569.mockapi.io/shoppingCart/${obj.id}`)
    setTrashSneaker(prev => prev.filter((item) =>
      obj.id != item.id
    ))

  }
  const addToFavorite = (obj) => {
    try {
      axios.post("https://6341ed4620f1f9d7997bd569.mockapi.io/favorites", obj)
      setFavoriteSneaker(prev => [...prev, obj])
      console.log([...favoriteSneaker, obj])
    } catch (error) {
      console.log(error)
    }
  }
  const removeToFavorite = (obj) => {
    axios.delete(`https://6341ed4620f1f9d7997bd569.mockapi.io/favorites/${obj.id}`)
    setFavoriteSneaker(prev => prev.filter((item) =>
      obj.id != item.id
    ))

  }
  // for search bar
  const onChangeInput = (event) => {
    setSearchValue(event.target.value)
  }

  // function createContent(dataSneaker) {
  //   try {
  //     return dataSneaker.map((item) =>
  //     (<div className='content__column'><Card item={item} key={item.id} onFavorite={(obj) => { addToFavorite(obj) }} onClick={(obj) => {
  //       addToShoppingCart(obj)
  //     }} onRepeatClick={(obj) => {
  //       removeToShoppingCart(obj)
  //     }}></Card></div>)
  //     )
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  function handleTrash() {
    settrashOpened(!trashOpened)
  }

  // get data by Api
  useEffect(() => {
    async function fetchData() {
      const trashResponse = await axios.get("https://6341ed4620f1f9d7997bd569.mockapi.io/shoppingCart")
      const favoriteResponse = await axios.get("https://6341ed4620f1f9d7997bd569.mockapi.io/favorites")
      const sneakerResponse = await axios.get("https://6341ed4620f1f9d7997bd569.mockapi.io/Sneakers")

      setDataSneaker(sneakerResponse.data)
      setTrashSneaker(trashResponse.data)
      setFavoriteSneaker(favoriteResponse.data)
    }

    fetchData()
  }
    , []
  )

  // fetch("https://6341ed4620f1f9d7997bd569.mockapi.io/Sneakers")
  //   .then(response => response.json()).then(result => setDataSneaker(result));

  return (
    <div className="wrapper">
      {/* overlay */}
      {/* show/hide trash bin */}
      {trashOpened && <Overlay trashSneaker={trashSneaker} onTrashClick={() => { handleTrash() }} onRepeatClick={(obj) => {
        removeToShoppingCart(obj)
      }}></Overlay>}

      {/* header */}
      <Header trashSneaker={trashSneaker} onTrashClick={() => { handleTrash() }}></Header>
      {/* section with slider */}
      {/* <section className="slider">
        <div className="container">
          <div className="slider__content">
            <img src="/img/banner-content/banner-image_01.png"></img>

          </div>
        </div>
      </section> */}
      {/* section with main content */}



      <Switch>
        <Route path="/" exact >
          <Home dataSneaker={dataSneaker} onChangeInput={onChangeInput} searchValue={searchValue} trashSneaker={trashSneaker} addToFavorite={addToFavorite} addToShoppingCart={addToShoppingCart} removeToFavorite={removeToFavorite} removeToShoppingCart={removeToShoppingCart} favoriteSneaker={favoriteSneaker}></Home>
        </Route>
        <Route path="/favorites" exact >
          <Favorite dataSneaker={dataSneaker} onChangeInput={onChangeInput} searchValue={searchValue} trashSneaker={trashSneaker} addToFavorite={addToFavorite} addToShoppingCart={addToShoppingCart} removeToFavorite={removeToFavorite} removeToShoppingCart={removeToShoppingCart} favoriteSneaker={favoriteSneaker}></Favorite>
        </Route>
      </Switch>




    </div>
  );
}

export default App;
