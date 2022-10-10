import React from "react";
import './Card.css';
import AppContext from "../AppContext";

function Card({ item, onRepeatClick, onRepeatClickFavorite, onFavorite, onPlus }) {
  const { isAdded, isFavorite } = React.useContext(AppContext)
  const url = "url('" + item.url + "')";
  
  return (
    <div className="card">
      <button className={isFavorite(item.id) ? "card__favorite-icon_active ibg " : "card__favorite-icon ibg "} onClick={() => { isFavorite(item.id) ? onRepeatClickFavorite(item) : onFavorite(item) }}></button>
      <div className="card__image ibg" style={{ backgroundImage: url }}></div>
      <div className="card__title">
        {item.title}</div>
      <div className="card__block">
        <div className="card__price">
          <p>Price</p>
          <span>{item.price} руб.</span>
        </div>
        <button className={isAdded(item.id) ? "card__add-icon_active ibg " : "card__add-icon ibg "} onClick={() => isAdded(item.id) ? onRepeatClick(item) : onPlus(item)}></button>
      </div>
    </div>
  )
}



export default Card;






