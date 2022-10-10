import Card from "../components/Card"
import AppContext from "../components/AppContext"
import InfoLabel from "../components/InfoLabel"
function Favorite({ dataSneaker,
    onChangeInput,
    searchValue,
    trashSneaker,
    addToFavorite,
    addToShoppingCart,
    removeToFavorite,
    removeToShoppingCart,
    favoriteSneaker }) {
        const isAdded = (id) => { return trashSneaker.some(e => Number(e.id) === Number(id)) }
  const isFavorite = (id) => { return favoriteSneaker.some(e => Number(e.id) === Number(id)) }
    return (
    <AppContext.Provider value={{ isAdded, isFavorite }}>
        <section className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__title">My bookmarks</div>
                    {/* <input onChange={onChangeInput} className="content__find-input" placeholder='Поиск...'></input> */}
                </div>
                {/* item */}
                <div className='content__body'>
                    {/* {createContent(dataSneaker)} */}
                    {favoriteSneaker.length > 0 ? (favoriteSneaker.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase())).map((item) =>
                    (<div className='content__column'><Card  item={item} key={item.id}  onFavorite={(obj) => { addToFavorite(obj) }} onPlus={(obj) => {
                        addToShoppingCart(obj)
                    }} onRepeatClickFavorite={(obj) => { removeToFavorite(obj) }} onRepeatClick={(obj) => {
                        removeToShoppingCart(obj)
                    }}></Card></div>) 
                    )) : <InfoLabel styleImg={{
                width: "45px",
                height: "45px"
            }}  title="Закладок нет :(" text="Вы ничего не добавляли в закладки" url="./img/noBookmark.png"></InfoLabel>}
                </div>
            </div>
        </section>
    </AppContext.Provider>
    )
}

export default Favorite