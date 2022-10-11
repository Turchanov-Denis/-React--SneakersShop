import TrashCard from "./Card/TrashCard"
import InfoLabel from "./InfoLabel"
import React from 'react'
import axios from "axios"
export default function Overlay({ trashSneaker = [], onTrashClick, onRepeatClick, setTrashSneaker }) {
  //props: onTrashClick: is a callback - toggle overlay functional : hide or show

  function createContent(dataSneaker) {
    try {
      return dataSneaker.map((item) =>
        (<div className='content__column'><TrashCard item={item} key={item.id} onRepeatClick={onRepeatClick}></TrashCard></div>)
      )
    }
    catch (err) {
      console.log(err)
    }
  }


  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null)
  const onClickOrder = async () => {
    try {
      const { data } = await axios.post("https://6341ed4620f1f9d7997bd569.mockapi.io/orders", trashSneaker)
      console.log(data)
      setOrderId(data.id)
      setIsOrderCompleted(true)
      setTrashSneaker([])
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <section className="overlay" onClick={(e) => { e.target === e.currentTarget && onTrashClick() }}>
      <div className="overlay__body">
        <div className="overlay__header">
          <div className="overlay__title">Корзина</div>
          <button className="overlay__close" onClick={onTrashClick}></button>
        </div>
        <div className="overlay__content">
          {/* item */}
          {trashSneaker.length > 0 ? (
            <div>
              {createContent(trashSneaker)}
              <div className="overlay__price-block">
                <div className="price-block">
                  <div className="price-block__label">Итого: </div>
                  <div className="price-block__dash"></div>
                  <div className="price-block__counter">{trashSneaker.reduce((counter, item) => counter += item.price, 0)} руб</div>
                </div>
                <div className="overlay__price-block">
                  <div className="price-block">
                    <div className="price-block__label price-block__label_tax">Налог 5%:</div>
                    <div className="price-block__dash"></div>
                    <div className="price-block__counter">{(trashSneaker.reduce((counter, item) => counter += item.price, 0) * 0.05).toFixed(2)} руб </div>
                  </div>
                </div>
              </div>

              <button className="overlay__checkout" onClick={onClickOrder}>Оформить заказ <img src='img/content/icon/arrow.svg' ></img>
              </button></div>
          )
            : <InfoLabel onTrashClick={onTrashClick} title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"} text={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} url={isOrderCompleted ? "./img/completeCheckOut.png" : "./img/cartEmpty.png"} styleImg={isOrderCompleted ? {
              width: "120px",
            } : {
              width: "120px",
              height: "120px"
            }}></InfoLabel>}
        </div>

      </div>
    </section>
  )
}