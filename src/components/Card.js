import React from 'react';




export default function Card () {
    return (
      <div className="sneaker-item">
          <button className="sneaker-item__favorite-icon  ibg"></button>
          <div className="sneaker-item__image ibg" style={{ backgroundImage: this.url }}></div>
          <div className="sneaker-item__title">
            <p>this.title</p>
            </div>
          <div className="sneaker-item__block">
            <div className="sneaker-item__price">
              <p>Price</p>
              <span>{this.price}</span>
            </div>
            <button className="sneaker-item__add-icon ibg"></button>
          </div>
        </div>
  )
}