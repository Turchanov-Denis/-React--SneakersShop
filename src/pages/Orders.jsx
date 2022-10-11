import Card from "../components/Card"
import CartLoder from "../components/CartLoader"
import AppContext from "../components/AppContext"

export default function Orders({ dataSneaker,
    onChangeInput,
    searchValue,
    trashSneaker,
    addToFavorite,
    addToShoppingCart,
    removeToFavorite,
    removeToShoppingCart,
    favoriteSneaker, isLoading = true, orderSneaker }) {
        console.log(orderSneaker)
    return (
        <AppContext.Provider value={{ isAdded: ()=> false, isFavorite: ()=> false }}>
            <section className="content">
                <div className="container">
                    <div className="content__header">
                        <div className="content__title">Orders</div>

                    </div>
                    {/* item */}
                    <div className='content__body'>
                        {/* {createContent(dataSneaker)} */}
                        {isLoading ? (<><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder><CartLoder></CartLoder></>) : (orderSneaker.map((item) =>
                        (<div className='content__column'><Card key={item[0].id} item={item[0]} onFavorite={(obj) => { addToFavorite(obj) }} onPlus={(obj) => {
                            addToShoppingCart(obj)
                        }} onRepeatClickFavorite={(obj) => { removeToFavorite(obj) }} onRepeatClick={(obj) => {
                            removeToShoppingCart(obj)
                        }}></Card></div>)
                        ))}
                    </div>
                </div>
            </section>
        </AppContext.Provider>
    )
}