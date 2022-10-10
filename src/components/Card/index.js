import React from "react";
import './Card.css';
import AppContext from "../AppContext";
function Card(props) {
  const { isAdded } = React.useContext(AppContext)
  // state = {
  //   isToggleOnAdd: isAdded,
  //   isToggleOnFavorite: props.isFavorite,
  // };
  url = "url('" + props.item.url + "')";
  handleClickFavorite = handleClickFavorite.bind(this);
  handleClickAdd = handleClickAdd.bind(this)


  handleClickAdd() {
    setState(prevState => ({
      isToggleOnAdd: !prevState.isToggleOnAdd
    }));
    state.isToggleOnAdd ? props.onRepeatClick(props.item) : props.onPlus(props.item)
    // render()
  }
  handleClickFavorite() {
    setState(prevState => ({
      isToggleOnFavorite: !prevState.isToggleOnFavorite
    }));
    state.isToggleOnFavorite ? props.onRepeatClickFavorite(props.item) : props.onFavorite(props.item)
    // render()
  }
  render() {
    return (
      <div className="сard">
        <button className={(state.isToggleOnFavorite) ? "сard__favorite-icon_active ibg " : "сard__favorite-icon ibg "} onClick={handleClickFavorite}></button>
        <div className="сard__image ibg" style={{ backgroundImage: url }}></div>
        <div className="сard__title">
          {props.item.title}</div>
        <div className="сard__block">
          <div className="сard__price">
            <p>Price</p>
            <span>{props.item.price} руб.</span>
          </div>
          <button className={isAdded ? "сard__add-icon_active ibg " : "сard__add-icon ibg "} onClick={handleClickAdd}></button>
        </div>
      </div>
    )
  }

}

export default Card;






