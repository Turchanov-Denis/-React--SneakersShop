import Logo from "./Logo"
import UserBar from "./UserBar"

export default function Header() {
    return (
        <header className="header">
        <div className="header__body">
          <div className="header__column">
            {/* Logo component */}
            <Logo></Logo>
          </div>
          <div className="header__column">
            {/* UserBar component */}
            
          </div>
        </div>
      </header>
    )
}