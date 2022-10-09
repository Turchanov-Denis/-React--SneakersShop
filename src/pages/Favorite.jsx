import Card from "../components/Card"


function Favorite({ dataSneaker,
    onChangeInput,
    searchValue,
    trashSneaker,
    addToFavorite,
    addToShoppingCart,
    removeToFavorite,
    removeToShoppingCart,
    favoriteSneaker }) {
    return (
        
        <section className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__title">My bookmarks</div>
                    {/* <input onChange={onChangeInput} className="content__find-input" placeholder='Поиск...'></input> */}
                </div>
                {/* item */}
                <div className='content__body'>
                    {/* {createContent(dataSneaker)} */}

                    {favoriteSneaker.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase())).map((item) =>
                    (<div className='content__column'><Card  item={item} key={item.id} Favorited = {true} onFavorite={(obj) => { addToFavorite(obj) }} onPlus={(obj) => {
                        addToShoppingCart(obj)
                    }} onRepeatClickFavorite={(obj) => { removeToFavorite(obj) }} onRepeatClick={(obj) => {
                        removeToShoppingCart(obj)
                    }}></Card></div>)
                    )}
                </div>
            </div>
        </section>
    )
}

export default Favorite