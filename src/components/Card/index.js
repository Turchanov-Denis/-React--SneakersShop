import React from "react";
import './Card.css';
import AppContext from "../AppContext";
function Card(props) {
  const { isAdded, isFavorite } = React.useContext(AppContext)
  const url = "url('" + props.item.url + "')";
 



  return (
    <div className="сard">
      <button className={isFavorite(props.item.id) ? "сard__favorite-icon_active ibg " : "сard__favorite-icon ibg "} onClick={() => { isFavorite(props.item.id) ? props.onRepeatClickFavorite(props.item) : props.onFavorite(props.item) }}></button>
      <div className="сard__image ibg" style={{ backgroundImage: url }}></div>
      <div className="сard__title">
        {props.item.title}</div>
      <div className="сard__block">
        <div className="сard__price">
          <p>Price</p>
          <span>{props.item.price} руб.</span>
        </div>
        <button className={isAdded(props.item.id) ? "сard__add-icon_active ibg " : "сard__add-icon ibg "} onClick={() => isAdded(props.item.id) ? props.onRepeatClick(props.item) :  props.onPlus(props.item)}></button>
      </div>
    </div >
  )
}



export default Card;






