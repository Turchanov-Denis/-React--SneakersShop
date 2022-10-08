import Logo from "../Logo"
import UserBar from "../UserBar"
import "./header.css"
export default function Header(props) {
  // props: onTrashClick for trash icon UserBar
    return (
        <header className="header">
        <div className="header__body">
          <div className="header__column">
            {/* Logo component */}
            <Logo title="REACT SNEAKERS" subtitle="Магазин лучших кроссовок"></Logo>
          </div>
          <div className="header__column">
            {/* UserBar component */}
            <UserBar onTrashClick={props.onTrashClick} counter= {0}></UserBar>
          </div>
        </div>
      </header>
    )
}