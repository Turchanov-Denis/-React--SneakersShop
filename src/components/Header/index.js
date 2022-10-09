import Logo from "../Logo"
import UserBar from "../UserBar"
import "./header.css"
import {
  Link
} from "react-router-dom";
export default function Header(props) {
  // props: onTrashClick for trash icon UserBar
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__column">
          {/* Logo component */}
          <Link to="/"><Logo title="REACT SNEAKERS" subtitle="Магазин лучших кроссовок"></Logo></Link>
        </div>
        <div className="header__column">
          {/* UserBar component */}
          <UserBar onTrashClick={props.onTrashClick} counter={0}></UserBar>
        </div>
      </div>
    </header>
  )
}