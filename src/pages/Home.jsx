import Card from "../components/Card"
import CartLoder from "../components/CartLoader"
import AppContext from "../components/AppContext"
function Home({ dataSneaker,
  onChangeInput,
  searchValue,
  trashSneaker,
  addToFavorite,
  addToShoppingCart,
  removeToFavorite,
  removeToShoppingCart,
  favoriteSneaker, isLoading = true }) {

  const isAdded = (id) => { trashSneaker.some(e => Number(e.id) === Number(id)) }
  const isFavorite = (id) => { favoriteSneaker.some(e => Number(e.id) === Number(id)) }


  return (
    <AppContext.Provider value={{isAdded, isFavorite}}>
      <section className="content">
        <div className="container">
          <div className="content__header">
            <div className="content__title">All Sneakers</div>
            <input onChange={onChangeInput} className="content__find-input" placeholder='Поиск...'></input>
          </div>
          {/* item */}
          <div className='content__body'>
            {/* {createContent(dataSneaker)} */}


            {isLoading ? (<><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder></>) : (dataSneaker.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase())).map((item) =>
            (<div className='content__column'><Card key={item.id} item={item} onFavorite={(obj) => { addToFavorite(obj) }} onPlus={(obj) => {
              addToShoppingCart(obj)
            }} onRepeatClickFavorite={(obj) => { removeToFavorite(obj) }} onRepeatClick={(obj) => {
              removeToShoppingCart(obj)
            }} isFavorite={favoriteSneaker.some(e => Number(e.id) === Number(item.id))}></Card></div>)
            ))}
          </div>
        </div>
      </section>
    </AppContext.Provider>
  )
}

export default Home