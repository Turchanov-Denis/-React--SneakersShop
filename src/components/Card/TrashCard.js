import React from "react";


function TrashCard({ item }) {
    const url = "url('" + item.url + "')";
    console.log(url)
    return (
        <div className="sneaker-item-trash">
            <div className="sneaker-item-trash__image" style={{ backgroundImage: url }}></div>
            <div className="sneaker-item-trash__price">
                <div className="sneaker-item-trash__title">{item.title}</div>
                <span>{item.price}</span>
            </div>
            <button className="sneaker-item-trash__remove-icon">
            </button>
        </div>
    )
}


export default TrashCard;