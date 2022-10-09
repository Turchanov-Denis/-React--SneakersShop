import React from "react";
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOnAdd: false,
      isToggleOnFavorite: false,
    };
    this.url = "url('" + this.props.item.url + "')";
    this.handleClickFavorite = this.handleClickFavorite.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this)

  }
  handleClickAdd() {
    this.setState(prevState => ({
      isToggleOnAdd: !prevState.isToggleOnAdd
    }));
    this.state.isToggleOnAdd ? this.props.onRepeatClick(this.props.item) : this.props.onPlus(this.props.item)
    // this.render()
  }
  handleClickFavorite() {
    this.setState(prevState => ({
      isToggleOnFavorite: !prevState.isToggleOnFavorite
    }));
    this.state.isToggleOnFavorite ? this.props.onRepeatClickFavorite(this.props.item) : this.props.onFavorite(this.props.item)
    // this.render()
  }
  render() {
    return (
      <div className="сard">
        <button className={(this.state.isToggleOnFavorite) ? "сard__favorite-icon_active ibg " : "сard__favorite-icon ibg "} onClick={this.handleClickFavorite}></button>
        <div className="сard__image ibg" style={{ backgroundImage: this.url }}></div>
        <div className="сard__title">
          {this.props.item.title}</div>
        <div className="сard__block">
          <div className="сard__price">
            <p>Price</p>
            <span>{this.props.item.price} руб.</span>
          </div>
          <button className={(this.state.isToggleOnAdd) ? "сard__add-icon_active ibg " : "сard__add-icon ibg "} onClick={this.handleClickAdd}></button>
        </div>
      </div>
    )
  }

}

export default Card;






