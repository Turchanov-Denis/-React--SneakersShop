import Card from "../components/Card"


function Home({dataSneaker,
    onChangeInput,
    searchValue,
    trashSneaker,
    addToFavorite,
    addToShoppingCart,
    removeToFavorite,
    removeToShoppingCart,
    favoriteSneaker}){
    return (
        <section className="content">
        <div className="container">
          <div className="content__header">
            <div className="content__title">All Sneakers</div>
            <input onChange={onChangeInput} className="content__find-input" placeholder='Поиск...'></input>
          </div>
          {/* item */}
          <div className='content__body'>
            {/* {createContent(dataSneaker)} */}

            {dataSneaker.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase())).map((item) =>
            (<div className='content__column'><Card trashSneaker={trashSneaker} item={item} key={item.id} onFavorite={(obj) => { addToFavorite(obj) }} onPlus={(obj) => {
              addToShoppingCart(obj) 
            }} onRepeatClickFavorite={(obj) => { removeToFavorite(obj) }} onRepeatClick={(obj) => {
              removeToShoppingCart(obj)
            }} favoriteSneaker={favoriteSneaker}></Card></div>)
            )}
          </div>
        </div>
      </section>
    )
}

export default Home