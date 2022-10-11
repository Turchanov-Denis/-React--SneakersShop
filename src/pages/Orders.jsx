import Card from "../components/Card"
import AppContext from "../components/AppContext"
import React from 'react'
import axios from "axios"


export default function Orders({
    addToFavorite,
    addToShoppingCart,
    removeToFavorite,
    removeToShoppingCart }) {
    const [orderSneaker, setOrderSneaker] = React.useState([])
    React.useEffect(() => {
        (async () => {
            const ordersResponse = await axios.get("https://6341ed4620f1f9d7997bd569.mockapi.io/orders");
            setOrderSneaker(ordersResponse.data)
        })()
    })

    return (
        <AppContext.Provider value={{ isAdded: () => false, isFavorite: () => false }}>
            <section className="content">
                <div className="container">
                    <div className="content__header">
                        <div className="content__title">Orders</div>

                    </div>
                    {/* item */}
                    <div className='content__body'>
                        {/* {createContent(dataSneaker)} */}
                        {(orderSneaker.map((item) =>
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