import React from "react";
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.url = "url('" + this.props.item.url + "')";
  }
  handleClickAdd() {
    this.setState(prevState => ({
      isToggleOnAdd: !prevState.isToggleOnAdd
    }));
    // this.render()
  }
  handleClickFavorite() {
    this.setState(prevState => ({
      isToggleOnFavorite: !prevState.isToggleOnFavorite
    }));
    // this.render()
  }
  render() {
    return (
      <div className="sneaker-item">
        <button className={(this.state.isToggleOnFavorite) ? "sneaker-item__favorite-icon_active ibg " : "sneaker-item__favorite-icon ibg "} onClick={this.handleClickFavorite.bind(this)}></button>
        <div className="sneaker-item__image ibg" style={{ backgroundImage: this.url }}></div>
        <div className="sneaker-item__title">
          {this.props.item.title}</div>
        <div className="sneaker-item__block">
          <div className="sneaker-item__price">
            <p>Price</p>
            <span>{this.props.item.price} руб.</span>
          </div>
          <button className={(this.state.isToggleOnAdd) ? "sneaker-item__add-icon_active ibg " : "sneaker-item__add-icon ibg "} onClick={this.handleClickAdd.bind(this)}></button>
        </div>
      </div>
    )
  }

}

export default Card;






// function Card({item}) {
//   const url = "url('"+item.url+"')";
//   console.log(url)
//   return (
//     <div className="sneaker-item">
//       <button className="sneaker-item__favorite-icon  ibg"></button>
//       <div className="sneaker-item__image ibg" style={{ backgroundImage: url }}></div>
//       <div className="sneaker-item__title">
//         {item.title}</div>
//       <div className="sneaker-item__block">
//         <div className="sneaker-item__price">
//           <p>Price</p>
//           <span>{item.price} руб.</span>
//         </div>
//         <button className="sneaker-item__add-icon ibg"></button>
//       </div>
//     </div>
//   )
// }
